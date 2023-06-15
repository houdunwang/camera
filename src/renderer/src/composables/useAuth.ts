import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfigStore()

  const authorize = (handle: string | Function) => {
    if (!config.token) {
      ElMessage({
        message: '功能需要许可',
        type: 'error',
        grouping: true,
        duration: 1000
      })
      config.page = 'secret'
      return false
    }
    typeof handle == 'string' ? (config.page = handle) : handle()
    return true
  }
  return { authorize }
}
