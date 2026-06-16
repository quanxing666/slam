<script setup>
/**
 * 应用根组件
 * - `<script setup>`：编译后等价于在 `setup()` 中执行；顶层 `const`/`function` 自动暴露给模板，无需 `return`。
 * - `import`：静态依赖，由打包器做 tree-shaking；`from 'vue'` 为框架入口。
 * 职责：MCU 轮询、设备控制、操作日志、DeepSeek 日志分析；3D 由 PCDMapViewer 承担。
 */
// ref：把原始值/对象包成「响应式引用」；`.value` 在 script 中读写，模板里自动解包
// onMounted / onUnmounted：生命周期钩子，分别在 DOM 挂载后、组件卸载前执行，用于起停定时器与轮询
import { ref, computed, onMounted, onUnmounted } from 'vue'
import PCDMapViewer from './components/PCDMapViewer.vue' // 默认导入：单文件 .vue 组件
import {
  ROBOT_WAYPOINTS,
  getSpawnCanonical,
  getInteractionZones,
} from './config/robotWaypoints.js'
import { numOrNull } from './utils/number.js'
import {
  USE_MAP_TRANSFORM_JSON,
  HW_POSE_IS_RAW,
  loadMapTransform,
  getLayoutCentroid,
  rawPoseToCanonical,
  canonicalPoseToRaw,
} from './utils/mapTransform.js'
import { resolveMcuDirectUrl } from './config/mcu.js'

// —— 网络与 MCU（单片机硬件 HTTP 接口）——
/** 是否走本地同源代理（开发或显式 `VITE_USE_LOCAL_PROXY=1`），避免浏览器直连设备跨域 */
const useLocalProxy =
  import.meta.env.DEV || import.meta.env.VITE_USE_LOCAL_PROXY === '1'
/** 硬件 API 根地址：`VITE_MCU_API` 优先；开发代理 `/hw`；否则由 `VITE_MCU_IP_PROFILE` 选 IP */
const MCU_BASE_URL = (
  import.meta.env.VITE_MCU_API ||
  (useLocalProxy ? '/hw' : resolveMcuDirectUrl(import.meta.env))
).replace(/\/$/, '')

// —— DeepSeek 对话 API（用于「AI 分析」操作日志）——
const DEEPSEEK_CHAT_URL =
  import.meta.env.VITE_DEEPSEEK_URL ||
  (useLocalProxy
    ? '/deepseek-api/v1/chat/completions'
    : 'https://api.deepseek.com/v1/chat/completions')
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || ''
const DEEPSEEK_FETCH_TIMEOUT_MS = Math.max(15000, Number(import.meta.env.VITE_DEEPSEEK_FETCH_TIMEOUT_MS) || 120000)

// —— 功能开关与硬件请求超时 ——
/** 为 true 时用正弦曲线模拟温度，不依赖真实 `/status`（`VITE_MOCK_TELEMETRY=1`） */
const FORCE_MOCK_TELEMETRY = import.meta.env.VITE_MOCK_TELEMETRY === '1'
const SEED_DEMO_DEVICE_LOGS = import.meta.env.VITE_SEED_DEMO_DEVICE_LOGS !== '0'
/** 为 true 时不请求 MCU（纯前端演示，`VITE_HW_DISABLED=1`） */
const HW_DISABLED = import.meta.env.VITE_HW_DISABLED === '1'
/** 为 true 且无硬件时模拟 `/status` 连续下发机器人坐标（默认随 HW_DISABLED 开启） */
const FORCE_MOCK_ROBOT_POSE =
  import.meta.env.VITE_MOCK_ROBOT_POSE === '1' ||
  (HW_DISABLED && import.meta.env.VITE_MOCK_ROBOT_POSE !== '0')
/** 为 true 时显示左下角机器人路点控制面板（`VITE_ROBOT_WAYPOINT_PANEL=1`） */
const SHOW_ROBOT_WAYPOINT_PANEL = import.meta.env.VITE_ROBOT_WAYPOINT_PANEL === '1'
/** 机器人 GLB/GLTF 路径，默认 `/robot.glb` */
const ROBOT_MODEL_URL = import.meta.env.VITE_ROBOT_MODEL_URL || '/robot.glb'
/** 单次请求 MCU（`/status`、`/control`）的超时毫秒数，默认 5000 */
const HW_FETCH_TIMEOUT_MS = Math.max(500, Number(import.meta.env.VITE_HW_FETCH_TIMEOUT_MS) || 5000)

// —— 轮询与乐观更新保护时间 ——
/** 周期性拉取 `/status` 的间隔毫秒数，默认 300 */
const STATUS_POLL_MS = Number(import.meta.env.VITE_STATUS_POLL_MS) || 30
/** 控制成功后「补拉一次」的延迟，约为轮询间隔的一半，至少 50ms */
const STATUS_FOLLOWUP_MS = Math.max(50, Math.round(STATUS_POLL_MS / 2))
/** 用户操作后乐观状态与 MCU 不一致时的最长等待窗口（至少为 3×轮询间隔与 2000ms 的较大者） */
const PENDING_GUARD_MS = Math.max(STATUS_POLL_MS * 3, 2000)

// —— 设备：MCU 字段名 → 界面中文名 ——
/** 硬件 JSON 里的键（fan/gate/light）到中文标签的映射 */
const STATUS_KEYS = {
  fan: '风扇',
  gate: '大门',
  light: '灯',
}

