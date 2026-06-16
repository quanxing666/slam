/**
 * 从 map.pcd 导出 map-transform.json（固定平移 C 与旋转 R）。
 * 不导出预分割 floor/obstacle PCD；运行时仍在线 RANSAC 分割。
 * 用法: node scripts/export-map-transform.mjs [pcdPath] [walkingPlaneNumber]
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as THREE from 'three'
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js'
import {
  detectMultiplePlanes,
  selectFloorPlane,
  rotationToHorizontal,
  flipUpsideDown,
  rotationToAlignPrincipalAxis,
  createSegmentedGeometries,
} from '../src/utils/floorDetection.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const publicDir = path.join(rootDir, 'public')
const pcdPath = path.resolve(rootDir, process.argv[2] || 'public/map.pcd')
const onlyWalkingPlaneNumber = Number(process.argv[3] || 2)

const DETECT_OPTS = {
  distanceThreshold: 0.05,
  maxIterations: 200,
  minPlanePoints: 20,
  maxPlanes: 8,
  randomSeed: 12345,
}

function round(n, digits = 6) {
  return Number(n.toFixed(digits))
}

function vec3(v) {
  return { x: round(v.x), y: round(v.y), z: round(v.z) }
}

function quat(q) {
  return { x: round(q.x), y: round(q.y), z: round(q.z), w: round(q.w) }
}

function matrix3RowMajor(m) {
  const e = m.elements
  return [
    round(e[0]), round(e[1]), round(e[2]),
    round(e[4]), round(e[5]), round(e[6]),
    round(e[8]), round(e[9]), round(e[10]),
  ]
}

function computeMapTransform(geometry) {
  const { planes, remainingIndices } = detectMultiplePlanes(geometry, DETECT_OPTS)
  if (planes.length === 0) {
    throw new Error('未检测到平面')
  }

  const pos = geometry.getAttribute('position')
  const points = []
  for (let i = 0; i < pos.count; i++) {
    points.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)))
  }

  const layoutPlane = selectFloorPlane(planes, points)
  const layoutCentroid = layoutPlane.centroid.clone()

  const idx = Math.floor(onlyWalkingPlaneNumber) - 1
  if (idx < 0 || idx >= planes.length) {
    throw new Error(`行走面 ${onlyWalkingPlaneNumber} 不存在，共检测到 ${planes.length} 个平面`)
  }
  const floorPlane = planes[idx]

  for (let i = 0; i < pos.count; i++) {
    pos.setX(i, pos.getX(i) - layoutCentroid.x)
    pos.setY(i, pos.getY(i) - layoutCentroid.y)
    pos.setZ(i, pos.getZ(i) - layoutCentroid.z)
  }
  for (const p of planes) {
    p.centroid.sub(layoutCentroid)
  }

  const floorIndices = floorPlane.indices
  const obstacleIndices = new Set([...remainingIndices])
  for (let i = 0; i < planes.length; i++) {
    if (planes[i] !== floorPlane) {
      planes[i].indices.forEach((id) => obstacleIndices.add(id))
    }
  }

  const { floorGeo, obstacleGeo } = createSegmentedGeometries(
    geometry,
    floorIndices,
    obstacleIndices,
    { maxDisplayPoints: Infinity }
  )

  let sceneRotation = rotationToHorizontal(floorPlane.normal)
  const posAttr = floorGeo.getAttribute('position')
  const obsPosAttr = obstacleGeo.getAttribute('position')
  const v = new THREE.Vector3()
  let floorSumY = 0
  let obsSumY = 0

  for (let i = 0; i < posAttr.count; i++) {
    v.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).applyQuaternion(sceneRotation)
    floorSumY += v.y
  }
  for (let i = 0; i < obsPosAttr.count; i++) {
    v.set(obsPosAttr.getX(i), obsPosAttr.getY(i), obsPosAttr.getZ(i)).applyQuaternion(sceneRotation)
    obsSumY += v.y
  }

  const floorMeanY = posAttr.count ? floorSumY / posAttr.count : 0
  const obsMeanY = obsPosAttr.count ? obsSumY / obsPosAttr.count : 0
  const flipped = floorMeanY > obsMeanY
  if (flipped) {
    sceneRotation.premultiply(flipUpsideDown())
  }

  const floorPointsForAlign = []
  for (let i = 0; i < posAttr.count; i++) {
    floorPointsForAlign.push(
      new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
    )
  }
  const alignQ = rotationToAlignPrincipalAxis(floorPointsForAlign)
  sceneRotation.premultiply(alignQ)

  const currentFloorD = -floorPlane.centroid.clone().applyQuaternion(sceneRotation).y
  const rotMat = new THREE.Matrix4().makeRotationFromQuaternion(sceneRotation)
  const euler = new THREE.Euler().setFromQuaternion(sceneRotation, 'XYZ')

  return {
    json: {
      mapFile: path.basename(pcdPath),
      generatedAt: new Date().toISOString(),
      config: {
        onlyWalkingPlaneNumber,
        floorDistanceThreshold: DETECT_OPTS.distanceThreshold,
        planeDetectionSeed: DETECT_OPTS.randomSeed,
      },
      planesDetected: planes.length,
      layoutCentroid_C: vec3(layoutCentroid),
      sceneRotation: {
        quaternion: quat(sceneRotation),
        eulerRadXYZ: { x: round(euler.x), y: round(euler.y), z: round(euler.z) },
        matrix3x3_rowMajor: matrix3RowMajor(rotMat),
        flippedUpsideDown: flipped,
      },
      currentFloorD: round(currentFloorD),
      floorPointCount: posAttr.count,
      obstaclePointCount: obsPosAttr.count,
      formulas: {
        rawToCanonical: 'P_can = P_raw - C',
        canonicalToWorld: 'P_world = R * P_can',
        rawToWorld: 'P_world = R * (P_raw - C)',
        hardwareFromRaw: {
          robot_x: 'P_can.x',
          robot_y: 'P_can.y (可固定常数，前端贴地用点云)',
          robot_z: 'P_can.z',
        },
      },
    },
  }
}

async function main() {
  if (!fs.existsSync(pcdPath)) {
    console.error(`PCD 不存在: ${pcdPath}`)
    process.exit(1)
  }

  const loader = new PCDLoader()
  const fileBuf = fs.readFileSync(pcdPath)
  const arrayBuffer = fileBuf.buffer.slice(fileBuf.byteOffset, fileBuf.byteOffset + fileBuf.byteLength)
  const pointCloud = loader.parse(arrayBuffer)

  const { json } = computeMapTransform(pointCloud.geometry)
  const jsonPath = path.join(publicDir, 'map-transform.json')

  fs.writeFileSync(jsonPath, `${JSON.stringify(json, null, 2)}\n`, 'utf8')

  console.log('已导出 map-transform.json（仅平移 C + 旋转 R）:')
  console.log(`  ${jsonPath}`)
  console.log(`  地板约 ${json.floorPointCount} 点, 障碍约 ${json.obstaclePointCount} 点（仅供参考，运行时仍在线分割）`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
