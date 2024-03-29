import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import { join } from 'path'
import icon from '../../resources/icon.png?asset'
// import autoUpdater from './autoUpdater'
import './ipcMain'
import './menu'
import './windowManage'
import './contextMenu'
import { createTray } from './tray'
function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 720,
    height: 405,
    minHeight: 300,
    minWidth: 300,
    alwaysOnTop: true,
    show: false,
    autoHideMenuBar: true,
    skipTaskbar: true,
    frame: false,
    hasShadow: false,
    transparent: true,
    // roundedCorners: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  if (is.dev) mainWindow.webContents.openDevTools()
  mainWindow.setAspectRatio(16 / 9)

  // mainWindow.webContents.openDevTools()
  //缩放比例
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  //渲染进程中请求创建一个新窗口之前被调用
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    //取消新窗口创建
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // autoUpdater(mainWindow)
  setTimeout(() => {
    // mainWindow.setFullScreen(true)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  //隐藏苹果dock图标
  if (process.platform == 'darwin') app.dock.hide()
  //托盘
  createTray()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  app.quit()
  // }
})

ipcMain.on('openNewWindow', () => {
  createWindow()
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
