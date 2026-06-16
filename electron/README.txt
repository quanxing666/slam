本目录：Electron 桌面端主进程代码。
main.cjs：开发时打开 Vite 开发服务器地址；安装包运行时在本地起 HTTP 并代理 /hw（MCU）、/deepseek-api（DeepSeek），再加载打包后的 dist。
