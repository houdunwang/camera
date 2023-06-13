import { app, BrowserWindow, ipcMain, Menu, MenuItemConstructorOptions, shell } from 'electron'

//右键菜单
ipcMain.on('contextMenu', (event: Electron.IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender) as BrowserWindow
  const template = [
    {
      label: '关闭摄像头',
      click: () => {
        if (BrowserWindow.getAllWindows().length == 1) {
          app.quit()
        } else {
          win.close()
        }
      }
    },
    {
      label: '访问网站',
      click: () => shell.openExternal('https://www.houdunren.com')
    },
    {
      label: '退出',
      role: 'quit'
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
