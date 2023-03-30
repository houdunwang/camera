import { electronAPI } from '@electron-toolkit/preload'
import { ProgressInfo } from 'builder-util-runtime/out/ProgressCallbackTransform'
import { contextBridge, ipcRenderer } from 'electron'
// Custom APIs for renderer
const api = {
  //退出应用
  quit: (): void => {
    ipcRenderer.send('quit')
  },
  //下载进度条
  downloadProgress: (callback: (progress: ProgressInfo) => void): void => {
    ipcRenderer.on('downloadProgress', (_event, progress) => {
      callback(progress)
    })
  },
  setWindowSize: (opt: { aspectRatio?: number; width?: number; height?: number }): void => {
    ipcRenderer.send('setWindowSize', opt)
  },
  contextMenu: (): void => {
    ipcRenderer.send('contextMenu')
  },
  //版本号事件
  version: (callback: (version: string) => void): void => {
    ipcRenderer.on('version', (_event, version) => callback(version))
  },
  // 获取窗口宽高
  getWindowSize: (): { aspectRatio: number; width: number; height: number } => {
    return ipcRenderer.sendSync('getWindowSize')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window['electron'] = electronAPI
  window['api'] = api
}
