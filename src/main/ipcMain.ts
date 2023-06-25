import axios from 'axios'
import { BrowserWindow, app, ipcMain } from 'electron'

//退出应用
ipcMain.on('quit', (event: Electron.IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  if (BrowserWindow.getAllWindows().length == 0) app.quit()
  else win?.close()
})

ipcMain.handle('axios', async () => {
  axios.defaults.withCredentials = false

  const http = axios.create({
    baseURL: 'http://houdunren.test/api',
    timeout: 10000,
    withCredentials: false
  })
  return await http
    .request({
      url: `softToken/camera`,
      method: 'POST',
      data: {
        secret: '15047f4e116484ff6e84a6e47a4874b1'
      }
    })
    .then((r) => r)
})
