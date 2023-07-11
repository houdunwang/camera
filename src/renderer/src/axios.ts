import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: import.meta.env.DEV ? 'http://houdunren.test/api' : 'https://www.houdunren.com/api',
  // baseURL: 'https://www.houdunren.com/api',
  timeout: 10000
})

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.request.status == 422) {
      ElMessage({
        message: error.response.data.message.replace(/\(.*?\)/, ''),
        type: 'error',
        duration: 3000,
        center: false,
        grouping: true
      })
    }
    return Promise.reject(error)
  }
)

export { http }
