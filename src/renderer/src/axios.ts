import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000/api' : 'https://www.hdcms.com/api',
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://www.hdcms.com/api',
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
      duration: 5000,
      center: false,
      grouping: true
    })
    return Promise.reject(error)
  }
)

export { http }
