<script setup>
/**
 * 点云地图查看器：Three.js 加载 PCD、RANSAC 多平面、行走与碰撞、交互区 UI；俯视为 OrbitControls + 自定义雾面 Shader。
 * Vue 关键字速查：
 * - `defineProps` / `defineEmits`：仅 `<script setup>` 可用，编译期宏，无运行时 import
 * - `ref(x)`：响应式包装，`x` 可以是对象；`computed(()=>…)`：派生只读
 * - `watch(源, 回调, 选项)`：源变化时跑副作用；`{ deep: true }` 深度遍历对象
 * - `onMounted` / `onUnmounted`：挂载/卸载生命周期
 * Three.js：`* as THREE` 为命名空间导入，避免与业务标识符冲突
 */
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as THREE from 'three'
import { ShapeUtils } from 'three'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { PCDLoader } from 'three/addons/loaders/PCDLoader.js'
import {
  detectMultiplePlanes,
  createSegmentedGeometries,
  projectVectorOnPlane,
  rotationToHorizontal,
  flipUpsideDown,
  selectFloorPlane,
  rotationToAlignPrincipalAxis,
} from '../utils/floorDetection.js'
import {
  WORK_AREA_COLORS,
  ROBOT_TRAIL_COLORS,
  loadWorkAreaFromStorage,
  saveWorkAreaToStorage,
  clearWorkAreaStorage,
} from '../utils/workArea.js'
import {
  USE_MAP_TRANSFORM_JSON,
  loadMapTransform,
  clearMapTransformCache,
  getLayoutCentroid,
  getSceneRotationQuaternion,
} from '../utils/mapTransform.js'

const props = defineProps({
  pcdUrl: { type: String, default: '/map.pcd' },
  pointSize: { type: Number, default: 0.02 },
  floorDistanceThreshold: { type: Number, default: 0.05 },
  planeDetectionSeed: { type: Number, default: 12345 }, // 固定种子，平面顺序稳定
  onlyWalkingPlaneNumber: { type: Number, default: null }, // 1-based；null 表示可切换全部面
  moveSpeed: { type: Number, default: 0.15 },
  cameraHeightAboveFloor: { type: Number, default: 2.5 },
  maxDisplayPoints: { type: Number, default: 0 }, // 0=不限制，保持完整显示；>0 时超限自动下采样
  interactionDistanceThreshold: { type: Number, default: 1.5 }, // 相机与悬停点距离小于此值（米）时才显示交互开关
  interactionZones: { type: Array, default: () => [] }, // [{ x, y, z, radius?, label? }] 仅在此坐标附近显示开关，label 为设备名称（如风扇、大门、灯）
  spawnCanonical: {
    type: Object,
    default: null,
    validator: (v) =>
      v == null ||
      (typeof v === 'object' &&
        typeof v.x === 'number' &&
        typeof v.y === 'number' &&
        typeof v.z === 'number'),
  },
  useCanonicalCoords: { type: Boolean, default: true }, // true 时 zones 为原坐标（各面通用），false 时为当前面坐标
  collisionRadius: { type: Number, default: 0.4 }, // 与障碍物的碰撞半径（米），相机不可穿越
  jumpForce: { type: Number, default: 0.12 }, // 跳跃初速度
  gravity: { type: Number, default: 0.012}, // 重力加速度
  syncedDeviceState: {
    default: undefined,
    validator: (v) => v == null || (typeof v === 'object' && !Array.isArray(v)),
  },
  telemetry: {
    type: Object,
    default: () => ({}),
  },
  /** 为 true 时在场景中加载机器人模型（通常与路点面板开关一致） */
  robotEnabled: { type: Boolean, default: false },
  /** GLB/GLTF 路径；加载失败时使用内置占位几何体 */
  robotModelUrl: { type: String, default: '/robot.glb' },
  /** 路点列表 [{ id, label, x, y, z, yaw? }] canonical 坐标 */
  robotWaypoints: { type: Array, default: () => [] },
  /** 硬件 `/status` 下发的机器人位姿（canonical）；连续更新时模型平滑跟随 */
  robotPose: {
    type: Object,
    default: null,
    validator: (v) =>
      v == null ||
      (typeof v === 'object' &&
        typeof v.x === 'number' &&
        typeof v.y === 'number' &&
        typeof v.z === 'number'),
  },
  /** 机器人朝目标位姿插值速度（越大跟得越快，约 4–8 适合 300ms 轮询） */
  robotMoveSpeed: { type: Number, default: 6 },
})

const emit = defineEmits([
  'pointClick',
  'pointHover',
  'switchToggle',
  'autoToggle',
  'mapReady',
  'workAreaSaved',
])

const containerRef = ref(null)
const loadingRef = ref(true)
const loadingDownloadPercent = ref(0)
const loadingPhase = ref('download') // download | processing
const errorRef = ref('')
const hoverInfoRef = ref(null)
const hoveredPointRef = ref(null) // { x, y, z, isFloor, zone? } 悬停相交点，zone 为匹配的交互区域（含 label）
const showInteractionSwitchRef = ref(false) // 仅当相机距离悬停点足够近时为 true
const deviceStateRef = ref({}) // 各设备开关状态 { '风扇': bool, '大门': bool, '灯': bool }
const autoStateRef = ref({ 风扇: false, 大门: false, 灯: false })
const particleCanvasRef = ref(null)
let particleAnimationId = null

let scene, camera, renderer, controls, orbitControls, raycaster, mouse
let animationId = null
let mapFloorCenter = new THREE.Vector3()
let mapFloorSpan = 12
const savedCameraPosition = new THREE.Vector3()
const savedCameraQuaternion = new THREE.Quaternion()
const savedOrbitTarget = new THREE.Vector3()
let topViewZoneGroup = null

/** 俯视区域雾面片元用的顶点着色器：把 `position.xy` 传到 `varying vLocalXY`。 */
const TOP_VIEW_FOG_VERT = /* glsl */ `
varying vec2 vLocalXY;
void main() {
  vLocalXY = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
/** 俯视圆片「光晕」片元：径向 smoothstep、pow、sin 噪声，输出预乘风格 rgba。 */
const TOP_VIEW_FOG_FRAG = /* glsl */ `
varying vec2 vLocalXY;
uniform vec3 uColor;
uniform float uRadius;
uniform float uOpacityScale;
uniform float uLightGain;

