// service统一出口
import Request from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const httpRequestMethod = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("发送成功")
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log("发送失败")

      return error
    },
    responseInterceptor: (res) => {
      console.log("响应成功")

      return res
    },
    responseInterceptorCatch: (error) => {
      console.log("响应失败")
      return error
    }
  }
})
export default httpRequestMethod
