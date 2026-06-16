/**
 * 机器人路点（canonical 坐标，与 spawnCanonical / interactionZones 同一坐标系）。
 * @typedef {{ id: string, label: string, x: number, y: number, z: number, yaw?: number }} RobotWaypoint
 */

/** 出生点 / 相机 spawn 对应的路点 id */
export const SPAWN_WAYPOINT_ID = 'home'

/** 交互区球体半径（米），与原先 App.vue 硬编码一致 */
export const INTERACTION_ZONE_RADIUS = 1.0

/** @type {RobotWaypoint[]} */
export const ROBOT_WAYPOINTS = [
  { id: 'home', label: '起点', x: 0.62, y: 4.42, z: -1.22, yaw: 0 },
  { id: 'fan', label: '风扇', x: -2.5, y: 9.46, z: 0.04, yaw: 1.57 },
  { id: 'gate', label: '大门', x: 7.36, y: 3.05, z: -0.26, yaw: 3.14 },
  { id: 'light', label: '灯', x: 1.21, y: -1.15, z: 0.29, yaw: 0.78 },
]

/** @returns {{ x: number, y: number, z: number } | null} */
export function getSpawnCanonical() {
  const home =
    ROBOT_WAYPOINTS.find((w) => w.id === SPAWN_WAYPOINT_ID) ?? ROBOT_WAYPOINTS[0]
  if (!home) return null
  return { x: home.x, y: home.y, z: home.z }
}

/** @returns {{ x: number, y: number, z: number, radius: number, label: string }[]} */
export function getInteractionZones() {
  return ROBOT_WAYPOINTS.filter((w) => w.id !== SPAWN_WAYPOINT_ID).map((w) => ({
    x: w.x,
    y: w.y,
    z: w.z,
    radius: INTERACTION_ZONE_RADIUS,
    label: w.label,
  }))
}
