declare interface Window {
  electron: ElectronAPI
  api: {
    version(arg0: (_version: string) => void): void;
    quit: () => void,
    downloadProgress: (callback: (progress: ProgressInfo) => void) => void,
    setWindowSize: (opt: { aspectRatio?: number; width?: number; height?: number }) => void,
    contextMenu: () => void,
    getWindowSize: () => { aspectRatio: number; width: number; height: number }
  }
}
