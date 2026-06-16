// 点云多平面检测、行走面对齐等
import * as THREE from 'three'

function planeFrom3Points(p1, p2, p3) {
  const v1 = new THREE.Vector3().subVectors(p2, p1)
  const v2 = new THREE.Vector3().subVectors(p3, p1)
  const normal = new THREE.Vector3().crossVectors(v1, v2).normalize()
  const d = -normal.dot(p1)
  return { normal, d }
}

function pointToPlaneDistance(point, normal, d) {
  return Math.abs(normal.dot(point) + d)
}

export function createSegmentedGeometries(geometry, floorIndices, obstacleIndices, options = {}) {
  const { maxDisplayPoints = Infinity } = options
  const positions = geometry.getAttribute('position')
  const colors = geometry.getAttribute('color')
  const hasColor = !!colors

  const total = floorIndices.size + obstacleIndices.size
  const floorTarget = total > 0 ? (maxDisplayPoints * floorIndices.size) / total : 0
  const obstacleTarget = total > 0 ? (maxDisplayPoints * obstacleIndices.size) / total : 0
  const floorStep = total > maxDisplayPoints && floorTarget > 0 ? Math.max(1, Math.floor(floorIndices.size / floorTarget)) : 1
  const obstacleStep = total > maxDisplayPoints && obstacleTarget > 0 ? Math.max(1, Math.floor(obstacleIndices.size / obstacleTarget)) : 1

  const floorPositions = []
  const floorColors = []
  const obstaclePositions = []
  const obstacleColors = []

  let fi = 0
  for (const i of floorIndices) {
    if (fi++ % floorStep !== 0) continue
    floorPositions.push(positions.getX(i), positions.getY(i), positions.getZ(i))
    if (hasColor) {
      floorColors.push(colors.getX(i), colors.getY(i), colors.getZ(i))
    } else {
      floorColors.push(0.75, 0.75, 0.75)
    }
  }

  let oi = 0
  for (const i of obstacleIndices) {
    if (oi++ % obstacleStep !== 0) continue
    obstaclePositions.push(positions.getX(i), positions.getY(i), positions.getZ(i))
    if (hasColor) {
      obstacleColors.push(colors.getX(i), colors.getY(i), colors.getZ(i))
    } else {
      obstacleColors.push(0.75, 0.75, 0.75)
    }
  }

  const floorGeo = new THREE.BufferGeometry()
  floorGeo.setAttribute('position', new THREE.Float32BufferAttribute(floorPositions, 3))
  floorGeo.setAttribute('color', new THREE.Float32BufferAttribute(floorColors, 3))
  floorGeo.computeBoundingSphere()

  const obstacleGeo = new THREE.BufferGeometry()
  obstacleGeo.setAttribute('position', new THREE.Float32BufferAttribute(obstaclePositions, 3))
  obstacleGeo.setAttribute('color', new THREE.Float32BufferAttribute(obstacleColors, 3))
  obstacleGeo.computeBoundingSphere()

  return { floorGeo, obstacleGeo }
}

function createSeededRandom(seed = 12345) {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 0x100000000
  }
}

function stabilizePlaneOrder(planes) {
  return [...planes].sort((a, b) => {
    if (b.indices.size !== a.indices.size) return b.indices.size - a.indices.size
    const c = a.centroid
    const d = b.centroid
    if (c.x !== d.x) return c.x - d.x
    if (c.y !== d.y) return c.y - d.y
    return c.z - d.z
  })
}

