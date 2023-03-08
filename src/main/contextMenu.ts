import { ipcMain, Menu, MenuItemConstructorOptions, shell } from 'electron'

//苹果系统右键菜单
ipcMain.on('contextMenu', () => {
  const template = [
    {
      label: '退出程序',
      role: 'quit'
    },
    {
      label: '访问官网',
      click: () => shell.openExternal('https://app.houdunren.com')
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
