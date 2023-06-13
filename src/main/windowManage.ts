import { BrowserWindow, ipcMain } from 'electron'
//切换圆角
ipcMain.on(
  'toggleRound',
  (event: Electron.IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
    const win = BrowserWindow.fromWebContents(event.sender)!
    win.setAspectRatio(opt.aspectRatio)
    const { height } = win.getBounds()
    if (opt.aspectRatio == 1) {
      win.setBounds({ width: height, height })
    } else {
      win.setBounds({ width: Math.floor(height * 1.7), height })
    }
  }
)

//全屏切换
ipcMain.on('toggleFullscreen', (event: Electron.IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  win.setFullScreen(!win.isFullScreen())
  win.setAspectRatio(16 / 9)
})