export function detectMultiplePlanes(geometry, options = {}) {
  const {
    distanceThreshold = 0.05,
    maxIterations = 150,
    minPlanePoints = 20,
    maxPlanes = 8,
    randomSeed = 12345,
  } = options

  const positions = geometry.getAttribute('position')
  if (!positions || positions.count === 0) {
    return { planes: [], remainingIndices: new Set() }
  }

  const points = []
  for (let i = 0; i < positions.count; i++) {
    points.push(new THREE.Vector3(
      positions.getX(i),
      positions.getY(i),
      positions.getZ(i)
    ))
  }

  const rng = createSeededRandom(randomSeed)
  const planes = []
  let remainingIndices = new Set([...Array(points.length).keys()])

  for (let p = 0; p < maxPlanes; p++) {
    if (remainingIndices.size < minPlanePoints * 3) break

    const remainingPoints = [...remainingIndices]
    let bestInliers = []
    let bestNormal = null
    let bestD = 0

    const randomInt = (max) => Math.floor(rng() * max)

    for (let iter = 0; iter < maxIterations; iter++) {
      const i1 = remainingPoints[randomInt(remainingPoints.length)]
      let i2 = remainingPoints[randomInt(remainingPoints.length)]
      let i3 = remainingPoints[randomInt(remainingPoints.length)]
      while (i2 === i1) i2 = remainingPoints[randomInt(remainingPoints.length)]
      while (i3 === i1 || i3 === i2) i3 = remainingPoints[randomInt(remainingPoints.length)]

      const { normal, d } = planeFrom3Points(points[i1], points[i2], points[i3])

      const inliers = []
      for (const i of remainingIndices) {
        const dist = pointToPlaneDistance(points[i], normal, d)
        if (dist <= distanceThreshold) inliers.push(i)
      }

      if (inliers.length > bestInliers.length) {
        bestInliers = inliers
        bestNormal = normal.clone()
        bestD = d
      }
    }

    if (bestInliers.length < minPlanePoints) break

    const centroid = new THREE.Vector3(0, 0, 0)
    for (const i of bestInliers) {
      centroid.add(points[i])
    }
    centroid.divideScalar(bestInliers.length)

    planes.push({
      indices: new Set(bestInliers),
      normal: bestNormal,
      d: bestD,
      centroid,
    })

    for (const i of bestInliers) {
      remainingIndices.delete(i)
    }
  }

  // 去重：只合并法向量同向且共面的平面（避免地板和天花板被合并）
  const uniquePlanes = []
  for (const p of planes) {
    let merged = false
    for (const u of uniquePlanes) {
      const dot = p.normal.dot(u.normal)
      const distToU = Math.abs(p.normal.dot(u.centroid) + p.d)
      if (dot > 0.98 && distToU < distanceThreshold * 2) {
        p.indices.forEach((i) => u.indices.add(i))
        merged = true
        break
      }
    }
    if (!merged) {
      uniquePlanes.push(p)
    }
  }

  return { planes: stabilizePlaneOrder(uniquePlanes), remainingIndices }
}

export function selectFloorPlane(planes, points) {
  const horizontalPlanes = planes.filter((p) => Math.abs(p.normal.y) > 0.7)
  const candidates = horizontalPlanes.length > 0 ? horizontalPlanes : planes
  candidates.sort((a, b) => {
    if (b.indices.size !== a.indices.size) return b.indices.size - a.indices.size
    const meanYA = [...a.indices].reduce((s, i) => s + points[i].y, 0) / a.indices.size
    const meanYB = [...b.indices].reduce((s, i) => s + points[i].y, 0) / b.indices.size
    return meanYA - meanYB
  })
  return candidates[0] || planes[0]
}

export function rotationToAlignPrincipalAxis(floorPoints) {
  if (floorPoints.length < 2) return new THREE.Quaternion()
  let sumX = 0
  let sumZ = 0
  let sumXX = 0
  let sumZZ = 0
  let sumXZ = 0
  for (const p of floorPoints) {
    sumX += p.x
    sumZ += p.z
    sumXX += p.x * p.x
    sumZZ += p.z * p.z
    sumXZ += p.x * p.z
  }
  const n = floorPoints.length
  const cx = sumX / n
  const cz = sumZ / n
  const covXX = sumXX / n - cx * cx
  const covZZ = sumZZ / n - cz * cz
  const covXZ = sumXZ / n - cx * cz
  const trace = covXX + covZZ
  const det = covXX * covZZ - covXZ * covXZ
  const lambda = trace / 2 + Math.sqrt(trace * trace / 4 - det)
  const eigenZ = lambda - covXX
  const eigenX = covXZ
  const len = Math.sqrt(eigenX * eigenX + eigenZ * eigenZ) || 1e-6
  const dirX = len < 1e-6 ? 1 : eigenX / len
  const dirZ = len < 1e-6 ? 0 : eigenZ / len
  const angle = -Math.atan2(dirZ, dirX)
  return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle)
}

export function projectVectorOnPlane(v, planeNormal) {
  const n = planeNormal.clone().normalize()
  const scalar = n.dot(v)
  return v.clone().sub(n.multiplyScalar(scalar))
}

export function rotationToHorizontal(planeNormal) {
  const up = new THREE.Vector3(0, 1, 0)
  const n = planeNormal.clone().normalize()
  const dot = n.dot(up)
  const q = new THREE.Quaternion()
  if (dot > 0.9999) {
    return q.identity()
  }
  if (dot < -0.9999) {
    q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI)
    return q
  }
  q.setFromUnitVectors(n, up)
  return q
}

export function flipUpsideDown() {
  return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI)
}

