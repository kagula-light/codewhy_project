// service统一出口
import Request from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const httpRequestMethod = new Request({
  baseURL: BASE_URL, // 该实例默认的参数
  timeout: TIME_OUT, // 该实例默认的参数
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = ""
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
      }
      console.log("实例发送成功")
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log("发送失败")

      return error
    },
    responseInterceptor: (res) => {
      console.log("实例响应成功")

      return res
    },
    responseInterceptorCatch: (error) => {
      console.log("响应失败")
      return error
    }
  }
})
console.log(httpRequestMethod, "看看实例")
export default httpRequestMethod