/** 反向表：中文设备名 → MCU 请求里用的英文 id（`mcuControlPath` 编码进 URL） */
const DEVICE_MAP = Object.fromEntries(
  Object.entries(STATUS_KEYS).map(([hwId, label]) => [label, hwId])
)

/** 每行：[中文名, 自动模式字段 snake, legacy 自动布尔 snake, 前端遥测里的 camelCase 属性名] */
const AUTO_STATUS_ROWS = [
  ['风扇', 'fan_mode', 'fan_auto', 'fanAuto'],
  ['大门', 'gate_mode', 'gate_auto', 'gateAuto'],
  ['灯', 'light_mode', 'light_auto', 'lightAuto'],
]

/** 将 MCU/JSON 各类「开关」表示统一为 boolean（语法：`===` 严格相等，字符串用 toLowerCase）。 */
function parseOn(v) {
  if (v === true || v === 1) return true
  if (v === false || v === 0) return false
  if (typeof v === 'string') return v.toLowerCase() === 'on' || v === '1' || v.toLowerCase() === 'true'
  return false
}

/** `snake_case` → `camelCase`（正则 `/_([a-z])/g` 替换为捕获组大写）。 */
function toCamelAlias(snake) {
  return snake.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
}

/**
 * 从 `/status` JSON 的根、`sensors`、`telemetry` 中读取自动模式相关字段（兼容 snake 与 camel）。
 * @param {object} data
 * @param {string} key 首选字段名（如 `fan_mode`）
 */
function pickAutoFieldFromStatus(data, key) {
  if (!data || typeof data !== 'object') return undefined
  const keys = [key]
  if (key.includes('_')) keys.push(toCamelAlias(key))
  const roots = [data, data.sensors, data.telemetry].filter((o) => o && typeof o === 'object')
  for (const root of roots) {
    for (const k of keys) {
      if (Object.prototype.hasOwnProperty.call(root, k)) return root[k]
    }
  }
  return undefined
}

/**
 * 把单个自动模式标量写入遥测对象 `t[prop]`；识别 boolean/数字/字符串（auto|manual 等）。
 * @returns {boolean} 是否已成功解析并写入
 */
function applyAutoModeScalar(m, t, prop) {
  if (m === true || m === 1) {
    t[prop] = true
    return true
  }
  if (m === false || m === 0) {
    t[prop] = false
    return true
  }
  if (typeof m === 'string') {
    const s = m.trim().toLowerCase()
    if (s === 'auto' || s === '1' || s === 'true' || s === 'on') {
      t[prop] = true
      return true
    }
    if (s === 'manual' || s === '0' || s === 'false' || s === 'off') {
      t[prop] = false
      return true
    }
  }
  return false
}

/**
 * 同步某设备的自动模式：优先读 `*_mode`，否则回退 legacy 布尔字段并用 `parseOn`。
 */
function syncAutoModeFromStatus(data, modeKey, legacyKey, t, prop) {
  const modeVal = pickAutoFieldFromStatus(data, modeKey)
  if (modeVal !== undefined) {
    if (applyAutoModeScalar(modeVal, t, prop)) return
  }
  const legacyVal = pickAutoFieldFromStatus(data, legacyKey)
  if (legacyVal !== undefined) {
    t[prop] = parseOn(legacyVal)
  }
}

/** 与 MCU 同步的设备开关状态：`{ 风扇|大门|灯: boolean }` 或 null 表示尚未拉到 */
const syncedDeviceState = ref(null)
/** 与 MCU 同步的遥测：温度(℃)、风扇档位(0–100)、各设备是否自动模式、机器人位姿 */
const syncedTelemetry = ref({
  tempC: null,
  fanSpeed: null,
  fanAuto: false,
  gateAuto: false,
  lightAuto: false,
})
/** 硬件 `/status` 下发的机器人 canonical 位姿；连续更新驱动 3D 平滑移动 */
const syncedRobotPose = ref(null)
/** `setInterval` 返回的定时器 id：周期性 `fetchHardwareStatus` */
let statusPollTimer = null
/** `setTimeout` id：控制成功后短延迟再拉一次 `/status` */
let followUpStatusTimer = null
let suppressStatusPollTimer = false
let isAppMounted = false
/** 防止并发两次 `/status` 请求的标志位 */
let statusFetchInFlight = false

/** 模拟温度正弦波的中心值（℃） */
const MOCK_TEMP_CENTER = 27.5
/** 模拟温度正弦波的振幅（℃） */
const MOCK_TEMP_AMP = 2.5
/** 模拟温度刷新间隔（ms） */
const MOCK_TEMP_INTERVAL_MS = 120
/** 模拟温度一个完整正弦周期时长（ms） */
const MOCK_TEMP_SINE_PERIOD_MS = 12000
/** 模拟温度用的 `setInterval` id，未启动时为 null */
let mockTempTimerId = null
/** 模拟硬件连续下发机器人坐标的 `setInterval` id */
let mockRobotNavTimerId = null
/** 模拟导航时的起点/终点（canonical） */
let mockRobotNavFrom = null
let mockRobotNavTo = null
let mockRobotNavStep = 0
let mockRobotNavSteps = 1

const activeRobotWaypointId = ref(ROBOT_WAYPOINTS[0]?.id ?? null)
/** 由 PCDMapViewer 的 map-ready 事件驱动 */
const robotMapReady = ref(false)