void main() {
  float r = length(vLocalXY);
  float t = clamp(r / max(uRadius, 1e-4), 0.0, 1.0);
  float fog = 1.0 - smoothstep(0.02, 1.0, t);
  fog = pow(fog, 1.5);
  float n = sin(vLocalXY.x * 3.7 + vLocalXY.y * 2.9) * sin(vLocalXY.y * 4.1 - vLocalXY.x * 1.8);
  fog = clamp(fog + n * 0.04 * fog, 0.0, 1.0);
  vec3 rgb = uColor * uLightGain;
  float a = fog * uOpacityScale;
  gl_FragColor = vec4(rgb, a);
}
`

const obstacleCeilingClipUniform = { value: 1e9 }

function refreshObstacleCeilingClipHeight() {
  if (!floorPointCloud?.geometry?.boundingBox || !obstaclePointCloud?.geometry?.boundingBox) return
  floorPointCloud.geometry.computeBoundingBox()
  obstaclePointCloud.geometry.computeBoundingBox()
  const fmax = floorPointCloud.geometry.boundingBox.max.y
  const omax = obstaclePointCloud.geometry.boundingBox.max.y
  const span = Math.max(omax - fmax, 0.25)
  obstacleCeilingClipUniform.value = fmax + span * 0.42
}

function setObstacleCeilingClipEnabled(on) {
  if (!obstaclePointCloud?.material) return
  const mat = obstaclePointCloud.material
  if (on) {
    refreshObstacleCeilingClipHeight()
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uCeilingClipY = obstacleCeilingClipUniform
      shader.vertexShader =
        'uniform float uCeilingClipY;\n' +
        shader.vertexShader.replace(
          '#include <project_vertex>',
          `#include <project_vertex>
          vec4 _obWorld = modelMatrix * vec4(transformed, 1.0);
          if (_obWorld.y > uCeilingClipY) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
          }`
        )
    }
    mat.needsUpdate = true
  } else {
    obstacleCeilingClipUniform.value = 1e9
    mat.onBeforeCompile = null
    mat.needsUpdate = true
  }
}

let floorPointCloud = null
let obstaclePointCloud = null
let cachedObstaclePositions = [] // 障碍物坐标，用于碰撞检测 [x,y,z, x,y,z, ...]，每 10 点采样
let cachedFloorPositions = [] // 地板坐标，用于按位置计算实际地板高度 [x,y,z, ...]
let robotModel = null
let robotLights = []
const robotTargetPos = new THREE.Vector3()
const robotTargetQuat = new THREE.Quaternion()
let robotHasTarget = false
const mapReadyRef = ref(false)
/** @type {{ x: number, z: number }[]} 世界坐标 XZ 平面轨迹采样点（与机器人模型位置一致） */
let robotTrailWorldXZ = []
/** @type {{ x: number, z: number } | null} */
let lastTrailWorldXZ = null
let robotTrailGroup = null
const ROBOT_TRAIL_MIN_DIST = 0.06
const ROBOT_TRAIL_TELEPORT_RESET_DIST = 1.2
/** 俯视绿色轨迹：贴地高度偏移、半宽（米） */
const ROBOT_TRAIL_FLOOR_OFFSET = 0.02
const ROBOT_TRAIL_HALF_WIDTH = 0.30

/** 将鼠标客户端坐标转为 NDC（-1~1），供 `Raycaster.setFromCamera`。 */
const updatePointerFromEvent = (event) => {
  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

/** 从相机向场景发射射线，返回与地板/障碍物点云的交点列表（按距离排序）。 */
const intersectPointClouds = () => {
  raycaster.setFromCamera(mouse, camera)
  raycaster.params.Points.threshold = props.pointSize * 2
  return raycaster.intersectObjects([floorPointCloud, obstaclePointCloud].filter(Boolean))
}

const updateCachedObstaclePositions = () => {
  if (!obstaclePointCloud?.geometry) return
  const pos = obstaclePointCloud.geometry.getAttribute('position')
  if (!pos) return
  const step = Math.max(1, Math.floor(pos.count / 5000))
  cachedObstaclePositions = []
  for (let i = 0; i < pos.count; i += step) {
    cachedObstaclePositions.push(pos.getX(i), pos.getY(i), pos.getZ(i))
  }
}

/** 下采样地板点供 `getFloorHeightAt` 在 (x,z) 附近估计地面高度。 */
const updateCachedFloorPositions = () => {
  if (!floorPointCloud?.geometry) return
  const pos = floorPointCloud.geometry.getAttribute('position')
  if (!pos) return
  const step = Math.max(1, Math.floor(pos.count / 3000))
  cachedFloorPositions = []
  for (let i = 0; i < pos.count; i += step) {
    cachedFloorPositions.push(pos.getX(i), pos.getY(i), pos.getZ(i))
  }
}

/** 在水平半径内取地板点的最小 y 作为局部地面高；无点则回退 `-currentFloorD`。 */
const getFloorHeightAt = (x, z) => {
  if (cachedFloorPositions.length === 0) return -currentFloorD
  const radius = 0.8
  const r2 = radius * radius
  let minY = Infinity
  let found = false
  for (let i = 0; i < cachedFloorPositions.length; i += 3) {
    const dx = x - cachedFloorPositions[i]
    const dz = z - cachedFloorPositions[i + 2]
    if (dx * dx + dz * dz < r2) {
      const py = cachedFloorPositions[i + 1]
      if (py < minY) {
        minY = py
        found = true
      }
    }
  }
  return found ? minY : -currentFloorD
}

/** 机器人接地点：地板平面高度与附近点云上沿取较大值，避免吃进点云 */
const getRobotFloorHeightAt = (x, z) => {
  const planeY = -currentFloorD
  if (cachedFloorPositions.length === 0) return planeY
  const radius = 0.5
  const r2 = radius * radius
  let maxLocalY = -Infinity
  let found = false
  for (let i = 0; i < cachedFloorPositions.length; i += 3) {
    const dx = x - cachedFloorPositions[i]
    const dz = z - cachedFloorPositions[i + 2]
    if (dx * dx + dz * dz < r2) {
      const py = cachedFloorPositions[i + 1]
      if (py > maxLocalY) maxLocalY = py
      found = true
    }
  }
  if (!found) return planeY
  return Math.max(planeY, maxLocalY)
}

const robotFootOffset = () => Math.max(0.015, props.pointSize * 2.5)

/** 世界系竖直朝向：只保留 yaw，模型 +Z 为车头 */
function robotWorldQuaternion(pose) {
  const yaw = typeof pose.yaw === 'number' ? pose.yaw : 0
  const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw))
  if (props.useCanonicalCoords) forward.applyQuaternion(sceneRotation)
  forward.y = 0
  if (forward.lengthSq() < 1e-8) return new THREE.Quaternion()
  forward.normalize()
  return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), forward)
}

/** 相机球体与障碍物下采样点的距离平方检测（`collisionRadius`）。 */
const wouldCollide = (pos) => {
  if (cachedObstaclePositions.length === 0) return false
  const r2 = props.collisionRadius ** 2
  for (let i = 0; i < cachedObstaclePositions.length; i += 3) {
    const dx = pos.x - cachedObstaclePositions[i]
    const dy = pos.y - cachedObstaclePositions[i + 1]
    const dz = pos.z - cachedObstaclePositions[i + 2]
    if (dx * dx + dy * dy + dz * dz < r2) return true
  }
  return false
}

// 多平面数据（保留原始点用于切换面时重建）
let cachedPositions = null
let cachedColors = null
let cachedRemainingIndices = new Set()
const detectedPlanes = ref([])
const selectedPlaneIndex = ref(0)
let currentFloorNormal = new THREE.Vector3(0, 1, 0)
let currentFloorD = 0
let sceneRotation = new THREE.Quaternion() // 将选中面旋转为水平的四元数
/** 从 map-transform.json 读取的固定 R；非 null 时切换行走面也不重算旋转 */
let jsonSceneRotation = null

// 行走状态：相机始终在地板上方固定高度，俯视地板
const keys = { forward: false, backward: false, left: false, right: false, jump: false }
let velocityY = 0
let lastTime = performance.now()
const isPointerLocked = ref(false)
let initialCameraPos = null
let initialCameraTarget = null
let hasUserEnteredWalkingMode = false

/** 是否处于 PointerLock 第一人称模式（`PointerLockControls.isLocked`）。 */
const isWalkingMode = () => controls && controls.isLocked

const topViewActive = ref(false)
const topViewOverlayMode = ref('temperature')
/** 已保存的工作区多边形顶点（canonical 平面 x/z） */
const workAreaCanonical = ref([])
const workAreaDrawing = ref(false)
const workAreaHint = ref('')
let workAreaGroup = null
let workAreaPreviewGroup = null
/** @type {THREE.Vector3[]} */
let workAreaDrawPointsWorld = []
const WORK_AREA_LASSO_MIN_DIST = 0.08
/** 首尾距离小于此值（米）视为闭环 */
const WORK_AREA_CLOSE_DIST = 1.0
const floorPickPlane = new THREE.Plane()
const floorPickTarget = new THREE.Vector3()
const effectiveMaxDisplayPoints = computed(() =>
  props.maxDisplayPoints > 0 ? props.maxDisplayPoints : Infinity
)
const currentDeviceOn = computed(() => {
  const label = hoveredPointRef.value?.zone?.label
  return label ? !!(deviceStateRef.value[label]) : false
})

const currentDeviceAuto = computed(() => {
  const label = hoveredPointRef.value?.zone?.label
  return label ? !!autoStateRef.value[label] : false
})

const fanSpeedText = computed(() => {
  const s = props.telemetry?.fanSpeed
  if (s == null || Number.isNaN(Number(s))) return '--'
  return `${Math.round(Number(s))}%`
})

const tempDisplayText = computed(() => {
  const t = props.telemetry?.tempC
  if (t == null || Number.isNaN(Number(t))) return '--'
  return `${Number(t).toFixed(2)} °C`
})

/** 用根 Group 包裹模型，使包围盒最低点落在根节点 y=0（轮/脚接地板） */
function wrapRobotWithGroundContact(source) {
  const root = new THREE.Group()
  root.name = source.name || 'robot'
  source.position.set(0, 0, 0)
  root.add(source)
  root.updateWorldMatrix(true, true)
  const box = new THREE.Box3().setFromObject(root)
  if (!box.isEmpty() && Number.isFinite(box.min.y)) {
    source.position.y = -box.min.y
  }
  return root
}

/** 内置占位机器人（无 GLB 或加载失败时使用），本地 y=0 为轮底接地面。 */
function createPlaceholderRobot() {
  const group = new THREE.Group()
  group.name = 'robot'
  const bodyMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 })
  const accentMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
  const wheelMat = new THREE.MeshBasicMaterial({ color: 0x334155 })

  const wheelR = 0.06
  const wheelW = 0.04
  const wheelGeo = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 12)
  const wheelY = wheelR
  const wheelOffsets = [
    [-0.14, wheelY, 0.16],
    [0.14, wheelY, 0.16],
    [-0.14, wheelY, -0.16],
    [0.14, wheelY, -0.16],
  ]
  for (const [wx, wy, wz] of wheelOffsets) {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat)
    wheel.rotation.z = Math.PI / 2
    wheel.position.set(wx, wy, wz)
    group.add(wheel)
  }

  const bodyH = 0.2
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.36, bodyH, 0.48), bodyMat)
  body.position.y = wheelR * 2 + bodyH / 2
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.12), accentMat)
  nose.position.set(0, body.position.y + bodyH / 2 - 0.04, 0.28)

  group.add(body, nose)
  return group
}

function addRobotSceneLights() {
  if (!scene || robotLights.length) return
  const amb = new THREE.AmbientLight(0xffffff, 0.65)
  const dir = new THREE.DirectionalLight(0xffffff, 0.85)
  dir.position.set(4, 8, 6)
  scene.add(amb, dir)
  robotLights.push(amb, dir)
}

function removeRobotSceneLights() {
  if (!scene) return
  for (const light of robotLights) scene.remove(light)
  robotLights = []
}

function disposeRobotModel() {
  removeRobotSceneLights()
  if (!robotModel) return
  scene?.remove(robotModel)
  robotModel.traverse((child) => {
    if (!child.isMesh) return
    child.geometry?.dispose()
    const mats = Array.isArray(child.material) ? child.material : [child.material]
    for (const m of mats) m?.dispose?.()
  })
  robotModel = null
  robotHasTarget = false
}

/** 加载 GLB/GLTF，失败则回退占位模型并加入场景。 */
async function ensureRobotInScene() {
  if (!props.robotEnabled || !scene || robotModel) return

  const url = props.robotModelUrl?.trim()
  if (url) {
    try {
      const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js')
      const loader = new GLTFLoader()
      const gltf = await new Promise((resolve, reject) => {
        loader.load(url, resolve, undefined, reject)
      })
      robotModel = wrapRobotWithGroundContact(gltf.scene)
      addRobotSceneLights()
    } catch (err) {
      console.warn('机器人模型加载失败，使用占位几何体:', err)
    }
  }

  if (!robotModel) {
    robotModel = createPlaceholderRobot()
  }
  scene.add(robotModel)
}

/**
 * canonical 路点位姿 → 世界坐标与朝向。
 * @param {{ x: number, y: number, z: number, yaw?: number }} pose
 */
function canonicalPoseToWorld(pose) {
  const p = props.useCanonicalCoords
    ? new THREE.Vector3(pose.x, pose.y, pose.z).applyQuaternion(sceneRotation)
    : new THREE.Vector3(pose.x, pose.y, pose.z)
  const floorY = getRobotFloorHeightAt(p.x, p.z)
  p.y = floorY + robotFootOffset()

  const quat = robotWorldQuaternion(pose)
  return { pos: p, quat }
}

/**
 * 设置机器人目标位姿；`immediate` 为 true 时瞬间对齐（仅用于初始出生）。
 * @param {{ x: number, y: number, z: number, yaw?: number }} pose
 * @param {boolean} [immediate=false]
 * @returns {boolean}
 */
function setRobotTarget(pose, immediate = false) {
  if (!robotModel || !pose || mapReadyRef.value !== true) return false
  if (
    typeof pose.x !== 'number' ||
    typeof pose.y !== 'number' ||
    typeof pose.z !== 'number'
  ) {
    return false
  }

  const { pos, quat } = canonicalPoseToWorld(pose)
  robotTargetPos.copy(pos)
  robotTargetQuat.copy(quat)
  robotHasTarget = true

  if (immediate) {
    robotModel.position.copy(pos)
    robotModel.quaternion.copy(quat)
    appendRobotTrailSample({ force: true, resetOnJump: true })
  }
  return true
}

/** 每帧朝目标位姿插值，适配硬件连续下发的坐标流。 */
function updateRobotMovement(dt) {
  if (!robotModel || !robotHasTarget) return

  const t = 1 - Math.exp(-props.robotMoveSpeed * dt)
  robotModel.position.lerp(robotTargetPos, t)
  robotModel.quaternion.slerp(robotTargetQuat, t)
  const floorY = getRobotFloorHeightAt(robotModel.position.x, robotModel.position.z)
  robotModel.position.y = floorY + robotFootOffset()

  if (
    robotModel.position.distanceToSquared(robotTargetPos) < 4e-4 &&
    robotModel.quaternion.angleTo(robotTargetQuat) < 0.04
  ) {
    robotModel.position.copy(robotTargetPos)
    robotModel.position.y =
      getRobotFloorHeightAt(robotModel.position.x, robotModel.position.z) + robotFootOffset()
    robotModel.quaternion.copy(robotTargetQuat)
  }

  appendRobotTrailSample()
}

function teleportRobotTo(waypoint) {
  return setRobotTarget(waypoint, true)
}

function disposeRobotTrailVisual() {
  if (!robotTrailGroup || !scene) {
    robotTrailGroup = null
    return
  }
  scene.remove(robotTrailGroup)
  robotTrailGroup.traverse((o) => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
  robotTrailGroup = null
}

function clearRobotTrail() {
  robotTrailWorldXZ = []
  lastTrailWorldXZ = null
  disposeRobotTrailVisual()
}

function rebuildRobotTrailVisual() {
  disposeRobotTrailVisual()
  if (!scene || !props.robotEnabled || !topViewActive.value || robotTrailWorldXZ.length < 2) return

  const floorY = -currentFloorD + ROBOT_TRAIL_FLOOR_OFFSET
  const positions = []
  const indices = []
  let vi = 0

  for (let i = 0; i < robotTrailWorldXZ.length - 1; i++) {
    const ax = robotTrailWorldXZ[i].x
    const az = robotTrailWorldXZ[i].z
    const bx = robotTrailWorldXZ[i + 1].x
    const bz = robotTrailWorldXZ[i + 1].z
    const dx = bx - ax
    const dz = bz - az
    const len = Math.hypot(dx, dz)
    if (len < 1e-6) continue
    const px = (-dz / len) * ROBOT_TRAIL_HALF_WIDTH
    const pz = (dx / len) * ROBOT_TRAIL_HALF_WIDTH
    positions.push(
      ax + px, floorY, az + pz,
      ax - px, floorY, az - pz,
      bx + px, floorY, bz + pz,
      bx - px, floorY, bz - pz
    )
    indices.push(vi, vi + 1, vi + 2, vi + 1, vi + 3, vi + 2)
    vi += 4
  }

  if (indices.length === 0) return

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setIndex(indices)

  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      color: ROBOT_TRAIL_COLORS.inside,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      depthTest: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: THREE.DoubleSide,
    })
  )
  mesh.renderOrder = 21

  robotTrailGroup = new THREE.Group()
  robotTrailGroup.name = 'robotTrail'
  robotTrailGroup.add(mesh)
  scene.add(robotTrailGroup)
}

function appendRobotTrailSample({ force = false, resetOnJump = false } = {}) {
  if (!robotModel || !props.robotEnabled || mapReadyRef.value !== true) return

  const pt = { x: robotModel.position.x, z: robotModel.position.z }

  if (lastTrailWorldXZ) {
    const dx = pt.x - lastTrailWorldXZ.x
    const dz = pt.z - lastTrailWorldXZ.z
    const distSq = dx * dx + dz * dz
    if (resetOnJump && distSq > ROBOT_TRAIL_TELEPORT_RESET_DIST ** 2) {
      robotTrailWorldXZ = []
      lastTrailWorldXZ = null
    } else if (!force && distSq < ROBOT_TRAIL_MIN_DIST * ROBOT_TRAIL_MIN_DIST) {
      return
    }
  }

  robotTrailWorldXZ.push(pt)
  lastTrailWorldXZ = pt
  if (topViewActive.value) rebuildRobotTrailVisual()
}

/** 创建 Scene/Camera/WebGLRenderer、PointerLockControls、加载 PCD、注册 resize/键鼠/pointerlock 监听并启动 `animate`。 */
const initThree = () => {
  if (!containerRef.value) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x0f172a)

  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.set(5, 5, 5)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  controls = new PointerLockControls(camera, renderer.domElement)
  controls.pointerSpeed = 0.8

  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2(-1000, -1000)

  loadPCD()
  animate()
  window.addEventListener('resize', onResize)
  renderer.domElement.addEventListener('click', onCanvasClick)
  renderer.domElement.addEventListener('mousemove', onCanvasMouseMove)
  renderer.domElement.addEventListener('pointerdown', onCanvasPointerDown)
  renderer.domElement.addEventListener('pointermove', onCanvasPointerMove)
  renderer.domElement.addEventListener('pointerup', onCanvasPointerUp)
  renderer.domElement.addEventListener('pointercancel', onCanvasPointerUp)
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)
  controls.domElement.ownerDocument.addEventListener('pointerlockchange', onPointerLockChange)
}

/** 键盘按下：`e.code` 匹配 WASD/方向键/Space，并 `preventDefault` 防止页面滚动。 */
const onKeyDown = (e) => {
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW':
      e.preventDefault()
      keys.forward = true
      break
    case 'ArrowDown':
    case 'KeyS':
      e.preventDefault()
      keys.backward = true
      break
    case 'ArrowLeft':
    case 'KeyA':
      e.preventDefault()
      keys.left = true
      break
    case 'ArrowRight':
    case 'KeyD':
      e.preventDefault()
      keys.right = true
      break
    case 'Space':
      e.preventDefault()
      keys.jump = true
      break
  }
}

/** 键盘释放：清除 `keys` 状态位。 */
const onKeyUp = (e) => {
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW':
      keys.forward = false
      break
    case 'ArrowDown':
    case 'KeyS':
      keys.backward = false
      break
    case 'ArrowLeft':
    case 'KeyA':
      keys.left = false
      break
    case 'ArrowRight':
    case 'KeyD':
      keys.right = false
      break
    case 'Space':
      keys.jump = false
      break
  }
}

/** `document.pointerLockElement` 变化时同步 `isPointerLocked`，首次锁定标记已进入行走模式。 */
const onPointerLockChange = () => {
  isPointerLocked.value = !!document.pointerLockElement
  if (isPointerLocked.value) hasUserEnteredWalkingMode = true
}

function applyQuaternionToGeoAttributes(floorGeo, obstacleGeo, quat) {
  const v = new THREE.Vector3()
  for (const geo of [floorGeo, obstacleGeo]) {
    const attr = geo.getAttribute('position')
    for (let i = 0; i < attr.count; i++) {
      v.set(attr.getX(i), attr.getY(i), attr.getZ(i)).applyQuaternion(quat)
      attr.setXYZ(i, v.x, v.y, v.z)
    }
    attr.needsUpdate = true
    geo.computeBoundingSphere()
  }
}

/** 在线计算 sceneRotation 并旋转 floor/obstacle 几何（原逻辑）。 */
function computeAndApplySceneRotation(floorGeo, obstacleGeo, floorPlane) {
  sceneRotation = rotationToHorizontal(floorPlane.normal)
  const posAttr = floorGeo.getAttribute('position')
  const v = new THREE.Vector3()
  let floorSumY = 0
  let obsSumY = 0
  for (let i = 0; i < posAttr.count; i++) {
    v.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).applyQuaternion(sceneRotation)
    posAttr.setXYZ(i, v.x, v.y, v.z)
    floorSumY += v.y
  }
  posAttr.needsUpdate = true
  floorGeo.computeBoundingSphere()
  const obsPosAttr = obstacleGeo.getAttribute('position')
  for (let i = 0; i < obsPosAttr.count; i++) {
    v.set(obsPosAttr.getX(i), obsPosAttr.getY(i), obsPosAttr.getZ(i)).applyQuaternion(sceneRotation)
    obsPosAttr.setXYZ(i, v.x, v.y, v.z)
    obsSumY += v.y
  }
  obsPosAttr.needsUpdate = true
  obstacleGeo.computeBoundingSphere()
  const floorMeanY = posAttr.count ? floorSumY / posAttr.count : 0
  const obsMeanY = obsPosAttr.count ? obsSumY / obsPosAttr.count : 0
  if (floorMeanY > obsMeanY) {
    sceneRotation.premultiply(flipUpsideDown())
    for (let i = 0; i < posAttr.count; i++) {
      v.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).applyQuaternion(flipUpsideDown())
      posAttr.setXYZ(i, v.x, v.y, v.z)
    }
    for (let i = 0; i < obsPosAttr.count; i++) {
      v.set(obsPosAttr.getX(i), obsPosAttr.getY(i), obsPosAttr.getZ(i)).applyQuaternion(flipUpsideDown())
      obsPosAttr.setXYZ(i, v.x, v.y, v.z)
    }
    posAttr.needsUpdate = true
    obsPosAttr.needsUpdate = true
    floorGeo.computeBoundingSphere()
    obstacleGeo.computeBoundingSphere()
  }
  const floorPointsForAlign = []
  for (let i = 0; i < posAttr.count; i++) {
    floorPointsForAlign.push(new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)))
  }
  const alignQ = rotationToAlignPrincipalAxis(floorPointsForAlign)
  sceneRotation.premultiply(alignQ)
  for (let i = 0; i < posAttr.count; i++) {
    v.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).applyQuaternion(alignQ)
    posAttr.setXYZ(i, v.x, v.y, v.z)
  }
  for (let i = 0; i < obsPosAttr.count; i++) {
    v.set(obsPosAttr.getX(i), obsPosAttr.getY(i), obsPosAttr.getZ(i)).applyQuaternion(alignQ)
    obsPosAttr.setXYZ(i, v.x, v.y, v.z)
  }
  posAttr.needsUpdate = true
  obsPosAttr.needsUpdate = true
  floorGeo.computeBoundingSphere()
  obstacleGeo.computeBoundingSphere()
}

async function finishMapSceneSetup(floorGeo, obstacleGeo) {
  const materialOptions = {
    size: props.pointSize,
    sizeAttenuation: true,
    vertexColors: true,
  }

  floorPointCloud = new THREE.Points(floorGeo, new THREE.PointsMaterial(materialOptions))
  floorPointCloud.name = 'floor'
  obstaclePointCloud = new THREE.Points(obstacleGeo, new THREE.PointsMaterial(materialOptions))
  obstaclePointCloud.name = 'obstacle'

  scene.add(floorPointCloud)
  scene.add(obstaclePointCloud)
  updateCachedObstaclePositions()
  updateCachedFloorPositions()
  floorPointCloud.geometry.computeBoundingBox()
  refreshMapTopBounds()
  if (topViewActive.value && obstaclePointCloud) {
    refreshObstacleCeilingClipHeight()
    setObstacleCeilingClipEnabled(true)
  }

  floorGeo.computeBoundingBox()
  obstacleGeo.computeBoundingBox()
  const floorY = -currentFloorD
  const offsets = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1]]
  const sc = props.spawnCanonical
  const useSpawn =
    sc &&
    typeof sc.x === 'number' &&
    typeof sc.y === 'number' &&
    typeof sc.z === 'number'
  let center
  let spawnPos
  if (useSpawn) {
    const wc = props.useCanonicalCoords
      ? new THREE.Vector3(sc.x, sc.y, sc.z).applyQuaternion(sceneRotation)
      : new THREE.Vector3(sc.x, sc.y, sc.z)
    const yAt = getFloorHeightAt(wc.x, wc.z)
    spawnPos = new THREE.Vector3(wc.x, yAt + props.cameraHeightAboveFloor, wc.z)
    for (const [dx, dz] of offsets) {
      const p = new THREE.Vector3(wc.x + dx, yAt + props.cameraHeightAboveFloor, wc.z + dz)
      if (!wouldCollide(p)) {
        spawnPos = p
        break
      }
    }
    center = new THREE.Vector3(wc.x, yAt, wc.z)
  } else {
    const mapBox = floorGeo.boundingBox.clone().union(obstacleGeo.boundingBox)
    center = mapBox.getCenter(new THREE.Vector3())
    spawnPos = new THREE.Vector3(center.x, floorY + props.cameraHeightAboveFloor, center.z)
    for (const [dx, dz] of offsets) {
      const p = new THREE.Vector3(center.x + dx, floorY + props.cameraHeightAboveFloor, center.z + dz)
      if (!wouldCollide(p)) {
        spawnPos = p
        break
      }
    }
  }
  initialCameraPos = spawnPos
  initialCameraTarget = useSpawn
    ? new THREE.Vector3(spawnPos.x, spawnPos.y, spawnPos.z + 1)
    : center.clone().add(new THREE.Vector3(0, 0, 1))
  camera.position.copy(initialCameraPos)
  camera.up.set(0, 1, 0)
  camera.lookAt(initialCameraTarget)

  mapReadyRef.value = true
  if (props.robotEnabled) {
    await ensureRobotInScene()
    const sc = props.spawnCanonical
    const wp0 = props.robotWaypoints?.[0]
    const initial =
      sc &&
      typeof sc.x === 'number' &&
      typeof sc.y === 'number' &&
      typeof sc.z === 'number'
        ? {
            x: sc.x,
            y: sc.y,
            z: sc.z,
            yaw: typeof wp0?.yaw === 'number' ? wp0.yaw : 0,
          }
        : wp0
    if (initial) setRobotTarget(initial, true)
  }
  emit('mapReady', true)
  loadPersistedWorkArea()
}

/**
 * 异步加载 PCD：`PCDLoader` 进度回调更新百分比；平面检测、质心平移、分割几何体、场景旋转对齐、生成 Points 并设置出生点。
 */
const loadPCD = async () => {
  loadingRef.value = true
  loadingDownloadPercent.value = 0
  loadingPhase.value = 'download'
  errorRef.value = ''
  mapReadyRef.value = false
  emit('mapReady', false)
  if (USE_MAP_TRANSFORM_JSON) clearMapTransformCache()
  disposeRobotModel()
  clearRobotTrail()
  detectedPlanes.value = []
  hasUserEnteredWalkingMode = false
  jsonSceneRotation = null

  if (floorPointCloud) {
    scene.remove(floorPointCloud)
    floorPointCloud.geometry.dispose()
    floorPointCloud.material.dispose()
    floorPointCloud = null
  }
  if (obstaclePointCloud) {
    scene.remove(obstaclePointCloud)
    obstaclePointCloud.geometry.dispose()
    obstaclePointCloud.material.dispose()
    obstaclePointCloud = null
  }
  const loader = new PCDLoader()
  try {
    const rawPointCloud = await new Promise((resolve, reject) => {
      loader.load(
        props.pcdUrl,
        (points) => resolve(points),
        (ev) => {
          if (ev.lengthComputable && ev.total > 0) {
            loadingDownloadPercent.value = Math.min(100, (ev.loaded / ev.total) * 100)
          }
        },
        reject
      )
    })
    loadingPhase.value = 'processing'
    loadingDownloadPercent.value = 100
    // 让 Vue 提交 DOM、浏览器先绘制「渲染中」再跑重计算，避免长时间停在「下载 100%」
    await nextTick()
    await new Promise((r) => requestAnimationFrame(r))
    await new Promise((r) => requestAnimationFrame(r))
    rawPointCloud.geometry.computeBoundingSphere()

    const { planes, remainingIndices } = detectMultiplePlanes(rawPointCloud.geometry, {
      distanceThreshold: props.floorDistanceThreshold,
      maxIterations: 200,
      minPlanePoints: 20,
      maxPlanes: 8,
      randomSeed: props.planeDetectionSeed,
    })

    if (planes.length === 0) {
      errorRef.value = '未检测到可行走的平面，请检查 PCD 文件'
      loadingRef.value = false
      return
    }

    const pos = rawPointCloud.geometry.getAttribute('position')
    const points = []
    for (let i = 0; i < pos.count; i++) {
      points.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)))
    }

    // 交互区 useCanonicalCoords 与 cachedPositions 均以「主地板」质心为原点标定；平移必须始终用它，否则仅换行走面时 zone 会对不齐
    let layoutCentroid = null
    let usedJsonTransform = false
    const layoutPlane = selectFloorPlane(planes, points)

    if (USE_MAP_TRANSFORM_JSON) {
      try {
        await loadMapTransform()
        layoutCentroid = getLayoutCentroid()
        const fixedRotation = getSceneRotationQuaternion()
        if (layoutCentroid && fixedRotation) {
          sceneRotation = fixedRotation
          jsonSceneRotation = fixedRotation.clone()
          usedJsonTransform = true
        }
      } catch (err) {
        console.warn('[PCDMapViewer] map-transform.json 加载失败，回退到在线计算:', err)
      }
    }

    if (!layoutCentroid) {
      layoutCentroid = layoutPlane.centroid.clone()
    }

    const onlyN = props.onlyWalkingPlaneNumber
    const useOnlyOnePlane =
      onlyN != null && Number.isFinite(Number(onlyN)) && Number(onlyN) >= 1
    let floorPlane
    let floorIndex
    if (useOnlyOnePlane) {
      const idx = Math.floor(Number(onlyN)) - 1
      if (idx >= planes.length) {
        errorRef.value = `需要「面 ${Math.floor(Number(onlyN))}」作为行走面，但只检测到 ${planes.length} 个平面`
        loadingRef.value = false
        return
      }
      floorPlane = planes[idx]
      floorIndex = 0
    } else {
      floorPlane = layoutPlane
      floorIndex = planes.indexOf(floorPlane)
    }

    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) - layoutCentroid.x)
      pos.setY(i, pos.getY(i) - layoutCentroid.y)
      pos.setZ(i, pos.getZ(i) - layoutCentroid.z)
    }
    pos.needsUpdate = true
    for (const p of planes) {
      p.centroid.sub(layoutCentroid)
    }

    const col = rawPointCloud.geometry.getAttribute('color')
    cachedPositions = new Float32Array(pos.array)
    cachedColors = col ? new Float32Array(col.array) : null

    cachedRemainingIndices = remainingIndices
    detectedPlanes.value = useOnlyOnePlane ? [floorPlane] : planes
    selectedPlaneIndex.value = floorIndex

    const floorIndices = floorPlane.indices
    const obstacleIndices = new Set([...remainingIndices])
    for (let i = 0; i < planes.length; i++) {
      if (planes[i] !== floorPlane) {
        planes[i].indices.forEach((idx) => obstacleIndices.add(idx))
      }
    }

    let { floorGeo, obstacleGeo } = createSegmentedGeometries(
      rawPointCloud.geometry,
      floorIndices,
      obstacleIndices,
      { maxDisplayPoints: effectiveMaxDisplayPoints.value }
    )

    if (usedJsonTransform) {
      applyQuaternionToGeoAttributes(floorGeo, obstacleGeo, sceneRotation)
    } else {
      computeAndApplySceneRotation(floorGeo, obstacleGeo, floorPlane)
    }

    currentFloorNormal.set(0, 1, 0)
    currentFloorD = -floorPlane.centroid.clone().applyQuaternion(sceneRotation).y

    rawPointCloud.geometry.dispose()
    rawPointCloud.material.dispose()

    await finishMapSceneSetup(floorGeo, obstacleGeo)
  } catch (err) {
    console.error('PCD 加载失败:', err)
    errorRef.value = `地图加载失败: ${err.message}。请将 PCD 文件放入 public 文件夹，命名为 map.pcd`
  } finally {
    loadingRef.value = false
  }
}

/**
 * 切换到第 `index` 个检测平面：重建 sceneRotation、下采样重建 BufferGeometry、更新碰撞缓存与相机初始位姿。
 */
const switchFloorPlane = (index) => {
  if (index < 0 || index >= detectedPlanes.value.length || !cachedPositions) return
  selectedPlaneIndex.value = index

  const planes = detectedPlanes.value
  const plane = planes[index]
  if (jsonSceneRotation) {
    sceneRotation = jsonSceneRotation.clone()
  } else {
    sceneRotation = rotationToHorizontal(plane.normal)
  }

  const totalPoints = cachedPositions.length / 3
  const maxPts = effectiveMaxDisplayPoints.value
  const step = totalPoints > maxPts ? Math.max(1, Math.floor(totalPoints / maxPts)) : 1

  const v = new THREE.Vector3()
  if (!jsonSceneRotation) {
    let floorSumY = 0
    let floorCount = 0
    let obstacleSumY = 0
    let obstacleCount = 0
    for (let i = 0; i < totalPoints; i += step) {
      v.set(cachedPositions[i * 3], cachedPositions[i * 3 + 1], cachedPositions[i * 3 + 2])
      v.applyQuaternion(sceneRotation)
      if (plane.indices.has(i)) {
        floorSumY += v.y
        floorCount++
      } else {
        obstacleSumY += v.y
        obstacleCount++
      }
    }
    const floorMeanY = floorCount ? floorSumY / floorCount : 0
    const obstacleMeanY = obstacleCount ? obstacleSumY / obstacleCount : 0
    const shouldFlip = floorMeanY > obstacleMeanY
    if (shouldFlip) {
      sceneRotation.premultiply(flipUpsideDown())
    }
  }

  currentFloorNormal.set(0, 1, 0)
  const centroidRotated = plane.centroid.clone().applyQuaternion(sceneRotation)
  currentFloorD = -centroidRotated.y

  const floorIndices = plane.indices
  const obstacleIndices = new Set([...cachedRemainingIndices])
  for (let i = 0; i < planes.length; i++) {
    if (i !== index) {
      planes[i].indices.forEach((idx) => obstacleIndices.add(idx))
    }
  }

  const floorPositions = []
  const floorColors = []
  const obstaclePositions = []
  const obstacleColors = []

  for (let i = 0; i < totalPoints; i += step) {
    v.set(cachedPositions[i * 3], cachedPositions[i * 3 + 1], cachedPositions[i * 3 + 2])
    v.applyQuaternion(sceneRotation)
    if (floorIndices.has(i)) {
      floorPositions.push(v.x, v.y, v.z)
      if (cachedColors) {
        floorColors.push(cachedColors[i * 3], cachedColors[i * 3 + 1], cachedColors[i * 3 + 2])
      } else {
        floorColors.push(0.75, 0.75, 0.75)
      }
    } else {
      obstaclePositions.push(v.x, v.y, v.z)
      if (cachedColors) {
        obstacleColors.push(cachedColors[i * 3], cachedColors[i * 3 + 1], cachedColors[i * 3 + 2])
      } else {
        obstacleColors.push(0.75, 0.75, 0.75)
      }
    }
  }

  const newFloorGeo = new THREE.BufferGeometry()
  newFloorGeo.setAttribute('position', new THREE.Float32BufferAttribute(floorPositions, 3))
  newFloorGeo.setAttribute('color', new THREE.Float32BufferAttribute(floorColors, 3))
  newFloorGeo.computeBoundingSphere()

  const newObsGeo = new THREE.BufferGeometry()
  newObsGeo.setAttribute('position', new THREE.Float32BufferAttribute(obstaclePositions, 3))
  newObsGeo.setAttribute('color', new THREE.Float32BufferAttribute(obstacleColors, 3))
  newObsGeo.computeBoundingSphere()

  floorPointCloud.geometry.dispose()
  floorPointCloud.geometry = newFloorGeo
  obstaclePointCloud.geometry.dispose()
  obstaclePointCloud.geometry = newObsGeo

  floorPointCloud.geometry.computeBoundingBox()
  obstaclePointCloud.geometry.computeBoundingBox()
  updateCachedObstaclePositions()
  updateCachedFloorPositions()
  refreshMapTopBounds()
  const box = floorPointCloud.geometry.boundingBox.clone().union(obstaclePointCloud.geometry.boundingBox)
  const center = box.getCenter(new THREE.Vector3())
  const floorY = -currentFloorD
  initialCameraPos = new THREE.Vector3(center.x, floorY + props.cameraHeightAboveFloor, center.z)
  initialCameraTarget = center.clone().add(new THREE.Vector3(0, 0, 1))
  camera.position.copy(initialCameraPos)
  camera.up.set(0, 1, 0)
  camera.lookAt(initialCameraTarget)

  if (topViewActive.value && obstaclePointCloud) {
    refreshObstacleCeilingClipHeight()
    setObstacleCeilingClipEnabled(true)
  }
}

/** 用地板包围盒更新 `mapFloorCenter` 与水平跨度 `mapFloorSpan`（俯视相机距离用）。 */
const refreshMapTopBounds = () => {
  if (!floorPointCloud?.geometry?.boundingBox) return
  const box = floorPointCloud.geometry.boundingBox
  mapFloorCenter.copy(box.getCenter(new THREE.Vector3()))
  const s = box.getSize(new THREE.Vector3())
  mapFloorSpan = Math.max(s.x, s.z, 6)
}

/**
 * 交互区坐标从「标定 canonical」转到当前世界坐标：`useCanonicalCoords` 时左乘 `sceneRotation`。
 */
const zoneCanonicalToWorld = (z) => {
  const v = new THREE.Vector3(z.x, z.y, z.z)
  if (props.useCanonicalCoords && sceneRotation) v.applyQuaternion(sceneRotation)
  return v
}

/** 从场景移除俯视区域 Group 并 `dispose` 子网格几何/材质，避免 GPU 泄漏。 */
const disposeTopViewZones = () => {
  if (!topViewZoneGroup || !scene) return
  scene.remove(topViewZoneGroup)
  topViewZoneGroup.traverse((o) => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
  topViewZoneGroup = null
}

/** 遥测温度转 number；无效返回 `NaN`（与 `Number.isFinite` 配合）。 */
function telemetryTempCNum(raw) {
  if (raw == null || raw === '') return NaN
  const n = Number(raw)
  return Number.isFinite(n) ? n : NaN
}

/**
 * 按 `topViewOverlayMode`（温度/灯光）更新每个交互区雾材质 uniform 与 `PointLight` 颜色、强度、距离。
 */
const applyTopViewZoneColors = () => {
  if (!topViewZoneGroup) return
  const mode = topViewOverlayMode.value
  const tempC = telemetryTempCNum(props.telemetry?.tempC)
  const hasTemp = Number.isFinite(tempC)
  const lampOn = !!(deviceStateRef.value['灯'] ?? (props.syncedDeviceState && props.syncedDeviceState['灯']))

  const lightModeYellow = 0xfacc15
  const lightModeBrightIntensity = 3.2
  const lightModeBrightDistance = (spread) => spread * 3.8

  const blueCold = new THREE.Color(0x2563eb)
  const redHot = new THREE.Color(0xdc2626)

  topViewZoneGroup.children.forEach((grp) => {
    const { matFog, light, spread } = grp.userData
    let hex = 0x94a3b8
    let intensity = 1.0
    let distance = spread * 3.8
    let fogOpacity = 0.48

    if (mode === 'temperature') {
      if (grp.userData.label === '大门') {
        hex = 0x3b82f6
        intensity = 1.35
        fogOpacity = 0.42
      } else if (grp.userData.label === '灯') {
        hex = 0xe11d48
        intensity = 1.45
        fogOpacity = 0.44
      } else if (grp.userData.label === '风扇') {
        if (!hasTemp) {
          hex = blueCold.getHex()
          intensity = 1.0
          fogOpacity = 0.4
        } else {
          // 25℃ 蓝 → 30℃ 红（5℃ 跨满色带，俯视时变化明显）；区间外钳位
          const u = Math.max(0, Math.min(1, (tempC - 25) / 5))
          hex = blueCold.clone().lerp(redHot, u).getHex()
          intensity = 0.75 + u * 2.1
          fogOpacity = 0.38 + u * 0.22
        }
      }
    } else {
      if (grp.userData.label === '大门') {
        hex = 0x0a0a0a
        intensity = 0.12
        distance = spread * 2.2
        fogOpacity = 0.35
      } else if (grp.userData.label === '风扇') {
        hex = lightModeYellow
        intensity = lightModeBrightIntensity
        distance = lightModeBrightDistance(spread)
        fogOpacity = 0.55
      } else if (grp.userData.label === '灯') {
        if (lampOn) {
          hex = lightModeYellow
          intensity = lightModeBrightIntensity
          distance = lightModeBrightDistance(spread)
          fogOpacity = 0.55
        } else {
          hex = 0x1a1a1a
          intensity = 0.15
          distance = spread * 2.4
          fogOpacity = 0.38
        }
      }
    }

    const c = new THREE.Color(hex)
    matFog.uniforms.uColor.value.copy(c)
    matFog.uniforms.uOpacityScale.value = fogOpacity
    matFog.uniforms.uLightGain.value = Math.min(intensity, 3.6)
    matFog.uniforms.uRadius.value = spread
    light.color.copy(c)
    light.intensity = intensity * 0.35
    light.distance = distance
  })
}

/** 为每个 `interactionZones` 创建圆片 ShaderMesh + PointLight，加入 `topViewZoneGroup`。 */
const buildTopViewZones = () => {
  disposeTopViewZones()
  if (!scene || !props.interactionZones?.length) return
  topViewZoneGroup = new THREE.Group()
  topViewZoneGroup.name = 'topViewZones'
  topViewZoneGroup.visible = topViewActive.value

  for (const z of props.interactionZones) {
    const world = zoneCanonicalToWorld(z)
    const floorH = getFloorHeightAt(world.x, world.z)
    world.y = floorH + 0.07

    const baseR = z.radius ?? 1
    const spread = baseR * 3.55

    const geo = new THREE.CircleGeometry(spread, 96)
    const matFog = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x94a3b8) },
        uRadius: { value: spread },
        uOpacityScale: { value: 0.48 },
        uLightGain: { value: 1.0 },
      },
      vertexShader: TOP_VIEW_FOG_VERT,
      fragmentShader: TOP_VIEW_FOG_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    const meshFog = new THREE.Mesh(geo, matFog)
    meshFog.rotation.x = -Math.PI / 2
    meshFog.position.copy(world)

    const light = new THREE.PointLight(0xffffff, 0.35, spread * 3.8, 1.75)
    light.position.set(world.x, world.y + 0.55, world.z)

    const grp = new THREE.Group()
    grp.add(meshFog, light)
    grp.userData = { label: z.label, matFog, light, spread }
    topViewZoneGroup.add(grp)
  }
  scene.add(topViewZoneGroup)
  applyTopViewZoneColors()
}

/** 屏幕坐标 → 地板平面 (y = -currentFloorD) 上的世界坐标 */
function screenToFloorPoint(clientX, clientY) {
  if (!renderer || !camera) return null
  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  const planeY = -currentFloorD
  floorPickPlane.set(new THREE.Vector3(0, 1, 0), -planeY)
  return raycaster.ray.intersectPlane(floorPickPlane, floorPickTarget)
    ? floorPickTarget.clone()
    : null
}

function worldToCanonical(world) {
  const v = world.clone()
  if (props.useCanonicalCoords && sceneRotation) {
    v.applyQuaternion(sceneRotation.clone().invert())
  }
  return { x: v.x, y: v.y, z: v.z }
}

function canonicalToWorldXZ(point) {
  const v = new THREE.Vector3(
    point.x,
    Number.isFinite(point.y) ? point.y : 0,
    point.z
  )
  if (props.useCanonicalCoords && sceneRotation) {
    v.applyQuaternion(sceneRotation)
  }
  return { x: v.x, z: v.z }
}

function syncWorkAreaOrbitControls() {
  if (!orbitControls) return
  const drawing = topViewOverlayMode.value === 'workArea' && workAreaDrawing.value
  orbitControls.enabled = topViewActive.value && !drawing
  if (topViewOverlayMode.value === 'workArea') {
    orbitControls.mouseButtons.LEFT = null
  } else {
    orbitControls.mouseButtons.LEFT = THREE.MOUSE.ROTATE
  }
  if (renderer?.domElement) {
    renderer.domElement.style.cursor =
      topViewActive.value && topViewOverlayMode.value === 'workArea' ? 'crosshair' : ''
  }
}

function clearWorkAreaPreviewVisual() {
  if (!workAreaPreviewGroup || !scene) return
  scene.remove(workAreaPreviewGroup)
  workAreaPreviewGroup.traverse((o) => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
  workAreaPreviewGroup = null
}

function canonicalPointsToWorldXZ(canonicalPoints) {
  return canonicalPoints.map((p) => canonicalToWorldXZ(p))
}

function createWorkAreaFillMesh(worldPointsXZ, floorY, { preview = false } = {}) {
  if (worldPointsXZ.length < 3) return null

  const contour = worldPointsXZ.map((p) => new THREE.Vector2(p.x, p.z))
  let faces
  try {
    faces = ShapeUtils.triangulateShape(contour, [])
  } catch {
    return null
  }
  if (!faces?.length) return null

  const positions = []
  for (const face of faces) {
    for (const idx of face) {
      const p = contour[idx]
      positions.push(p.x, floorY, p.y)
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshBasicMaterial({
      color: WORK_AREA_COLORS.fill,
      transparent: true,
      opacity: preview ? 0.38 : WORK_AREA_COLORS.fillOpacity,
      depthWrite: false,
      depthTest: true,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: THREE.DoubleSide,
    })
  )
  mesh.renderOrder = preview ? 21 : 20
  return mesh
}

function createWorkAreaOutlineLine(worldPointsXZ, floorY, { closed = true } = {}) {
  if (worldPointsXZ.length < 2) return null
  const outlinePts = worldPointsXZ.map(
    (p) => new THREE.Vector3(p.x, floorY + 0.02, p.z)
  )
  const outlineGeo = new THREE.BufferGeometry().setFromPoints(outlinePts)
  const outline = closed
    ? new THREE.LineLoop(
        outlineGeo,
        new THREE.LineBasicMaterial({
          color: WORK_AREA_COLORS.outline,
          depthWrite: false,
          depthTest: true,
        })
      )
    : new THREE.Line(
        outlineGeo,
        new THREE.LineBasicMaterial({
          color: WORK_AREA_COLORS.outline,
          depthWrite: false,
          depthTest: true,
        })
      )
  outline.renderOrder = 22
  return outline
}

function isWorkAreaLoopClosed(points) {
  if (!points || points.length < 3) return false
  return points[0].distanceTo(points[points.length - 1]) <= WORK_AREA_CLOSE_DIST
}

function updateWorkAreaPreviewVisual() {
  clearWorkAreaPreviewVisual()
  if (!scene || workAreaDrawPointsWorld.length < 2) return

  const floorY = -currentFloorD + 0.15
  const worldPointsXZ = workAreaDrawPointsWorld.map((p) => ({ x: p.x, z: p.z }))
  const closed = isWorkAreaLoopClosed(workAreaDrawPointsWorld)

  workAreaPreviewGroup = new THREE.Group()
  workAreaPreviewGroup.name = 'workAreaPreview'

  const outline = createWorkAreaOutlineLine(worldPointsXZ, floorY, { closed })
  if (outline) workAreaPreviewGroup.add(outline)

  if (closed) {
    const fill = createWorkAreaFillMesh(worldPointsXZ, floorY, { preview: true })
    if (fill) workAreaPreviewGroup.add(fill)
  }

  scene.add(workAreaPreviewGroup)
}

function disposeWorkAreaVisual() {
  clearWorkAreaPreviewVisual()
  if (!workAreaGroup || !scene) return
  scene.remove(workAreaGroup)
  workAreaGroup.traverse((o) => {
    if (o.geometry) o.geometry.dispose()
    if (o.material) o.material.dispose()
  })
  workAreaGroup = null
}

function buildWorkAreaVisual(canonicalPoints) {
  disposeWorkAreaVisual()
  if (!scene || !canonicalPoints || canonicalPoints.length < 3) return

  const floorY = -currentFloorD + 0.15
  const worldPointsXZ = canonicalPointsToWorldXZ(canonicalPoints)

  workAreaGroup = new THREE.Group()
  workAreaGroup.name = 'workArea'
  workAreaGroup.renderOrder = 20

  const fill = createWorkAreaFillMesh(worldPointsXZ, floorY)
  if (fill) workAreaGroup.add(fill)

  const outline = createWorkAreaOutlineLine(worldPointsXZ, floorY, { closed: true })
  if (outline) workAreaGroup.add(outline)

  workAreaGroup.visible = topViewActive.value
  scene.add(workAreaGroup)
}

function loadPersistedWorkArea() {
  const points = loadWorkAreaFromStorage()
  workAreaCanonical.value = points ?? []
  if (mapReadyRef.value && points?.length >= 3) buildWorkAreaVisual(points)
}

function saveWorkArea(canonicalPoints) {
  if (!canonicalPoints || canonicalPoints.length < 3) return
  workAreaCanonical.value = canonicalPoints
  workAreaHint.value = ''
  saveWorkAreaToStorage(canonicalPoints)
  buildWorkAreaVisual(canonicalPoints)
  rebuildRobotTrailVisual()
  emit('workAreaSaved', { points: canonicalPoints })
}

function clearWorkArea() {
  workAreaDrawing.value = false
  workAreaDrawPointsWorld = []
  workAreaHint.value = ''
  workAreaCanonical.value = []
  clearWorkAreaStorage()
  disposeWorkAreaVisual()
  clearRobotTrail()
  emit('workAreaSaved', { points: [] })
}

function finishWorkAreaDraw() {
  if (!workAreaDrawing.value) return
  workAreaDrawing.value = false
  syncWorkAreaOrbitControls()
  clearWorkAreaPreviewVisual()

  if (workAreaDrawPointsWorld.length < 3) {
    workAreaDrawPointsWorld = []
    workAreaHint.value = '至少需要 3 个点'
    emit('workAreaSaved', { points: [], error: '圈选点数不足' })
    return
  }

  if (!isWorkAreaLoopClosed(workAreaDrawPointsWorld)) {
    workAreaDrawPointsWorld = []
    workAreaHint.value = '未闭合：请拖回起点附近，出现淡黄填充后再松开'
    emit('workAreaSaved', { points: [], error: '圈选未闭合，请拖回起点附近再松开' })
    return
  }

  const canonical = workAreaDrawPointsWorld.map((w) => worldToCanonical(w))
  workAreaDrawPointsWorld = []
  saveWorkArea(canonical)
}

function onCanvasPointerDown(event) {
  if (!topViewActive.value || topViewOverlayMode.value !== 'workArea') return
  if (event.button !== 0) return
  event.preventDefault()
  renderer?.domElement?.setPointerCapture?.(event.pointerId)
  if (orbitControls) orbitControls.enabled = false
  workAreaDrawing.value = true
  workAreaHint.value = ''
  workAreaDrawPointsWorld = []
  const p = screenToFloorPoint(event.clientX, event.clientY)
  if (p) workAreaDrawPointsWorld.push(p)
  updateWorkAreaPreviewVisual()
}

function onCanvasPointerMove(event) {
  if (!workAreaDrawing.value) return
  event.preventDefault()
  const p = screenToFloorPoint(event.clientX, event.clientY)
  if (!p) return
  const last = workAreaDrawPointsWorld[workAreaDrawPointsWorld.length - 1]
  if (last && last.distanceTo(p) < WORK_AREA_LASSO_MIN_DIST) return
  workAreaDrawPointsWorld.push(p)
  updateWorkAreaPreviewVisual()
}

function onCanvasPointerUp(event) {
  if (!workAreaDrawing.value) return
  if (event.button !== 0) return
  event.preventDefault()
  renderer?.domElement?.releasePointerCapture?.(event.pointerId)
  finishWorkAreaDraw()
}

/** 退出 pointer lock，保存相机状态，启用 OrbitControls 俯视并 `buildTopViewZones`；障碍物启用顶裁切。 */
const enterTopView = () => {
  if (!camera || !renderer || !floorPointCloud) return
  document.exitPointerLock?.()

  refreshMapTopBounds()

  savedCameraPosition.copy(camera.position)
  savedCameraQuaternion.copy(camera.quaternion)
  if (orbitControls) savedOrbitTarget.copy(orbitControls.target)
  else savedOrbitTarget.copy(mapFloorCenter)

  if (!orbitControls) {
    orbitControls = new OrbitControls(camera, renderer.domElement)
    orbitControls.enableDamping = true
    orbitControls.dampingFactor = 0.06
    orbitControls.minPolarAngle = 0.08
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.03
    orbitControls.minDistance = Math.max(mapFloorSpan * 0.35, 4)
    orbitControls.maxDistance = Math.max(mapFloorSpan * 4, 80)
    orbitControls.target.copy(mapFloorCenter)
  }

  orbitControls.enabled = true
  orbitControls.target.copy(mapFloorCenter)

  const alt = Math.max(mapFloorSpan * 1.32, 16)
  camera.position.set(mapFloorCenter.x, mapFloorCenter.y + alt, mapFloorCenter.z + mapFloorSpan * 0.02)
  camera.up.set(0, 1, 0)
  camera.lookAt(mapFloorCenter)
  orbitControls.update()

  topViewActive.value = true
  buildTopViewZones()
  if (workAreaCanonical.value.length >= 3) buildWorkAreaVisual(workAreaCanonical.value)
  syncWorkAreaOrbitControls()
}

/** 禁用轨道控制，恢复进入俯视前相机位姿，销毁区域可视化并关闭顶裁切。 */
const exitTopView = () => {
  if (!camera) return
  if (orbitControls) {
    orbitControls.enabled = false
  }
  camera.position.copy(savedCameraPosition)
  camera.quaternion.copy(savedCameraQuaternion)
  if (orbitControls) orbitControls.target.copy(savedOrbitTarget)

  topViewActive.value = false
  workAreaDrawing.value = false
  workAreaDrawPointsWorld = []
  disposeTopViewZones()
  disposeWorkAreaVisual()
  syncWorkAreaOrbitControls()
}

/** 窗口尺寸变化：更新透视相机 aspect、renderer 尺寸、`orbitControls.update`。 */
const onResize = () => {
  if (!containerRef.value || !camera || !renderer) return
  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  orbitControls?.update()
}

/**
 * 画布点击：未锁指针则 requestPointerLock；已锁定则射线检测点云。
 */
const onCanvasClick = (event) => {
  if (!floorPointCloud || !camera) return
  if (topViewActive.value) return
  if (!document.pointerLockElement) {
    renderer.domElement.requestPointerLock()
    return
  }

  updatePointerFromEvent(event)
  const intersects = intersectPointClouds()
  if (intersects.length > 0) {
    const hit = intersects[0]
    const point = hit.point
    const isFloor = hit.object.name === 'floor'
    emit('pointClick', { x: point.x, y: point.y, z: point.z, isFloor })
  }
}

/**
 * 判断世界坐标点落在哪个交互球内；`useCanonicalCoords` 时用 `sceneRotation` 逆变换再与 zone 中心比距离。
 * @returns {{ zone: object|null, inZone: boolean }}
 */
const getZoneAtPoint = (point) => {
  if (!props.interactionZones?.length) return { zone: null, inZone: true }
  let checkPoint = point
  if (props.useCanonicalCoords && sceneRotation) {
    checkPoint = point.clone().applyQuaternion(sceneRotation.clone().invert())
  }
  const zone = props.interactionZones.find((z) => {
    const dx = checkPoint.x - z.x
    const dy = checkPoint.y - z.y
    const dz = checkPoint.z - z.z
    return dx * dx + dy * dy + dz * dz <= (z.radius ?? 0.5) ** 2
  })
  return { zone: zone ?? null, inZone: !!zone }
}

/** 鼠标移动射线检测：更新悬浮信息、区内则 `emit('pointHover')`；俯视模式清空悬浮。 */
const onCanvasMouseMove = (event) => {
  if (!floorPointCloud || !camera) return

  if (topViewActive.value) {
    hoverInfoRef.value = null
    hoveredPointRef.value = null
    showInteractionSwitchRef.value = false
    return
  }

  updatePointerFromEvent(event)
  const intersects = intersectPointClouds()

  if (intersects.length > 0) {
    const hit = intersects[0]
    const point = hit.point
    const isFloor = hit.object.name === 'floor'
    const canonicalPoint = props.useCanonicalCoords && sceneRotation
      ? point.clone().applyQuaternion(sceneRotation.clone().invert())
      : point
    const displayCoords = props.useCanonicalCoords ? canonicalPoint : point
    hoverInfoRef.value = `位置: (${displayCoords.x.toFixed(2)}, ${displayCoords.y.toFixed(2)}, ${displayCoords.z.toFixed(2)}) · ${isFloor ? '地板' : '障碍物'}${props.useCanonicalCoords ? ' [固定坐标]' : ''}`
    const { zone, inZone } = getZoneAtPoint(point)
    if (inZone) {
      hoveredPointRef.value = { x: point.x, y: point.y, z: point.z, isFloor, zone }
      emit('pointHover', {
        x: canonicalPoint.x,
        y: canonicalPoint.y,
        z: canonicalPoint.z,
        isFloor,
        device: zone?.label,
      })
    } else {
      hoveredPointRef.value = null
      showInteractionSwitchRef.value = false
    }
  } else {
    hoverInfoRef.value = null
    hoveredPointRef.value = null
    showInteractionSwitchRef.value = false
  }
}

/**
 * 渲染循环：`requestAnimationFrame` 递归；俯视只更新 OrbitControls；行走模式用 `dt` 积分移动/跳跃/贴地。
 */
const animate = () => {
  animationId = requestAnimationFrame(animate)
  const dt = Math.min((performance.now() - lastTime) / 1000, 0.1)

  if (topViewActive.value) {
    if (orbitControls) orbitControls.update()
    showInteractionSwitchRef.value = false
    updateRobotMovement(dt)
    lastTime = performance.now()
    renderer?.render(scene, camera)
    return
  }

  if (camera && hoveredPointRef.value) {
    const p = hoveredPointRef.value
    const dist = camera.position.distanceTo(new THREE.Vector3(p.x, p.y, p.z))
    showInteractionSwitchRef.value = dist < props.interactionDistanceThreshold
  }

  if (!isWalkingMode() && initialCameraPos && !hasUserEnteredWalkingMode) {
    camera.position.copy(initialCameraPos)
    camera.lookAt(initialCameraTarget)
  } else if (isWalkingMode()) {
    const dtWalk = dt
    let proposed = camera.position.clone()
    const f = (keys.forward ? 1 : 0) - (keys.backward ? 1 : 0)
    const s = (keys.right ? 1 : 0) - (keys.left ? 1 : 0)
    if (Math.abs(f) > 1e-4 || Math.abs(s) > 1e-4) {
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)
      const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion)
      const moveForward = projectVectorOnPlane(forward, currentFloorNormal)
      const moveRight = projectVectorOnPlane(right, currentFloorNormal)
      if (moveForward.lengthSq() > 0.0001) moveForward.normalize()
      if (moveRight.lengthSq() > 0.0001) moveRight.normalize()
      const dir = moveForward.clone().multiplyScalar(f).add(moveRight.clone().multiplyScalar(s))
      if (dir.lengthSq() > 1e-8) {
        dir.normalize()
        const mag = Math.min(Math.hypot(f, s), 1)
        const speed = props.moveSpeed * mag * Math.min(60 * dtWalk, 1.2)
        const step = dir.clone().multiplyScalar(speed)
        const p = proposed.clone().add(step)
        if (!wouldCollide(p)) proposed.add(step)
      }
    }
    const floorYAtPos = getFloorHeightAt(proposed.x, proposed.z)
    const baseY = floorYAtPos + props.cameraHeightAboveFloor
    const onGround = velocityY === 0 && Math.abs(camera.position.y - baseY) < 0.02

    if (onGround && keys.jump) {
      velocityY = props.jumpForce
    }

    if (velocityY !== 0) {
      proposed.y = camera.position.y + velocityY * 60 * dtWalk
      velocityY -= props.gravity * 60 * dtWalk
      if (proposed.y <= baseY) {
        proposed.y = baseY
        velocityY = 0
      }
      if (wouldCollide(proposed)) {
        velocityY = 0
        proposed.copy(camera.position)
        proposed.y = Math.max(proposed.y, baseY)
      }
      camera.position.copy(proposed)
    } else {
      proposed.y = baseY
      camera.position.copy(proposed)
    }
  }

  updateRobotMovement(dt)

  lastTime = performance.now()
  renderer?.render(scene, camera)
}

/** 交互卡片主开关：翻转本地 `deviceStateRef`、若自动开则关自动，向父组件 `emit('switchToggle')`。 */
const onInteractionSwitchToggle = () => {
  const label = hoveredPointRef.value?.zone?.label
  if (!label) return
  const nextOn = !currentDeviceOn.value
  deviceStateRef.value = { ...deviceStateRef.value, [label]: nextOn }
  if (currentDeviceAuto.value) {
    autoStateRef.value = { ...autoStateRef.value, [label]: false }
  }
  emit('switchToggle', {
    position: { x: hoveredPointRef.value.x, y: hoveredPointRef.value.y, z: hoveredPointRef.value.z },
    isFloor: hoveredPointRef.value.isFloor,
    isOn: nextOn,
    device: label,
  })
}

/** 交互卡片自动模式：`emit('autoToggle')` 同步父级遥测与 MCU。 */
const onAutoModeToggle = () => {
  const label = hoveredPointRef.value?.zone?.label
  if (!label) return
  const next = !currentDeviceAuto.value
  autoStateRef.value = { ...autoStateRef.value, [label]: next }
  emit('autoToggle', { device: label, isAutoOn: next })
}

/** 组件卸载：取消动画帧、移除事件监听、dispose 几何/材质/controls/renderer。 */
const cleanup = () => {
  cancelAnimationFrame(particleAnimationId)
  particleAnimationId = null
  window.removeEventListener('resize', onResize)
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('keyup', onKeyUp)
  renderer?.domElement?.removeEventListener('click', onCanvasClick)
  renderer?.domElement?.removeEventListener('mousemove', onCanvasMouseMove)
  renderer?.domElement?.removeEventListener('pointerdown', onCanvasPointerDown)
  renderer?.domElement?.removeEventListener('pointermove', onCanvasPointerMove)
  renderer?.domElement?.removeEventListener('pointerup', onCanvasPointerUp)
  renderer?.domElement?.removeEventListener('pointercancel', onCanvasPointerUp)
  disposeWorkAreaVisual()
  clearRobotTrail()
  controls?.domElement?.ownerDocument?.removeEventListener('pointerlockchange', onPointerLockChange)
  cancelAnimationFrame(animationId)
  disposeTopViewZones()
  disposeRobotModel()
  setObstacleCeilingClipEnabled(false)
  orbitControls?.dispose()
  orbitControls = null
  renderer?.dispose()
  controls?.dispose()
}

// —— 以下为 watch：props/ref 变化时更新 Three 材质、俯视区或重载点云；无需手动在业务里 if ——
watch(
  () => props.robotPose,
  (pose) => {
    if (pose) setRobotTarget(pose, false)
  },
  { deep: true }
)

watch(workAreaCanonical, () => {
  rebuildRobotTrailVisual()
}, { deep: true })

watch(topViewOverlayMode, () => {
  syncWorkAreaOrbitControls()
  if (topViewActive.value && topViewOverlayMode.value !== 'workArea') applyTopViewZoneColors()
  if (
    topViewActive.value &&
    topViewOverlayMode.value === 'workArea' &&
    workAreaCanonical.value.length >= 3
  ) {
    buildWorkAreaVisual(workAreaCanonical.value)
  }
  if (workAreaGroup) workAreaGroup.visible = topViewActive.value
})

watch(
  () => props.telemetry,
  () => {
    if (topViewActive.value && topViewOverlayMode.value === 'temperature') applyTopViewZoneColors()
  },
  { deep: true }
)

watch(
  () => props.syncedDeviceState,
  () => {
    if (topViewActive.value && topViewOverlayMode.value === 'light') applyTopViewZoneColors()
  },
  { deep: true }
)

watch(deviceStateRef, () => {
  if (topViewActive.value && topViewOverlayMode.value === 'light') applyTopViewZoneColors()
}, { deep: true })

watch(topViewActive, (v) => {
  if (topViewZoneGroup) topViewZoneGroup.visible = v
  if (v) rebuildRobotTrailVisual()
  else disposeRobotTrailVisual()
  if (!obstaclePointCloud) return
  if (v) {
    refreshObstacleCeilingClipHeight()
    setObstacleCeilingClipEnabled(true)
  } else {
    setObstacleCeilingClipEnabled(false)
  }
})

watch(
  () => props.interactionZones,
  () => {
    if (topViewActive.value) buildTopViewZones()
  },
  { deep: true }
)
// 地图地址变则整图重载（会 dispose 旧几何）
watch(() => props.pcdUrl, () => {
  loadPCD()
})

watch(
  () => props.syncedDeviceState,
  (next) => {
    if (!next || typeof next !== 'object') return
    deviceStateRef.value = { ...deviceStateRef.value, ...next }
  },
  { deep: true }
)

watch(
  () => props.telemetry,
  (t) => {
    if (!t || typeof t !== 'object') return
    const cur = autoStateRef.value
    autoStateRef.value = {
      风扇: 'fanAuto' in t ? !!t.fanAuto : cur.风扇,
      大门: 'gateAuto' in t ? !!t.gateAuto : cur.大门,
      灯: 'lightAuto' in t ? !!t.lightAuto : cur.灯,
    }
  },
  { deep: true, immediate: true }
)

// 卡片内动态粒子背景（小粒子、慢速）；IIFE 立即执行函数，初始化一次静态粒子数组
const particles = (() => {
  const count = 50
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      r: 0.15 + Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.005,
      vy: (Math.random() - 0.5) * 0.005,
      opacity: 0.4 + Math.random() * 0.4,
    })
  }
  return arr
})()

/** 在交互卡片 canvas 上绘制渐变背景与粒子光晕（`requestAnimationFrame` 自递归）。 */
const runParticleAnimation = () => {
  const canvas = particleCanvasRef.value
  if (!canvas || !showInteractionSwitchRef.value) return
  const ctx = canvas.getContext('2d')
  const w = (canvas.width = canvas.offsetWidth)
  const h = (canvas.height = canvas.offsetHeight)
  ctx.clearRect(0, 0, w, h)
  const bg = ctx.createLinearGradient(0, 0, 0, h)
  bg.addColorStop(0, 'rgba(30, 27, 75, 0.85)')
  bg.addColorStop(1, 'rgba(15, 23, 42, 0.9)')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)
  particles.forEach((p) => {
    p.x += p.vx
    p.y += p.vy
    if (p.x < -1.2 || p.x > 1.2) p.vx *= -1
    if (p.y < -1.2 || p.y > 1.2) p.vy *= -1
    const x = (p.x * 0.5 + 0.5) * w
    const y = (p.y * 0.5 + 0.5) * h
    const glowR = p.r * Math.min(w, h) * 0.08
    const g = ctx.createRadialGradient(x, y, 0, x, y, glowR)
    g.addColorStop(0, `rgba(34, 211, 238, ${p.opacity})`)
    g.addColorStop(0.5, `rgba(6, 182, 212, ${p.opacity * 0.4})`)
    g.addColorStop(1, 'transparent')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, glowR, 0, Math.PI * 2)
    ctx.fill()
  })
  particleAnimationId = requestAnimationFrame(runParticleAnimation)
}

watch(showInteractionSwitchRef, (visible) => {
  if (visible) {
    setTimeout(() => runParticleAnimation(), 50)
  } else {
    cancelAnimationFrame(particleAnimationId)
    particleAnimationId = null
  }
})

onMounted(initThree) // 挂载后创建 WebGL 与加载 PCD
onUnmounted(cleanup) // 卸载前释放 GPU 与监听器

defineExpose({
  setRobotTarget,
  teleportRobotTo,
  mapReady: mapReadyRef,
})
</script>

<template>
  <!-- 禁止触摸默认行为（如滚动），交互动作用自定义键鼠 -->
  <div class="relative w-full h-full touch-none">
    <!-- ref：把该 DOM 元素赋给 script 中 containerRef，供 initThree 取宽高并插入 canvas -->
    <div ref="containerRef" class="h-full w-full cursor-crosshair touch-none" />

    <!-- 加载中遮罩；v-if 为 false 时不渲染子树，省 DOM -->
    <div
      v-if="loadingRef"
      class="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"
    >
      <div class="text-center w-[min(22rem,calc(100vw-2rem))] px-4">
        <div class="inline-block w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p class="text-slate-200 text-lg mb-1">
          {{ loadingPhase === 'download' ? '正在下载地图…' : '正在加载地图…' }}
        </p>
        <div class="h-2.5 w-full rounded-full bg-slate-700/90 overflow-hidden border border-slate-600/60 mb-3">
          <div
            class="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-[width] duration-200 ease-out"
            :class="loadingPhase === 'processing' ? 'animate-pulse' : ''"
            :style="{
              width:
                loadingPhase === 'processing'
                  ? '100%'
                  : `${Math.round(loadingDownloadPercent)}%`,
            }"
          />
        </div>
        <p v-if="loadingPhase === 'download'" class="text-slate-400 text-sm tabular-nums">
          {{ Math.round(loadingDownloadPercent) }}%
        </p>
        <p v-else class="text-slate-300 text-sm leading-relaxed px-1">
          文件较大，正在渲染中，请耐心等待
        </p>
      </div>
    </div>

    <!-- 与上一分支互斥：地图加载/解析错误时展示 -->
    <div
      v-else-if="errorRef"
      class="absolute inset-0 flex items-center justify-center bg-slate-900/90"
    >
      <div class="max-w-md p-6 bg-slate-800 rounded-xl border border-slate-600">
        <p class="text-amber-400 mb-4">{{ errorRef }}</p>
      </div>
    </div>

    <!-- 正常态：左上工具条（面切换、俯视等） -->
    <div v-else class="absolute top-4 left-4 z-20 flex max-w-[calc(100vw-2rem)] flex-col gap-2">
      <div v-if="detectedPlanes.length > 1" class="flex flex-wrap gap-1">
        <span class="text-slate-400 text-sm self-center">切换行走面：</span>
        <button
          v-for="(p, i) in detectedPlanes"
          :key="i"
          :class="[
            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors',
            selectedPlaneIndex === i ? 'bg-emerald-600 text-white' : 'bg-slate-700/90 text-slate-200 hover:bg-slate-600'
          ]"
          @click="switchFloorPlane(i)"
        >
          面 {{ i + 1 }}
        </button>
      </div>

      <div class="flex flex-wrap gap-1 items-center">
        <span class="text-slate-400 text-sm">俯视：</span>
        <button
          v-if="!topViewActive"
          type="button"
          class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-500"
          @click="enterTopView"
        >
          俯视图
        </button>
        <button
          v-else
          type="button"
          class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-slate-600 text-white hover:bg-slate-500"
          @click="exitTopView"
        >
          退出俯视
        </button>
      </div>
      <div
        v-if="topViewActive"
        class="flex flex-wrap gap-1 items-center"
      >
        <span class="text-slate-400 text-sm">区域状态：</span>
        <button
          type="button"
          :class="['px-3 py-1.5 rounded-lg text-sm font-medium transition-colors', topViewOverlayMode === 'temperature' ? 'bg-sky-600 text-white' : 'bg-slate-700/90 text-slate-200 hover:bg-slate-600']"
          @click="topViewOverlayMode = 'temperature'"
        >
          温度
        </button>
        <button
          type="button"
          :class="['px-3 py-1.5 rounded-lg text-sm font-medium transition-colors', topViewOverlayMode === 'light' ? 'bg-amber-500 text-slate-900' : 'bg-slate-700/90 text-slate-200 hover:bg-slate-600']"
          @click="topViewOverlayMode = 'light'"
        >
          灯光
        </button>
        <button
          type="button"
          :class="['px-3 py-1.5 rounded-lg text-sm font-medium transition-colors', topViewOverlayMode === 'workArea' ? 'bg-yellow-400 text-slate-900' : 'bg-slate-700/90 text-slate-200 hover:bg-slate-600']"
          @click="topViewOverlayMode = 'workArea'"
        >
          选择工作范围
        </button>
      </div>
      <div
        v-if="topViewActive && topViewOverlayMode === 'workArea'"
        class="max-w-xs rounded-lg border border-yellow-500/40 bg-slate-900/90 px-3 py-2 text-xs text-yellow-100/95"
      >
        <p class="mb-1.5"></p>
        <p v-if="workAreaHint" class="text-red-300">{{ workAreaHint }}</p>
        <p v-else-if="workAreaCanonical.length >= 3" class="text-yellow-200/80">
          已圈选（{{ workAreaCanonical.length }} 点）
        </p>
        <p v-else class="text-slate-400">尚未圈选工作区</p>
        <button
          v-if="workAreaCanonical.length >= 3"
          type="button"
          class="mt-2 rounded bg-slate-700 px-2 py-1 text-[11px] text-slate-200 hover:bg-slate-600"
          @click="clearWorkArea"
        >
          清除圈选
        </button>
      </div>
    </div>

    <div
      v-if="hoverInfoRef"
      class="absolute bottom-4 left-4 px-4 py-2 bg-slate-800/90 rounded-lg text-slate-200 text-sm border border-slate-600"
    >
      {{ hoverInfoRef }}
    </div>

    <!-- 设备开关卡片；Transition 使用下方 .switch-fade-* 做淡入淡出 -->
    <Transition name="switch-fade">
      <div
        v-if="showInteractionSwitchRef"
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          class="pointer-events-auto interaction-switch-card"
          @click.stop
        >
          <canvas
            ref="particleCanvasRef"
            class="interaction-switch-card-particles"
          />
          <div
            class="interaction-switch-header"
            :class="{ 'interaction-switch-header--with-speed': hoveredPointRef?.zone?.label === '风扇' }"
          >
            <div class="interaction-switch-header-main">
              <div class="interaction-switch-icon">
                <!-- 风扇 -->
                <svg v-if="hoveredPointRef?.zone?.label === '风扇'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <!-- 灯 -->
                <svg v-else-if="hoveredPointRef?.zone?.label === '灯'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
                <!-- 大门 -->
                <svg v-else-if="hoveredPointRef?.zone?.label === '大门'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M12 10v8" />
                </svg>
                <!-- 默认 -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <div class="interaction-switch-title">{{ hoveredPointRef?.zone?.label || '设备控制' }}</div>
              <div class="interaction-switch-subtitle">点击切换开关状态</div>
            </div>
            <div
              v-if="hoveredPointRef?.zone?.label === '风扇'"
              class="interaction-fan-speed"
            >
              <span class="interaction-fan-speed-label">风速</span>
              <span class="interaction-fan-speed-value">{{ fanSpeedText }}</span>
            </div>
          </div>
          <div class="interaction-switch-body">
            <div class="interaction-switch-label-row">
              <div class="interaction-switch-label">
                <span :class="['status-dot', currentDeviceOn ? 'status-on' : 'status-off']" />
                {{ currentDeviceOn ? '已开启' : '已关闭' }}
              </div>
              <div
                class="tech-switch-container"
                @click.stop="onInteractionSwitchToggle"
              >
                <div :class="['tech-switch-label', currentDeviceOn && 'tech-switch-on']">
                  <span class="tech-scanline" />
                  <span class="tech-status-on">ON</span>
                  <span class="tech-status-off">OFF</span>
                  <span :class="['tech-slider', currentDeviceOn && 'tech-slider-on']" />
                </div>
                <div v-if="currentDeviceOn" class="tech-glow-dot" />
              </div>
            </div>
            <div class="interaction-auto-row">
              <div class="interaction-auto-label">
                <span class="interaction-auto-tag">AUTO</span>
                <span>自动模式</span>
              </div>
              <div
                class="tech-switch-container tech-switch-container--sm"
                @click.stop="onAutoModeToggle"
              >
                <div :class="['tech-switch-label tech-switch-label--sm', currentDeviceAuto && 'tech-switch-on']">
                  <span class="tech-status-on tech-status-on--sm">开</span>
                  <span class="tech-status-off tech-status-off--sm">关</span>
                  <span :class="['tech-slider tech-slider--sm', currentDeviceAuto && 'tech-slider-on']" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <div
      v-if="!loadingRef && !errorRef && !isPointerLocked && !topViewActive"
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div class="max-w-[min(22rem,calc(100vw-2rem))] rounded-lg bg-slate-800/80 px-6 py-3 text-center text-slate-300">
        <div class="mb-1 font-medium">点击进入行走模式</div>
        <div class="text-sm text-slate-400">鼠标控制视角 · 方向键/WASD 行走 · Space 跳跃</div>
      </div>
    </div>

    <div
      v-if="!loadingRef && !errorRef"
      class="absolute top-4 right-4 flex flex-col items-end gap-2 pointer-events-none z-10"
    >
      <div class="map-telemetry-temp px-3 py-2 bg-slate-800/92 rounded-lg border border-cyan-500/40 text-right shadow-lg shadow-cyan-900/20">
        <div class="text-cyan-400/90 text-[10px] font-semibold tracking-widest uppercase">
          DS18 温度
        </div>
        <div class="text-slate-50 text-xl font-semibold tabular-nums leading-tight">
          {{ tempDisplayText }}
        </div>
      </div>
      <div class="px-3 py-1.5 bg-slate-800/85 rounded-lg text-slate-400 text-xs border border-slate-600/80">
        SLAM AR 场景交互
      </div>
    </div>
  </div>
</template>

<style scoped>
/* scoped：属性选择器为组件内 DOM 加 data 作用域，避免类名与全局冲突 */
.switch-fade-enter-active,
.switch-fade-leave-active {
  transition: opacity 0.2s ease;
}
.switch-fade-enter-from,
.switch-fade-leave-to {
  opacity: 0;
}

.interaction-switch-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.25rem 2.75rem;
  min-width: 340px;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(239, 68, 68, 0.6);
  box-shadow:
    0 0 25px rgba(239, 68, 68, 0.25),
    0 0 50px rgba(239, 68, 68, 0.1),
    inset 0 0 25px rgba(239, 68, 68, 0.05),
    0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.interaction-switch-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.8), transparent);
  pointer-events: none;
  z-index: 2;
}

.interaction-switch-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.5), transparent);
  pointer-events: none;
  z-index: 2;
}

.interaction-switch-card-particles {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.interaction-switch-card > .interaction-switch-header,
.interaction-switch-card > .interaction-switch-body {
  position: relative;
  z-index: 1;
}

.interaction-switch-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
}

.interaction-switch-header--with-speed {
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.interaction-switch-header-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  flex: 1;
  min-width: 0;
}

.interaction-switch-header--with-speed .interaction-switch-header-main {
  align-items: flex-start;
}

.interaction-fan-speed {
  flex-shrink: 0;
  text-align: right;
  padding: 0.25rem 0 0 0.5rem;
}

.interaction-fan-speed-label {
  display: block;
  font-size: 0.65rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.interaction-fan-speed-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #22d3ee;
  font-variant-numeric: tabular-nums;
}

.interaction-auto-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
  padding-top: 0.75rem;
  margin-top: 0.25rem;
  border-top: 1px solid rgba(148, 163, 184, 0.25);
}

.interaction-auto-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #cbd5e1;
  flex-shrink: 0;
  min-width: 0;
}

.interaction-auto-tag {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #a78bfa;
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  background: rgba(124, 58, 237, 0.25);
  border: 1px solid rgba(167, 139, 250, 0.35);
}

/* 与主开关同宽，保证两行右边缘对齐 */
.tech-switch-container--sm {
  width: 120px;
  height: 38px;
  flex-shrink: 0;
}

.tech-switch-label--sm {
  border-radius: 4px;
}

.tech-switch-label--sm .tech-scanline {
  display: none;
}

.tech-status-on--sm,
.tech-status-off--sm {
  font-size: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.tech-status-off--sm {
  right: 10px;
}

.tech-status-on--sm {
  left: 10px;
}

.tech-slider--sm {
  height: 30px;
  width: 46px;
  bottom: 4px;
  left: 4px;
}

/* 内宽 116px：4 + 62 + 46 = 112，右侧留 4px 与主开关一致 */
.tech-slider--sm.tech-slider-on {
  transform: translateX(62px);
}

.interaction-switch-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
  border-radius: 0.75rem;
  color: white;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);
}

.interaction-switch-icon svg {
  width: 100%;
  height: 100%;
}

.interaction-switch-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f1f5f9;
  letter-spacing: 0.02em;
}

.interaction-switch-subtitle {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 400;
}

.interaction-switch-body {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  min-width: 0;
}

.interaction-switch-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  min-width: 0;
}

.interaction-switch-label-row .tech-switch-container {
  flex-shrink: 0;
}

.interaction-switch-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #e2e8f0;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.status-on {
  background: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
}

.status-off {
  background: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.3);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* 科技感开关 (来自 tech_switch.html) */
.tech-switch-container {
  position: relative;
  width: 120px;
  height: 50px;
  cursor: pointer;
}

.tech-switch-label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1a1a1a;
  border-radius: 4px;
  transition: 0.4s;
  border: 2px solid #333;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.tech-switch-label::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent 45%, rgba(0, 243, 255, 0.05) 50%, transparent 55%);
  background-size: 10px 100%;
  pointer-events: none;
}

.tech-switch-on {
  border-color: #00f3ff;
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.3), inset 0 0 10px rgba(0, 243, 255, 0.1);
}

.tech-slider {
  position: absolute;
  height: 38px;
  width: 46px;
  left: 4px;
  bottom: 4px;
  background: linear-gradient(145deg, #222, #444);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.tech-slider::after {
  content: "";
  width: 20px;
  height: 2px;
  background: #666;
  box-shadow: 0 5px 0 #666, 0 -5px 0 #666;
}

.tech-slider-on {
  transform: translateX(62px);
  background: linear-gradient(145deg, #00f3ff, #0099ff);
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.6);
}

.tech-slider-on::after {
  background: #fff;
  box-shadow: 0 5px 0 #fff, 0 -5px 0 #fff;
}

.tech-status-on,
.tech-status-off {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s;
  pointer-events: none;
}

.tech-status-off {
  right: 15px;
  color: #444;
}

.tech-status-on {
  left: 15px;
  color: #444;
  opacity: 0;
}

.tech-switch-on .tech-status-on {
  opacity: 1;
  color: #00f3ff;
  text-shadow: 0 0 8px #00f3ff, 0 0 15px #00f3ff;
  animation: tech-flicker 2s infinite;
}

.tech-switch-on .tech-status-off {
  opacity: 0;
}

@keyframes tech-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { text-shadow: 0 0 8px #00f3ff, 0 0 15px #00f3ff; }
  20%, 24%, 55% { text-shadow: none; opacity: 0.7; }
}

.tech-scanline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(0, 243, 255, 0.1);
  opacity: 0;
  z-index: 1;
}

.tech-switch-on .tech-scanline {
  opacity: 1;
  animation: tech-scan 2s linear infinite;
}

@keyframes tech-scan {
  0% { top: 0; }
  100% { top: 100%; }
}

.tech-glow-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00f3ff;
  border-radius: 50%;
  top: -10px;
  right: -10px;
  box-shadow: 0 0 10px #00f3ff;
  z-index: 3;
}
</style>
