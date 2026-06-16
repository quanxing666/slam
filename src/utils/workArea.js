/** localStorage 键：工作区多边形顶点（canonical 平面 x/z） */
const WORK_AREA_STORAGE_KEY = 'slam-ar-robot-work-area-v3'

export const WORK_AREA_COLORS = {
  fill: 0xfff9c4,
  fillOpacity: 0.62,
  outline: 0xf9a825,
}

/** 机器人轨迹颜色（俯视淡绿带） */
export const ROBOT_TRAIL_COLORS = {
  inside: 0x22c55e,
}

/** @param {unknown} points */
function normalizePoints(points) {
  if (!Array.isArray(points) || points.length < 3) return null
  const normalized = points
    .map((p) => ({ x: Number(p.x), z: Number(p.z) }))
    .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.z))
  return normalized.length >= 3 ? normalized : null
}

/** @returns {{ x: number, z: number }[] | null} */
export function loadWorkAreaFromStorage() {
  try {
    const raw = localStorage.getItem(WORK_AREA_STORAGE_KEY)
    if (!raw) return null
    return normalizePoints(JSON.parse(raw)?.points)
  } catch {
    return null
  }
}

/** @param {{ x: number, z: number }[]} points */
export function saveWorkAreaToStorage(points) {
  if (!points || points.length < 3) {
    localStorage.removeItem(WORK_AREA_STORAGE_KEY)
    return
  }
  localStorage.setItem(
    WORK_AREA_STORAGE_KEY,
    JSON.stringify({ points, savedAt: Date.now() })
  )
}

export function clearWorkAreaStorage() {
  localStorage.removeItem(WORK_AREA_STORAGE_KEY)
}
