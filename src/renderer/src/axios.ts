import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'

const http = axios.create({
  // baseURL: import.meta.env.DEV ? 'http://localhost:3000/api' : 'https://www.hdcms.com/api',
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // ElMessageBox.alert(error.response.data.message)
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
