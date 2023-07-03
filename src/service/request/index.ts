import axios, { AxiosInstance } from 'axios'
import type {
  httpRequestConfig,
  httpRequestInterceptors
} from '@/service/request/type'

class Request {
  instance: AxiosInstance // axios的配置
  interceptors?: httpRequestInterceptors // 拦截器

  constructor(config: httpRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor as any,
      this.interceptors?.requestInterceptorCatch
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所以请求响应成功的拦截器')
        return res.data
      },
      (error) => {
        console.log('所以请求响应失败的拦截器')
        if (error.response.status === 404) {
          console.log('404错误')
        }
        return error
      }
    )
  }

  request(config: httpRequestConfig): void {
    // 针对单个接口发送前的拦截器处理
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      // 单个接口响应成功后的拦截器处理
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default Request