const spawnCanonical = computed(() => getSpawnCanonical())
const interactionZones = computed(() => getInteractionZones())

function shouldMockRobotPose() {
  return FORCE_MOCK_ROBOT_POSE && SHOW_ROBOT_WAYPOINT_PANEL
}

/** 地图就绪：同步 robotMapReady，无硬件时在起点初始化位姿 */
function handleMapReady(ready) {
  robotMapReady.value = ready
  if (!ready || !SHOW_ROBOT_WAYPOINT_PANEL) return
  if (syncedRobotPose.value) return
  const home = ROBOT_WAYPOINTS[0]
  if (!home) return
  syncedRobotPose.value = {
    x: home.x,
    y: home.y,
    z: home.z,
    yaw: typeof home.yaw === 'number' ? home.yaw : 0,
  }
}

function getCurrentRobotPose() {
  if (syncedRobotPose.value) return { ...syncedRobotPose.value }
  const home = ROBOT_WAYPOINTS[0]
  if (!home) return null
  return {
    x: home.x,
    y: home.y,
    z: home.z,
    yaw: typeof home.yaw === 'number' ? home.yaw : 0,
  }
}

function lerpNum(a, b, t) {
  return a + (b - a) * t
}

/** 最短弧插值 yaw（弧度） */
function lerpYaw(from, to, t) {
  let delta = to - from
  while (delta > Math.PI) delta -= Math.PI * 2
  while (delta < -Math.PI) delta += Math.PI * 2
  return from + delta * t
}

function stopMockRobotNav() {
  if (mockRobotNavTimerId != null) {
    clearInterval(mockRobotNavTimerId)
    mockRobotNavTimerId = null
  }
  mockRobotNavFrom = null
  mockRobotNavTo = null
  mockRobotNavStep = 0
  mockRobotNavSteps = 1
}

/** 模拟硬件按轮询间隔连续回传中间坐标（与真实 `/status` 中 robot_x/y/z 等效） */
function tickMockRobotNav() {
  if (!mockRobotNavFrom || !mockRobotNavTo) {
    stopMockRobotNav()
    return
  }
  mockRobotNavStep += 1
  const t = Math.min(1, mockRobotNavStep / mockRobotNavSteps)
  const from = mockRobotNavFrom
  const to = mockRobotNavTo
  const fromYaw = typeof from.yaw === 'number' ? from.yaw : 0
  const toYaw = typeof to.yaw === 'number' ? to.yaw : fromYaw
  syncedRobotPose.value = {
    x: lerpNum(from.x, to.x, t),
    y: lerpNum(from.y, to.y, t),
    z: lerpNum(from.z, to.z, t),
    yaw: lerpYaw(fromYaw, toYaw, t),
  }
  if (t >= 1) stopMockRobotNav()
}

/**
 * 无硬件演示：按 STATUS_POLL_MS 间隔向 syncedRobotPose 写入路径中间点。
 * 有硬件时由 fetchHardwareStatus → robotPoseFromStatus 驱动，不走此函数。
 */
function startMockRobotNav(target) {
  if (!shouldMockRobotPose()) return
  const start = getCurrentRobotPose()
  if (!start) return

  stopMockRobotNav()
  const end = {
    x: target.x,
    y: target.y,
    z: target.z,
    yaw: typeof target.yaw === 'number' ? target.yaw : (start.yaw ?? 0),
  }
  mockRobotNavFrom = start
  mockRobotNavTo = end

  const dist = Math.hypot(end.x - start.x, end.y - start.y, end.z - start.z)
  const mockSpeedMps = Number(import.meta.env.VITE_MOCK_ROBOT_SPEED_MPS) || 0.8
  const durationMs = Math.max(STATUS_POLL_MS * 2, (dist / mockSpeedMps) * 1000)
  mockRobotNavSteps = Math.max(1, Math.ceil(durationMs / STATUS_POLL_MS))
  mockRobotNavStep = 0

  tickMockRobotNav()
  mockRobotNavTimerId = window.setInterval(tickMockRobotNav, STATUS_POLL_MS)
}

/** 真实 `/status` 带回机器人位姿时写入，并停止本地模拟导航 */
function applyRobotPoseFromHardware(pose) {
  if (!pose) return
  stopMockRobotNav()
  syncedRobotPose.value = pose
}

/** 路点导航：无硬件走模拟坐标流，有硬件发 MCU 导航指令并由 `/status` 回传坐标 */
function moveRobotTo(waypoint) {
  if (!robotMapReady.value) return
  activeRobotWaypointId.value = waypoint.id
  pushDeviceLog(`机器人 → ${waypoint.label}`)

  if (shouldMockRobotPose()) {
    startMockRobotNav(waypoint)
    return
  }
  navigateRobotOnMcu(waypoint)
}

function handleWorkAreaSaved({ points, error }) {
  if (error) {
    pushDeviceLog(error)
    return
  }
  if (points?.length >= 3) {
    pushDeviceLog(`工作区已保存（${points.length} 个点）`)
  }
}

