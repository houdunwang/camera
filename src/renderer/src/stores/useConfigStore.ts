import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'counter',
  () => {
    const config = ref({
      borderColor: '#8e44ad',
      borderWidth: '0px',
      deviceId: '',
      page: 'camera',
      rounded: false
    })

    const updateConfig = () => {}

    return { config, updateConfig }
  },
  { persist: true }
)
