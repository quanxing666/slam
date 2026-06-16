const { app, BrowserWindow } = require('electron')
const path = require('path')
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const isDev = !app.isPackaged
/** 打包后代理 /hw 时的设备根地址；MCU_API 优先，否则 MCU_IP_PROFILE（1→10.33.24.73:8080，0→192.168.4.1，默认 1） */
const mcuProfileOn = process.env.MCU_IP_PROFILE !== '0'
const MCU_TARGET = (
  process.env.MCU_API ||
  (mcuProfileOn ? 'http://10.33.24.73:8080' : 'http://192.168.4.1')
).replace(/\/$/, '')

let mainWindow = null
let localServer = null

function startLocalServer(distPath) {
  const exp = express()
  exp.use(
    '/hw',
    createProxyMiddleware({
      target: MCU_TARGET,
      changeOrigin: true,
      pathRewrite: { '^/hw': '' },
    }),
  )
  exp.use(
    '/deepseek-api',
    createProxyMiddleware({
      target: 'https://api.deepseek.com',
      changeOrigin: true,
      pathRewrite: { '^/deepseek-api': '' },
      secure: true,
    }),
  )
  exp.use(express.static(distPath))
  exp.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })

  return new Promise((resolve, reject) => {
    const s = exp.listen(0, '127.0.0.1', (err) => {
      if (err) return reject(err)
      resolve(s.address().port)
    })
    localServer = s
  })
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })
  mainWindow.once('ready-to-show', () => mainWindow.show())

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  } else {
    const distPath = path.join(__dirname, '..', 'dist')
    startLocalServer(distPath)
      .then((port) => {
        mainWindow.loadURL(`http://127.0.0.1:${port}/`)
      })
      .catch((e) => {
        console.error(e)
        app.quit()
      })
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (localServer) {
    localServer.close()
    localServer = null
  }
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