/** 通知 MCU 导航到路点 */
function navigateRobotOnMcu(waypoint) {
  if (HW_DISABLED) return
  let target = waypoint
  if (USE_MAP_TRANSFORM_JSON && HW_POSE_IS_RAW) {
    const centroid = getLayoutCentroid()
    if (centroid) target = canonicalPoseToRaw(waypoint, centroid)
  }
  const yaw = typeof target.yaw === 'number' ? target.yaw : 0
  const q =
    `/control?device=robot&state=nav` +
    `&x=${encodeURIComponent(String(target.x))}` +
    `&y=${encodeURIComponent(String(target.y))}` +
    `&z=${encodeURIComponent(String(target.z))}` +
    `&yaw=${encodeURIComponent(String(yaw))}`
  mcuControlThenRefresh(q, 'robot nav', 'robot nav', { skipFollowUp: true })
}

/** 用 `setInterval` 正弦模拟温度（仅当 `VITE_MOCK_TELEMETRY=1` 时常驻）。 */
function startMockTemperature() {
  if (mockTempTimerId != null) return
  mockTempTimerId = window.setInterval(() => {
    const rad = (Date.now() / MOCK_TEMP_SINE_PERIOD_MS) * Math.PI * 2
    const tempC = MOCK_TEMP_CENTER + MOCK_TEMP_AMP * Math.sin(rad)
    syncedTelemetry.value = {
      ...syncedTelemetry.value,
      tempC: Math.round(tempC * 100) / 100,
    }
  }, MOCK_TEMP_INTERVAL_MS)
}

/** 清除模拟温度定时器。 */
function stopMockTemperature() {
  if (mockTempTimerId != null) {
    clearInterval(mockTempTimerId)
    mockTempTimerId = null
  }
}

/** 非强制模拟时停止正弦温度（真实 `/status` 到达后调用）。 */
function stopMockUnlessForced() {
  if (!FORCE_MOCK_TELEMETRY) stopMockTemperature()
}

/** 用户改开关后乐观等待 MCU 对齐：`{ 中文名: { expected, deadline } }` */
const pendingDeviceSwitch = ref({})
/** 用户改自动模式后的乐观 pending，结构同上 */
const pendingAutoMode = ref({})

/** 按设备名：下一轮 poll 不同步该设备的自动字段（防服务端旧值盖 UI） */
const muteAutoFromPollByLabel = ref({})
/** 本轮 fetch 结束后要把哪些 label 写入 `muteAutoFromPollByLabel` */
const armMuteAutoAfterNextFetchByLabel = ref({})

/** 取消「短延迟补拉」`/status` 的 `setTimeout`。 */
function clearStatusFollowUp() {
  if (followUpStatusTimer != null) {
    clearTimeout(followUpStatusTimer)
    followUpStatusTimer = null
  }
}

/** 若未禁用硬件且未暂停，则启动周期性 `fetchHardwareStatus`（`setInterval`）。 */
function ensureStatusPollingTimer() {
  if (HW_DISABLED) return
  if (suppressStatusPollTimer) return
  if (statusPollTimer == null) {
    statusPollTimer = window.setInterval(fetchHardwareStatus, STATUS_POLL_MS)
  }
}

function pauseHardwareStatusPolling() {
  suppressStatusPollTimer = true
  clearStatusFollowUp()
  if (statusPollTimer != null) {
    clearInterval(statusPollTimer)
    statusPollTimer = null
  }
}

function resumeHardwareStatusPolling() {
  suppressStatusPollTimer = false
  if (!isAppMounted) return
  if (HW_DISABLED) return
  fetchHardwareStatus()
  ensureStatusPollingTimer()
}

/**
 * 用户改自动模式后：下一轮 poll 前把某些 label 标为「静音」自动字段同步，防止服务端旧值覆盖 UI。
 */
function applyMuteArmAfterFetch() {
  const arm = { ...armMuteAutoAfterNextFetchByLabel.value }
  armMuteAutoAfterNextFetchByLabel.value = {}
  if (Object.keys(arm).length === 0) return
  const next = { ...muteAutoFromPollByLabel.value }
  for (const label of Object.keys(arm)) {
    if (arm[label]) next[label] = true
  }
  muteAutoFromPollByLabel.value = next
}

/** 从 `/status` 根 / sensors / telemetry / robot 解析连续下发的机器人位姿 */
function robotPoseFromStatus(data) {
  if (!data || typeof data !== 'object') return null
  const roots = [data, data.sensors, data.telemetry, data.robot].filter(
    (o) => o && typeof o === 'object'
  )
  for (const root of roots) {
    const x = numOrNull(root.robot_x ?? root.robotX ?? root.rx)
    const y = numOrNull(root.robot_y ?? root.robotY ?? root.ry)
    const z = numOrNull(root.robot_z ?? root.robotZ ?? root.rz)
    if (x === null || y === null || z === null) continue
    const yawRaw = root.robot_yaw ?? root.robotYaw ?? root.r_yaw ?? root.yaw
    const yaw = numOrNull(yawRaw)
    let pose = { x, y, z, ...(yaw !== null ? { yaw } : {}) }
    if (USE_MAP_TRANSFORM_JSON && HW_POSE_IS_RAW) {
      const centroid = getLayoutCentroid()
      if (centroid) pose = rawPoseToCanonical(pose, centroid)
    }
    return pose
  }
  return null
}

/** `/status` 里可能出现的温度字段名列表（按顺序尝试匹配） */
const TEMP_STATUS_KEYS = [
  'ds18_temp',
  'temp',
  'DS18_Temp',
  'ds18Temp',
  'ds18temp',
  'temperature',
  'temperature_c',
  'temp_c',
  'tempC',
  'ds18',
  'DS18',
  'ds18b20',
  'DS18B20',
]

