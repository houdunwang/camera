import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ref } from 'vue'
import packageJson from '../../../../package.json'

export default () => {
  const configStore = useConfigStore()
  const isLatestVersion = ref(false)
  //获取密钥
  const getSecret = async (data: { secret: string }): Promise<any> => {
    return await http.request({
      url: '/softSecret/checkSoftSecret',
      method: 'POST',
      data
    })
  }

  //软件更新检测
  const checkUpdate = async () => {
    const res = await http.request<any, any>({
      url: `/soft/checkUpdate`,
      method: 'POST',
      data: {
        version: packageJson.version,
        app: 'camera'
      }
    })
    if (res.data.code == 1) {
      configStore.config.page = 'updater'
    } else {
      isLatestVersion.value = true
    }
  }

  //检测密钥
  const checkSecret = async () => {
    if (!configStore.config.secret) return
    try {
      await getSecret({ secret: configStore.config.secret })
    } catch (error) {
      configStore.config.secret = ''
    }
  }

  //打开窗口
  const open = (url: string) => {
    window.open(url)
  }

  const init = async () => {
    await checkUpdate()
    setTimeout(async () => {
      if (isLatestVersion) await checkSecret()
    }, 3000)
  }
  return { checkSecret, getSecret, checkUpdate, open, init }
}
