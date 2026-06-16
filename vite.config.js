import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolveMcuDirectUrl } from './src/config/mcu.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const mcuTarget = env.VITE_MCU_API?.replace(/\/$/, '') || resolveMcuDirectUrl(env)

  return {
    plugins: [vue(), tailwindcss()],
    server: {
      port: 5173,
      // 开发时页面在 localhost，直连局域网 MCU 会触发跨域；通过同源路径转发避免 CORS
      proxy: {
        // 浏览器请求 /hw/status → 转发到设备 /status（MCU 无 /hw 前缀）
        '/hw': {
          target: mcuTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/hw/, ''),
        },
        // 开发环境：同源转发 DeepSeek，避免浏览器直连 api.deepseek.com 的 CORS
        '/deepseek-api': {
          target: 'https://api.deepseek.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/deepseek-api/, ''),
        },
      },
    },
  }
})