/** 在对象上按 keys 顺序找第一个自有属性（`hasOwnProperty`）。 */
function pickFirstOwn(obj, keys) {
  if (!obj || typeof obj !== 'object') return undefined
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) return obj[k]
  }
  return undefined
}

/** 从 status 根 / sensors / telemetry 提取温度原始字段（多别名兼容）。 */
function tempRawFromStatus(data) {
  if (!data || typeof data !== 'object') return undefined
  let v = pickFirstOwn(data, TEMP_STATUS_KEYS)
  if (v !== undefined) return v
  const sensors = data.sensors
  if (sensors && typeof sensors === 'object') {
    v = pickFirstOwn(sensors, TEMP_STATUS_KEYS)
    if (v !== undefined) return v
  }
  const telem = data.telemetry
  if (telem && typeof telem === 'object') {
    v = pickFirstOwn(telem, TEMP_STATUS_KEYS)
    if (v !== undefined) return v
  }
  return undefined
}

/** 字符串温度可含单位，用正则抽出首个数字；否则 `Number`。 */
function tempToNumC(v) {
  if (v === null || v === undefined || v === '') return null
  if (typeof v === 'string') {
    const m = v.trim().match(/-?\d+(?:\.\d+)?/)
    if (!m) return null
    const n = Number(m[0])
    return Number.isFinite(n) ? n : null
  }
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

/**
 * 返回 `AbortSignal` 在 ms 后中止（优先 `AbortSignal.timeout`，否则 `AbortController` + `setTimeout`）。
 */
function abortSignalAfter(ms) {
  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
    return AbortSignal.timeout(ms)
  }
  const c = new AbortController()
  window.setTimeout(() => c.abort(), ms)
  return c.signal
}

/** MCU `fetch` 共用的超时信号（时长来自 `VITE_HW_FETCH_TIMEOUT_MS`）。 */
function mcuFetchSignal() {
  return abortSignalAfter(HW_FETCH_TIMEOUT_MS)
}

/**
 * GET `${MCU_BASE_URL}/status`：合并设备开关与遥测、处理 pending 乐观更新与自动模式静音逻辑；防重入 `statusFetchInFlight`。
 */
function fetchHardwareStatus() {
  if (HW_DISABLED) return Promise.resolve()
  if (statusFetchInFlight) return Promise.resolve()
  statusFetchInFlight = true
  return fetch(`${MCU_BASE_URL}/status`, { signal: mcuFetchSignal() })
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
    .then((data) => {
      stopMockUnlessForced()

      const hadPendingDevice = Object.keys(pendingDeviceSwitch.value).length > 0

      // 与上轮结果合并，避免硬件只返回部分字段时把 prop 缩成「只剩一个键」导致子组件误判
      const mergedDevices =
        syncedDeviceState.value && typeof syncedDeviceState.value === 'object'
          ? { ...syncedDeviceState.value }
          : {}
      let deviceTouched = false
      for (const [key, label] of Object.entries(STATUS_KEYS)) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          mergedDevices[label] = parseOn(data[key])
          deviceTouched = true
        }
      }

      const now = Date.now()
      const nextDevP = { ...pendingDeviceSwitch.value }
      for (const [hwKey, label] of Object.entries(STATUS_KEYS)) {
        const pend = nextDevP[label]
        if (!pend) continue
        const fromHw = Object.prototype.hasOwnProperty.call(data, hwKey)
          ? parseOn(data[hwKey])
          : undefined
        if (fromHw !== undefined && fromHw === pend.expected) {
          mergedDevices[label] = fromHw
          delete nextDevP[label]
        } else if (now >= pend.deadline) {
          delete nextDevP[label]
        } else {
          mergedDevices[label] = pend.expected
        }
      }
      pendingDeviceSwitch.value = nextDevP

      if (deviceTouched || hadPendingDevice) {
        syncedDeviceState.value = mergedDevices
      }

      const t = { ...syncedTelemetry.value }
      if (!FORCE_MOCK_TELEMETRY) {
        const tempRaw = tempRawFromStatus(data)
        if (tempRaw !== undefined) {
          t.tempC = tempToNumC(tempRaw)
        }
      }
      const spd = data.fan_speed ?? data.fanSpeed
      if (spd !== undefined) {
        const n = numOrNull(spd)
        t.fanSpeed = n !== null ? Math.max(0, Math.min(100, n)) : null
      }
      for (const [label, modeKey, legacyKey, prop] of AUTO_STATUS_ROWS) {
        if (muteAutoFromPollByLabel.value[label]) continue
        syncAutoModeFromStatus(data, modeKey, legacyKey, t, prop)
      }

      const nextAutoP = { ...pendingAutoMode.value }
      for (const [label, , , prop] of AUTO_STATUS_ROWS) {
        const pend = nextAutoP[label]
        if (!pend) continue
        const fromHw = t[prop]
        if (fromHw === pend.expected) {
          delete nextAutoP[label]
        } else if (now >= pend.deadline) {
          delete nextAutoP[label]
        } else {
          t[prop] = pend.expected
        }
      }
      pendingAutoMode.value = nextAutoP

      syncedTelemetry.value = t

      applyRobotPoseFromHardware(robotPoseFromStatus(data))

      applyMuteArmAfterFetch()
      ensureStatusPollingTimer()
    })
    .catch(() => {
      stopMockUnlessForced()
    })
    .finally(() => {
      statusFetchInFlight = false
    })
}

