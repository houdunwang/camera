import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'counter',
  () => {
    const config = ref({
      borderColor: '#8e44ad',
      borderWidth: '0px',
      deviceId: '',
      page: 'setting',
      rounded: false,
      //视频比例
      aspectRatio: 16 / 9,
      videoElement: null as null | HTMLVideoElement,
      flip: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  { persist: true }
)
