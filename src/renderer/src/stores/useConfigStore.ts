import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'counter',
  () => {
    const config = ref({
      borderColor: '#8e44ad',
      borderWidth: 0,
      deviceId: '',
      page: 'setting',
      videoElement: null as null | HTMLVideoElement,
      flip: false,
      settingNormalSize: { width: 500, height: 350 },
      cameraSize: { aspectRatio: 16 / 9, width: 500, height: 350, rounded: false }
    })

    const updateConfig = (): void => {}

    return { config, updateConfig }
  },
  { persist: true }
)