/** 控制成功后短延迟再拉一次状态，提高读到新值的概率。 */
function scheduleStatusFollowUp() {
  if (HW_DISABLED) return
  if (followUpStatusTimer != null) {
    clearTimeout(followUpStatusTimer)
    followUpStatusTimer = null
  }
  followUpStatusTimer = window.setTimeout(() => {
    followUpStatusTimer = null
    fetchHardwareStatus()
  }, STATUS_FOLLOWUP_MS)
}

/** 构造 `/control?device=&state=` 查询串（中文 label → MCU id 用 `DEVICE_MAP`）。 */
function mcuControlPath(deviceLabel, state) {
  const id = DEVICE_MAP[deviceLabel] || deviceLabel
  return `/control?device=${encodeURIComponent(id)}&state=${state}`
}

/**
 * 发 GET 控制请求；成功则 `fetchHardwareStatus` 并可选 `scheduleStatusFollowUp`。
 * @param {string} pathAndQuery 以 `/control?...` 开头
 * @param {object} [opts] `{ skipFollowUp: true }` 跳过补拉
 */
function mcuControlThenRefresh(pathAndQuery, okLog, warnLabel, opts) {
  if (HW_DISABLED) return
  const skipFollowUp = opts?.skipFollowUp === true
  fetch(`${MCU_BASE_URL}${pathAndQuery}`, { signal: mcuFetchSignal() })
    .then((res) => {
      if (res.ok) {
        if (okLog) console.log(okLog)
        fetchHardwareStatus()
        if (!skipFollowUp) scheduleStatusFollowUp()
      } else {
        console.warn(warnLabel, 'HTTP', res.status)
      }
    })
    .catch((err) => console.error(warnLabel, err))
}

/** 操作记录列表最多保留条数 */
const MAX_DEVICE_LOG = 80
/** 操作记录：每项 `{ id, text }` */
const deviceLogs = ref([])

/** 格式化为中文本地时间字符串，用于日志前缀。 */
function formatDeviceLogTime(d = new Date()) {
  const y = d.getFullYear()
  const mo = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const h = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  const s = String(d.getSeconds()).padStart(2, '0')
  return `${y}年${mo}月${day}日 ${h}:${mi}:${s}`
}

function buildSeededDeviceLogEntries() {
  const now = new Date()
  const y = now.getFullYear()
  const mo = now.getMonth()
  const d = now.getDate()
  const dayBeforeYesterday = new Date(y, mo, d - 2)
  const yesterday = new Date(y, mo, d - 1)

  const slot = (day, hour, minute, second, message) => ({
    t: new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute, second),
    message,
  })

  const slots = [
    slot(dayBeforeYesterday, 7, 25, 0, '风扇 开启'),
    slot(dayBeforeYesterday, 18, 20, 0, '风扇 关闭'),
    slot(dayBeforeYesterday, 19, 50, 0, '灯 开启'),
    slot(dayBeforeYesterday, 22, 15, 0, '灯 关闭'),
    slot(dayBeforeYesterday, 23, 5, 0, '风扇 开启'),
    slot(dayBeforeYesterday, 23, 48, 0, '风扇 关闭'),
    slot(dayBeforeYesterday, 23, 52, 0, '灯 开启'),
    slot(dayBeforeYesterday, 23, 58, 40, '灯 关闭'),
    slot(yesterday, 8, 30, 0, '风扇 开启'),
    slot(yesterday, 21, 10, 0, '风扇 关闭'),
    slot(yesterday, 21, 25, 0, '灯 开启'),
    slot(yesterday, 23, 55, 0, '灯 关闭'),
    slot(yesterday, 23, 56, 0, '风扇 开启'),
    slot(yesterday, 23, 59, 10, '风扇 关闭'),
  ]

  slots.sort((a, b) => a.t - b.t)
  return slots.map((s, i) => ({
    id: `seed-hist-${i}-${s.t.getTime()}`,
    text: `${formatDeviceLogTime(s.t)} ${s.message}`,
  })).reverse()
}

/** prepend 新日志并截断为最多 `MAX_DEVICE_LOG` 条。 */
function pushDeviceLog(message) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
  deviceLogs.value = [{ id, text: `${formatDeviceLogTime()} ${message}` }, ...deviceLogs.value].slice(
    0,
    MAX_DEVICE_LOG
  )
}

const MAX_LOGS_FOR_AI = 60
const analyzeLogsLoading = ref(false)

const DEEPSEEK_SYSTEM_PROMPT = `你是智能家居生活习惯助手。用户会提供按时间顺序的设备操作日志（中文，含灯、风扇、大门、自动/手动模式等）。
请根据日志简要分析并给出生活建议，例如：大致每天何时关灯、是否存在明显熬夜信号（如深夜仍频繁开灯或操作）、风扇是否使用偏多等。
要求：用简体中文分点作答，语气友好；若日志太少或看不出规律，明确说明数据不足，不要编造。`

function buildLogsPayloadForAi() {
  const hardwareAndUserOnly = deviceLogs.value.filter((e) => !e.text.includes('【AI】'))
  const chronological = [...hardwareAndUserOnly].reverse().slice(-MAX_LOGS_FOR_AI)
  return chronological.map((e) => e.text).join('\n')
}

