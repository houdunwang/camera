import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ref } from 'vue'

export default () => {
  const { config } = useConfigStore()
  const isFullscreen = ref(false)

  const toggleFullscreen = () => {
    config.rounded = false
    // isFullscreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
    isFullscreen.value = !isFullscreen.value
    window.api.toggleRound({ aspectRatio: 0 })
    window.api.toggleFullscreen()
  }

  //打开新摄像头
  const openNewCamera = () => {
    window.api.openNewCamera()
  }
  return { toggleFullscreen, isFullscreen, openNewCamera }
}
