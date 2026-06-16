# SLAM AR 场景交互应用

浏览器里跑的点云场景：把离线导出的 PCD（例如室内 SLAM / 多传感器里程计重建结果）叠成可漫游的三维环境，再在地图里接灯、风扇、门等设备的 HTTP 接口，相当于给物理空间做一个轻量数字孪生前端。技术上是 Vue 3 + Vite 7 + Three.js，样式用 Tailwind CSS v4。

**可云端访问：** [jyzy.online](https://jyzy.online) / [www.jyzy.online](https://www.jyzy.online)（如不能访问代表备案未下来）

## 注意

- 本地图点云规模较大时，网站会从云端拉取地图，渲染在本机完成（建议用电脑、耐心等待加载）。
- 云端部署未携带 AI API；若需「AI 分析」，在本地 `.env.local` 中配置 `VITE_DEEPSEEK_API_KEY`（或自行部署带密钥的后端 / 反代）。

## 依赖

本机需要 **Node.js**（建议 20 LTS 或以上），包管理用 **npm**。

在项目根目录执行 **`npm install`** 时，会根据 `package.json` / `package-lock.json` 安装全部依赖，其中包括：

- **前端与构建**：Vue、Vite、Three.js、Tailwind 等（在 `devDependencies`）；
- **桌面壳与打包**：**Electron**、**electron-builder**（在 `devDependencies`，会下载对应系统的 Electron 二进制）；
- **Electron 主进程运行时**：`express`、`http-proxy-middleware`（在 `dependencies`，会打进安装包）。

**说明**：`npm run build` 只执行 Vite 生产构建，**不会**替你执行 `npm install`；换机器或删过 `node_modules` 后需先 `npm install`。

## 技术栈

| 类别 | 选用 |
|------|------|
| 框架 | Vue 3（`<script setup>`） |
| 构建 | Vite 7 |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`） |
| 三维 | Three.js（`PCDLoader`、`Points`、`PointerLockControls` 等） |
| Windows 桌面（可选） | Electron + electron-builder（NSIS 安装包） |

## 快速开始

```bash
npm install
npm run dev
```

开发服务器默认 `http://localhost:5173`。

### 地图文件

点云放在 `public/` 下，默认请求 `/map.pcd`。换路径或换交互区时，改 `src/App.vue` 里传给 `PCDMapViewer` 的 `pcd-url` 和 `interaction-zones`（球心、半径、中文标签）。

### 环境变量

在项目根目录建 `.env.local`，按需要写入下表变量。改完要重启 `npm run dev`，Vite 只在启动时注入 `VITE_*`。

打 **Web 的 `npm run build`** 或 **桌面的 `npm run electron:build`** 时，`VITE_*` 会在**该次构建**写入前端包；若要把 DeepSeek 等密钥打进桌面安装包，请在执行 `electron:build` **之前**配好 `.env.local`（密钥仍会出现在前端资源中，仅适合自用或可信分发）。

| 变量 | 说明 |
|------|------|
| `VITE_MCU_API` | MCU 的 HTTP 根地址，不要末尾 `/`。不填时：开发环境走同源前缀 `/hw`（由 Vite 代理到设备）；纯 Web 生产构建默认 `http://192.168.4.1`。 |
| `VITE_STATUS_POLL_MS` | `GET /status` 轮询间隔（毫秒），默认 300。 |
| `VITE_HW_FETCH_TIMEOUT_MS` | 硬件请求超时（毫秒），默认 5000。 |
| `VITE_HW_DISABLED` | 设为 `1` 时完全不访问 MCU，只调界面，方便没板子时开发。 |
| `VITE_MOCK_TELEMETRY` | 设为 `1` 时用正弦模拟温度（约 25～30℃、周期约 12s），忽略 `/status` 里的温度字段，用来调俯视图色带。 |
| `VITE_SEED_DEMO_DEVICE_LOGS` | 设为 `0` 时不注入演示用的「前天 / 昨天」操作记录。 |
| `VITE_DEEPSEEK_API_KEY` | DeepSeek API Key；不配的话点「AI 分析」会提示无法调用。 |
| `VITE_DEEPSEEK_URL` | 可选，覆盖 Chat Completions 完整 URL。生产环境若浏览器直连官方域名常被 CORS 拦住，一般要在自己域名下做反代。 |
| `VITE_DEEPSEEK_FETCH_TIMEOUT_MS` | 调用 DeepSeek 的超时（毫秒），默认 120000，最小 15000。 |

### 开发代理

`vite.config.js` 里配了两条代理，避免浏览器跨域：

- `/hw` → `VITE_MCU_API`（默认 `http://192.168.4.1`），路径里的 `/hw` 会剥掉，所以页面请求 `/hw/status` 等于设备上的 `/status`。
- `/deepseek-api` → `https://api.deepseek.com`，开发时走同源再转发。

线上部署时，若页面与 MCU 或 DeepSeek 不同源，要在网关做 HTTPS 反代，或在设备 / API 侧返回可用的 CORS 头。

### 硬件自测页

`npm run dev` 后打开 `http://localhost:5173/mcu-test.html`，可快速试 `GET /control` 和代理是否通。

### 构建（纯网页）

```bash
npm run build   # 输出到 dist/
npm run preview # 本地预览生产包
```

### Windows 桌面版（Electron）

**流程（按顺序）：**

1. `npm install`（首次或依赖变更后；Electron 下载失败见下文镜像）。
2. `npm run electron:dev` — 同时起 Vite 与桌面窗口，用于调试（等价浏览器打开 `localhost:5173`）。
3. `npm run electron:build` — 先用 `VITE_USE_LOCAL_PROXY=1` 执行 `vite build` 生成 `dist/`，再执行 `electron-builder --win`，产物在 **`release/`**。

**脚本含义：**

```bash
npm run electron:dev    # 开发：Vite + Electron 窗口
npm run electron:build  # 发布：dist + Windows 安装包（x64 NSIS）
```

安装包为 NSIS，安装时可改目录。打包后的 exe 启动时，主进程在 `127.0.0.1` 上起本地 HTTP，并转发 **`/hw`（MCU）**、**`/deepseek-api`（DeepSeek）**



## 功能概要

**场景与第一人称**  
PCD 按地板 / 障碍物着色，显示模式可在界面里切（全部、仅地板、仅障碍物等，以实际菜单为准）。地面用 RANSAC 做多平面检测，可切换不同行走面并把场景拉平。点击画布进入指针锁定，WASD 或方向键移动，空格跳跃；相机高度跟脚下局部地面走。障碍物点云会采样，再和相机球体做简单碰撞。

**俯视图**（`PCDMapViewer`）  
可切到自上而下视角；障碍物支持高度裁剪，便于弱化天花板、留住墙体轮廓。交互区在俯视平面上用圆形渐变片标范围。叠加层包括温度（约 25～30℃ 的色带，来自遥测或上面的模拟温度）和灯光状态；界面上会显示当前摄氏度。

**MCU**（`App.vue` 与组件事件）  
控制：`GET /control?device=fan|gate|light&state=on|off`；自动/手动：`state=auto|manual`。定时 `GET /status` 拉 JSON，同步继电器、可选的 `fan_mode` / `gate_mode` / `light_mode`（以及旧字段）、温度（`ds18_temp`、`temp` 等）、`fan_speed` 等。下发控制成功后会立刻再拉一次状态，并在半轮询周期内视情况补拉。子组件通过 `synced-device-state`、`telemetry` 收状态，通过 `switch-toggle`、`auto-toggle` 往上报操作。固件侧需实现上述两个 GET，返回字段与 `App.vue` 里的解析保持一致即可。

**操作日志与 DeepSeek**  
右下角按时间记本页上的开关和模式切换，条数有上限，旧的会丢。需要时在日志里点分析：把最近最多 60 条（不含带 `【AI】` 前缀的行）拼成文本发给 DeepSeek Chat（`deepseek-chat`），系统提示里要求简体中文分点、结合用电与作息给建议；请求期间会暂停 `/status` 轮询，免得和 AI 抢连接。结果同样写在日志里，前缀 `【AI】`。

## 项目结构

仓库里和开发直接相关的目录、文件分工如下（`node_modules` 为 `npm install` 生成，此处不列）。

| 路径 | 作用 |
|------|------|
| `index.html` | Vite 的页面壳：`<div id="app">` 作为挂载点，通过 `<script type="module" src="/src/main.js">` 拉起的单页应用。 |
| `vite.config.js` | Vite 配置：Vue 与 Tailwind 插件、开发服务器端口、 `/hw` 与 `/deepseek-api` 代理规则。 |
| `package.json` | 依赖声明、`build`（electron-builder）与脚本：`dev`、`build`、`preview`、`electron:dev`、`electron:build`。 |
| `package-lock.json` | 锁定依赖版本，保证装包结果一致。 |
| `.gitignore` | 忽略 `node_modules`、`dist`、`release`、`.env.local` 等，避免误提交。 |
| `electron/main.cjs` | Electron 主进程：开发时加载 Vite 地址；安装版启动本地 HTTP + 代理 `/hw` 与 `/deepseek-api` 后加载 `dist`。 |
| `public/` | **静态资源目录**：构建时按原路径拷到站点根。适合放体积大的 PCD、自测页等；页面里用绝对路径访问，如 `/map.pcd`。 |
| `public/map.pcd` | 默认点云地图（需自备；文件名与 `App.vue` 里默认 URL 一致即可）。 |
| `public/mcu-test.html` | 独立小页：方便在浏览器里直接打 `GET /control`、验证代理与设备是否通。 |
| `dist/` | 执行 `npm run build` 或 `electron:build` 前半段后的前端产物；可部署静态站；通常不提交。 |
| `release/` | 执行 `electron:build` 后的 Windows 安装包与 `win-unpacked`；体积大，通常不提交。 |
| `src/` | **前端源码根目录**：Vue 组件、工具函数、样式入口。 |
| `src/main.js` | 应用入口：`createApp(App).mount('#app')`，并 `import './style.css'`。 |
| `src/App.vue` | **根组件**：MCU 基址与轮询、`/control` / `/status` 请求、遥测与设备状态同步、右下角操作日志、DeepSeek 分析按钮与请求、交互区与 PCD 路径等配置，并把 `PCDMapViewer` 组合进来。 |
| `src/components/` | 可拆分的 Vue 组件；复杂 UI 从根组件里拆出来放这里。 |
| `src/components/PCDMapViewer.vue` | **三维与地图 UI**：Three.js 场景与 PCD 加载、第一人称 / 俯视图切换、行走与碰撞相关交互、交互区球体与俯视渐变、设备开关卡片、温度 / 灯光叠加与读数展示等。 |
| `src/utils/` | 与具体 DOM/Three 弱耦合、可单测的纯逻辑。 |
| `src/utils/floorDetection.js` | 地面相关：多平面 RANSAC、点云按地板 / 障碍物等分割，供 `PCDMapViewer` 使用。 |
| `src/style.css` | 全局样式：Tailwind 入口（`@import "tailwindcss"`）、暗色主题下的 `body` / 字体等基础规则。 |

若使用 `.env.local` 配置 `VITE_*`，文件放在**仓库根目录**（与 `vite.config.js` 同级），不要放进 `src/`。