async function analyzeLogsWithDeepSeek() {
  if (analyzeLogsLoading.value) return
  if (!DEEPSEEK_API_KEY) {
    pushDeviceLog('【AI】未配置 VITE_DEEPSEEK_API_KEY，请在 .env.local 中设置')
    return
  }
  const userContent = buildLogsPayloadForAi()
  if (!userContent.trim()) {
    pushDeviceLog('【AI】暂无操作记录可分析')
    return
  }
  pauseHardwareStatusPolling()
  analyzeLogsLoading.value = true
  pushDeviceLog('【AI】正在分析操作记录…')
  try {
    const res = await fetch(DEEPSEEK_CHAT_URL, {
      method: 'POST',
      signal: abortSignalAfter(DEEPSEEK_FETCH_TIMEOUT_MS),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: DEEPSEEK_SYSTEM_PROMPT },
          {
            role: 'user',
            content: `以下为最近最多 ${MAX_LOGS_FOR_AI} 条操作记录（时间从早到晚）：\n\n${userContent}`,
          },
        ],
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      const errMsg = data?.error?.message || res.statusText || String(res.status)
      pushDeviceLog(`【AI】请求失败：${errMsg}`)
      return
    }
    const text = data?.choices?.[0]?.message?.content?.trim()
    if (!text) {
      pushDeviceLog('【AI】未返回有效内容')
      return
    }
    pushDeviceLog(`【AI】分析结果：\n${text}`)
  } catch (e) {
    pushDeviceLog(`【AI】网络错误：${e instanceof Error ? e.message : String(e)}`)
  } finally {
    analyzeLogsLoading.value = false
    resumeHardwareStatusPolling()
  }
}

/**
 * 子组件 `@switch-toggle`：device 为中文名，isOn 为期望开关；写日志、自动模式联动、乐观更新、请求 MCU。
 * @param {{ device: string, isOn: boolean }} payload
 */
const handleSwitchToggle = ({ device, isOn }) => {
  if (!device) return
  pushDeviceLog(`${device} ${isOn ? '开启' : '关闭'}`)
  const row = AUTO_STATUS_ROWS.find(([label]) => label === device)
  if (row) {
    const prop = row[3]
    if (syncedTelemetry.value[prop]) {
      const deadline = Date.now() + PENDING_GUARD_MS
      pendingAutoMode.value = { ...pendingAutoMode.value, [device]: { expected: false, deadline } }
      syncedTelemetry.value = { ...syncedTelemetry.value, [prop]: false }
      armMuteAutoAfterNextFetchByLabel.value = {
        ...armMuteAutoAfterNextFetchByLabel.value,
        [device]: true,
      }
    }
  }

  const deadline = Date.now() + PENDING_GUARD_MS
  pendingDeviceSwitch.value = { ...pendingDeviceSwitch.value, [device]: { expected: isOn, deadline } }
  const prev =
    syncedDeviceState.value && typeof syncedDeviceState.value === 'object'
      ? { ...syncedDeviceState.value }
      : {}
  syncedDeviceState.value = { ...prev, [device]: isOn }

  const state = isOn ? 'on' : 'off'
  mcuControlThenRefresh(mcuControlPath(device, state), `${device} ${state} 成功`, `${device} ${state} 请求失败:`)
}

/**
 * 子组件 `@auto-toggle`：isAutoOn 是否自动；更新遥测 fanAuto/gateAuto/lightAuto，必要时 arm 静音；MCU `state=auto|manual`。
 */
const handleAutoToggle = ({ device, isAutoOn }) => {
  if (!device) return
  pushDeviceLog(`${device} ${isAutoOn ? '自动模式 开启' : '自动模式 关闭（手动）'}`)
  const row = AUTO_STATUS_ROWS.find(([label]) => label === device)
  if (!row) return
  const prop = row[3]
  const deadline = Date.now() + PENDING_GUARD_MS
  pendingAutoMode.value = { ...pendingAutoMode.value, [device]: { expected: isAutoOn, deadline } }
  syncedTelemetry.value = { ...syncedTelemetry.value, [prop]: isAutoOn }

  if (!isAutoOn) {
    armMuteAutoAfterNextFetchByLabel.value = {
      ...armMuteAutoAfterNextFetchByLabel.value,
      [device]: true,
    }
  } else {
    const m = { ...muteAutoFromPollByLabel.value }
    delete m[device]
    muteAutoFromPollByLabel.value = m
    const a = { ...armMuteAutoAfterNextFetchByLabel.value }
    delete a[device]
    armMuteAutoAfterNextFetchByLabel.value = a
  }

  const state = isAutoOn ? 'auto' : 'manual'
  mcuControlThenRefresh(mcuControlPath(device, state), `${device} state=${state}`, `${device} state=${state} 请求失败:`, {
    skipFollowUp: !isAutoOn,
  })
}

