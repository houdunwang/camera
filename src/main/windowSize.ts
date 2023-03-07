import { BrowserWindow, ipcMain } from 'electron'
//获取窗口
const getWin = (event: Electron.IpcMainEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}
ipcMain.on(
  'setWindowSize',
  (event: Electron.IpcMainEvent, opt: { aspectRatio: number; width?: number; height?: number }) => {
    console.log(opt)
    const win = getWin(event)
    win.setAspectRatio(opt.aspectRatio)

    if (opt.width && opt.height) {
      win.setBounds({ width: opt.width, height: opt.height })
    }
  }
)
