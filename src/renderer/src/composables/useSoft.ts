import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import packageJson from '../../../../package.json'

export default () => {
  const { config } = useConfigStore()

  //验证密钥
  const checkSecret = async () => {
    try {
      await http.request({
        url: '/softSecret/checkSoftSecret',
        method: 'POST',
        data: {
          secret: config.secret
        }
      })
      config.page = 'camera'
    } catch (error) {
      config.page = 'secret'
      config.secret = ''
    }
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
      config.page = 'updater'
      return true
    }
    return false
  }

  //初始应用
  const init = async () => {
    if (await checkUpdate()) return

    if (!config.secret) config.page = 'secret'
    else checkSecret()
  }
  return { checkSecret, init, checkUpdate }
}
