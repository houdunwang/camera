import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ref } from 'vue'
import packageJson from '../../../../package.json'

export default () => {
  const { config } = useConfigStore()
  const checkResult = ref(9)

  const checkUpdate = async () => {
    try {
      const res = await http.request({
        url: `/soft/checkUpdate`,
        method: 'POST',
        data: {
          version: packageJson.version,
          name: 'camera'
        }
      })
      checkResult.value = res.data

      if (res.data == 0) {
        config.page = 'camera'
      } else {
        config.page = 'updater'
      }
    } catch (error) {
      config.token = ''
    }
  }

  return { checkUpdate }
}
