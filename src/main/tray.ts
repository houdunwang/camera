import { Menu, shell, Tray } from 'electron'
import path from 'path'
const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出程序', role: 'quit' },
    { type: 'separator' },
    { label: '问题反馈', click: () => shell.openExternal('https://www.houdunren.com') }
  ])
  tray.setToolTip('向军大叔摄像头')
  tray.setContextMenu(contextMenu)
}

export { createTray }