onMounted(async () => {
  isAppMounted = true
  if (SEED_DEMO_DEVICE_LOGS) {
    deviceLogs.value = [...buildSeededDeviceLogEntries(), ...deviceLogs.value].slice(0, MAX_DEVICE_LOG)
  }
  if (USE_MAP_TRANSFORM_JSON && HW_POSE_IS_RAW) {
    try {
      await loadMapTransform()
    } catch (err) {
      console.warn('[App] map-transform.json 加载失败，无法将原始位姿转为 canonical:', err)
    }
  }
  if (FORCE_MOCK_TELEMETRY) {
    startMockTemperature()
  }
  if (!HW_DISABLED) {
    fetchHardwareStatus()
    ensureStatusPollingTimer()
  }
})

onUnmounted(() => {
  isAppMounted = false
  suppressStatusPollTimer = false
  stopMockTemperature()
  stopMockRobotNav()
  if (statusPollTimer != null) {
    clearInterval(statusPollTimer)
    statusPollTimer = null
  }
  if (followUpStatusTimer != null) {
    clearTimeout(followUpStatusTimer)
    followUpStatusTimer = null
  }
})

</script>

<template>
  <!-- 根节点：relative + 全屏高，子元素可用 absolute/fixed 叠层；Tailwind: w-full h-screen -->
  <div class="relative w-full h-screen">
    <!--
      PCDMapViewer：自定义组件；kebab-case 与文件名映射；
      pcd-url：等价 HTML 属性 pcdUrl（Props 在子组件中 camelCase）；
      以 : 开头的是 v-bind 动态绑定（值为 JS 表达式）；
      @switch-toggle 为 v-on: 缩写，监听子组件 emit 的 switch-toggle 事件
    -->
    <PCDMapViewer
      pcd-url="/map.pcd"
      :spawn-canonical="spawnCanonical"
      :only-walking-plane-number="2"
      :point-size="0.02"
      :max-display-points="0"
      :move-speed="0.1"
      :camera-height-above-floor="1.2"
      :collision-radius="0.3"
      :interaction-distance-threshold="1.0"
      :synced-device-state="syncedDeviceState ?? undefined"
      :telemetry="syncedTelemetry"
      :robot-pose="syncedRobotPose"
      :robot-enabled="SHOW_ROBOT_WAYPOINT_PANEL"
      :robot-model-url="ROBOT_MODEL_URL"
      :robot-waypoints="ROBOT_WAYPOINTS"
      :interaction-zones="interactionZones"
      @switch-toggle="handleSwitchToggle"
      @auto-toggle="handleAutoToggle"
      @map-ready="handleMapReady"
      @work-area-saved="handleWorkAreaSaved"
    />

    <!-- 机器人路点控制（左下角，由 VITE_ROBOT_WAYPOINT_PANEL 控制） -->
    <div
      v-if="SHOW_ROBOT_WAYPOINT_PANEL"
      class="pointer-events-none fixed bottom-3 left-3 z-[60] flex max-w-[min(14rem,calc(100vw-1.5rem))] flex-col items-start gap-1"
    >
      <div
        class="pointer-events-auto w-full overflow-hidden rounded-lg border border-cyan-600/50 bg-slate-900/92 shadow-lg shadow-cyan-900/20 backdrop-blur-sm"
      >
        <div
          class="border-b border-cyan-700/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400/90"
        >
          工作终点
        </div>
        <div class="flex flex-col gap-1 p-2">
          <button
            v-for="wp in ROBOT_WAYPOINTS"
            :key="wp.id"
            type="button"
            class="rounded px-3 py-1.5 text-left text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-45"
            :class="
              activeRobotWaypointId === wp.id
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-700/90 text-slate-200 hover:bg-slate-600'
            "
            :disabled="!robotMapReady"
            @click="moveRobotTo(wp)"
          >
            {{ wp.label }}
          </button>
          <p v-if="!robotMapReady" class="px-1 pt-0.5 text-[10px] text-slate-500">地图加载中…</p>
        </div>
      </div>
    </div>

    <!-- 操作记录面板：pointer-events-none 让空白处穿透到 3D，子元素 pointer-events-auto 恢复可点 -->
    <div
      class="pointer-events-none fixed bottom-3 right-3 z-[60] flex max-w-[min(22rem,calc(100vw-1.5rem))] flex-col items-end gap-1"
    >
      <div
        class="pointer-events-auto max-h-[min(40vh,20rem)] w-full overflow-hidden rounded-lg border border-slate-600/80 bg-slate-900/92 shadow-lg shadow-black/40 backdrop-blur-sm"
      >
        <div
          class="flex items-center justify-between gap-2 border-b border-slate-600/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400"
        >
          <span>操作记录</span>
          <button
            type="button"
            class="pointer-events-auto rounded border border-slate-500/80 bg-slate-800/90 px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-slate-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="analyzeLogsLoading"
            @click="analyzeLogsWithDeepSeek"
          >
            {{ analyzeLogsLoading ? '分析中…' : 'AI 分析' }}
          </button>
        </div>
        <ul
          class="max-h-[min(36vh,18rem)] overflow-y-auto px-2 py-2 text-left text-[11px] leading-relaxed text-slate-200"
        >
          <!-- v-if / v-else：互斥条件渲染；v-for：遍历数组，:key 帮助虚拟 DOM 复用节点 -->
          <li v-if="deviceLogs.length === 0" class="py-2 text-slate-500">暂无操作</li>
          <template v-else>
            <li
              v-for="entry in deviceLogs"
              :key="entry.id"
              class="whitespace-pre-wrap break-words border-b border-slate-700/50 py-1.5 pl-1 last:border-b-0"
            >
              {{ entry.text }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
