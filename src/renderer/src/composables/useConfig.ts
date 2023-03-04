import { ref } from 'vue'

type ConfigType = {
  deviceId: string
  borderColor: string
}

const config = ref<ConfigType>({
  deviceId: '',
  borderColor: ''
})

export default () => {
  const getConfig = () => {
    const cache = localStorage.getItem('config')
    if (cache) config.value = JSON.parse(cache)
    return config
  }
  const updateConfig = () => {
    localStorage.setItem('config', JSON.stringify(config.value))
  }

  return { config, getConfig, updateConfig }
}
