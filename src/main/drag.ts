import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
ipcMain.handle(
  'drag',
  (event: IpcMainInvokeEvent, opt: { x: number; y: number; width: number; height: number }) => {
    const win = BrowserWindow.fromWebContents(event.sender)!
    const { x, y } = win.getBounds()
    win.setBounds({ x: x + opt.x, y: y + opt.y, width: opt.width, height: opt.height })
  }
)
