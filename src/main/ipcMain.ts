import { app, ipcMain } from 'electron'

//退出应用
ipcMain.on('quit', () => {
  app.quit()
})
