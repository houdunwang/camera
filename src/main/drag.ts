import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
ipcMain.handle('drag', (event: IpcMainInvokeEvent, opt: { x: number; y: number }) => {
  const win = BrowserWindow.fromWebContents(event.sender)!

  const [x, y] = win.getPosition()
  win.setPosition(x + opt.x, y + opt.y)
})
