import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import type { httpRequestConfig, httpRequestInterceptors } from "@/service/request/type"

class Request {
  instance: AxiosInstance
  interceptors?: httpRequestInterceptors

  constructor(config: httpRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default Request
