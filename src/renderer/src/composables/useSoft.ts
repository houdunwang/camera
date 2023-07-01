import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ElMessage } from 'element-plus'
import packageJson from '../../../../package.json'

export default () => {
  const { config } = useConfigStore()

  //获取密钥
  const getSecret = async (data: { secret: string }): Promise<any> => {
    if (!data.secret.trim()) {
      return ElMessage({ message: '密钥不能为空', grouping: true, type: 'warning' })
    }
    try {
      const res = await http.request({
        url: '/softSecret/checkSoftSecret',
        method: 'POST',
        data
      })
      config.secret = res.data.secret
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

  //检测密钥
  const checkSecret = () => {
    if (!config.secret) {
      ElMessage({ grouping: true, type: 'warning', message: '请设置密钥' })
      config.page = 'secret'
      return false
    }
    return true
  }

  return { checkSecret, getSecret, checkUpdate }
}
