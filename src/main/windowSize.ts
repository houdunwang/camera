import { BrowserWindow, ipcMain } from 'electron'
//获取窗口
const getWin = (event): BrowserWindow => BrowserWindow.fromWebContents(event.sender)!

ipcMain.on(
  'setWindowSize',
  (
    event,
    { aspectRatio, height, width }: { aspectRatio?: number; width?: number; height?: number }
  ) => {
    const win = getWin(event)
    if (typeof aspectRatio !== 'undefined') {
      win.setAspectRatio(aspectRatio)
    }
    if (typeof height !== 'undefined' && typeof width !== 'undefined') {
      win.setContentSize(width, height)
    }
  }
)
ipcMain.on('getWindowSize', (event) => {
  const win = getWin(event)
  const { width, height } = win.getBounds()
  event.returnValue = { aspectRatio: width / height, width, height }
})
