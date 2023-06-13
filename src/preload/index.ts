import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
// Custom APIs for renderer
const api = {
  //退出应用
  quit: () => ipcRenderer.send('quit'),
  //下载进度条
  downloadProgress: (callback: (progress: any) => {}) => {
    ipcRenderer.on('downloadProgress', (_event, progress) => {
      callback(progress)
    })
  },
  toggleRound: (opt: { aspectRatio: number; width: number; height: number }) => {
    ipcRenderer.send('toggleRound', opt)
  },
  contextMenu: () => {
    ipcRenderer.send('contextMenu')
  },
  //版本号事件
  version: (callback: (version: string) => void) => {
    ipcRenderer.on('version', (_event: IpcRendererEvent, version) => callback(version))
  },
  //切换全屏
  toggleFullscreen: () => {
    ipcRenderer.send('toggleFullscreen')
  },
  //打开新摄像头
  openNewCamera: () => {
    ipcRenderer.send('openNewWindow')
  },
  axios: () => {
    return ipcRenderer.invoke('axios')
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
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
