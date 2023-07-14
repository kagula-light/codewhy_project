// service统一出口
import Request from './request'
import localCache from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './request/config'

const httpRequestMethod = new Request({
  baseURL: BASE_URL, // 该实例默认的参数
  timeout: TIME_OUT, // 该实例默认的参数
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = localCache.getCache('token')
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})
export default httpRequestMethod
