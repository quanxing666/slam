/**
 * 导出简易扫地机器人 GLB：矮白色圆柱 + +Z 方向小凸起。
 * 用法: node scripts/export-robot-glb.mjs [outputPath]
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

/** Node 无浏览器 FileReader，GLTFExporter 写 GLB 时需要 */
if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class FileReader {
    result = null
    onloadend = null
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((buf) => {
        this.result = buf
        this.onloadend?.()
      })
    }
  }
}

const THREE = await import('three')
const { GLTFExporter } = await import('three/addons/exporters/GLTFExporter.js')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outPath = path.resolve(rootDir, process.argv[2] || 'public/robot.glb')

const BODY_RADIUS = 0.18
const BODY_HEIGHT = 0.08

const robot = new THREE.Group()
robot.name = 'robot'

const whiteMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.05,
  roughness: 0.55,
})

const body = new THREE.Mesh(
  new THREE.CylinderGeometry(BODY_RADIUS, BODY_RADIUS, BODY_HEIGHT, 32),
  whiteMat
)
body.name = 'body'
body.position.y = BODY_HEIGHT / 2
robot.add(body)

const noseMat = new THREE.MeshStandardMaterial({
  color: 0xd1d5db,
  metalness: 0.05,
  roughness: 0.5,
})
const nose = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.03, 0.04), noseMat)
nose.name = 'nose'
nose.position.set(0, BODY_HEIGHT * 0.72, BODY_RADIUS + 0.02)
robot.add(nose)

const scene = new THREE.Scene()
scene.add(robot)

const exporter = new GLTFExporter()
const buffer = await exporter.parseAsync(scene, { binary: true })

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, Buffer.from(buffer))

const kb = (buffer.byteLength / 1024).toFixed(1)
console.log(`已导出 robot.glb: ${outPath} (${kb} KB)`)
console.log(`  圆柱: 半径 ${BODY_RADIUS}m, 高 ${BODY_HEIGHT}m, 车头 +Z`)
