import { app, ipcMain } from 'electron'

ipcMain.on('quit', () => {
  app.quit()
})
