/**
 * 从 public/map-transform.json 加载固定平移 C 与旋转 R（与 export-map-transform 导出格式一致）。
 */
import * as THREE from 'three'
import { numOrNull } from './number.js'

export const USE_MAP_TRANSFORM_JSON = import.meta.env.VITE_USE_MAP_TRANSFORM_JSON === '1'
/** 为 true 时 /status 的 robot_x/y/z 视为 PCD 原始坐标，前端减 C 转为 canonical */
export const HW_POSE_IS_RAW = import.meta.env.VITE_HW_POSE_IS_RAW === '1'
export const MAP_TRANSFORM_URL =
  import.meta.env.VITE_MAP_TRANSFORM_URL || '/map-transform.json'

/** @type {object | null} */
let cachedFile = null
/** @type {THREE.Vector3 | null} */
let cachedCentroid = null
/** @type {THREE.Quaternion | null} */
let cachedSceneRotation = null

/**
 * @param {unknown} data
 * @returns {{ layoutCentroid_C: THREE.Vector3, sceneRotation: THREE.Quaternion }}
 */
function parseMapTransform(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('map-transform.json 根节点必须是对象')
  }
  const c = data.layoutCentroid_C
  if (!c || typeof c !== 'object') {
    throw new Error('缺少 layoutCentroid_C')
  }
  const cx = numOrNull(c.x)
  const cy = numOrNull(c.y)
  const cz = numOrNull(c.z)
  if (cx === null || cy === null || cz === null) {
    throw new Error('layoutCentroid_C.x/y/z 无效')
  }

  const q = data.sceneRotation?.quaternion
  if (!q || typeof q !== 'object') {
    throw new Error('缺少 sceneRotation.quaternion')
  }
  const qx = numOrNull(q.x)
  const qy = numOrNull(q.y)
  const qz = numOrNull(q.z)
  const qw = numOrNull(q.w)
  if (qx === null || qy === null || qz === null || qw === null) {
    throw new Error('sceneRotation.quaternion 分量无效')
  }

  const quat = new THREE.Quaternion(qx, qy, qz, qw)
  if (Math.abs(quat.length() - 1) > 0.01) {
    quat.normalize()
  }

  return {
    layoutCentroid_C: new THREE.Vector3(cx, cy, cz),
    sceneRotation: quat,
  }
}

/**
 * @param {string} [url]
 * @returns {Promise<object>}
 */
export async function loadMapTransform(url = MAP_TRANSFORM_URL) {
  if (cachedFile) return cachedFile

  const res = await fetch(url, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error(`加载 ${url} 失败: HTTP ${res.status}`)
  }
  const data = await res.json()
  const parsed = parseMapTransform(data)

  cachedFile = data
  cachedCentroid = parsed.layoutCentroid_C
  cachedSceneRotation = parsed.sceneRotation
  return data
}

/** @returns {THREE.Vector3 | null} */
export function getLayoutCentroid() {
  return cachedCentroid ? cachedCentroid.clone() : null
}

/** @returns {THREE.Quaternion | null} */
export function getSceneRotationQuaternion() {
  return cachedSceneRotation ? cachedSceneRotation.clone() : null
}

/**
 * P_raw → P_can
 * @param {{ x: number, y: number, z: number, yaw?: number }} raw
 * @param {THREE.Vector3} centroid
 */
export function rawPoseToCanonical(raw, centroid) {
  return {
    x: raw.x - centroid.x,
    y: raw.y - centroid.y,
    z: raw.z - centroid.z,
    ...(typeof raw.yaw === 'number' ? { yaw: raw.yaw } : {}),
  }
}

/**
 * P_can → P_raw（硬件底盘用原始系时 /control 下发）
 * @param {{ x: number, y: number, z: number, yaw?: number }} canonical
 * @param {THREE.Vector3} centroid
 */
export function canonicalPoseToRaw(canonical, centroid) {
  return {
    x: canonical.x + centroid.x,
    y: canonical.y + centroid.y,
    z: canonical.z + centroid.z,
    ...(typeof canonical.yaw === 'number' ? { yaw: canonical.yaw } : {}),
  }
}

export function clearMapTransformCache() {
  cachedFile = null
  cachedCentroid = null
  cachedSceneRotation = null
}

