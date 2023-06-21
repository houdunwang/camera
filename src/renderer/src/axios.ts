import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: import.meta.env.DEV ? 'http://houdunren.test/api' : '/',
  timeout: 10000
})

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    ElMessage({
      message: error.response.data.message,
      type: 'error',
      duration: 3000,
      center: false,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export { http }
