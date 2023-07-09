import axios, { AxiosInstance } from "axios"
import type { httpRequestConfig, httpRequestInterceptors } from "@/service/request/type"
import { ElLoading } from "element-plus/lib/index"

const DEFAULT_LOADING = false

class Request {
  instance: AxiosInstance // axios的实例
  interceptors?: httpRequestInterceptors // 拦截器
  loading?: any // 加载动画
  showLoading: boolean

  constructor(config: httpRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING // 默认为false
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

    // 添加所有的实例都有的拦截器 如果没有自定义全局拦截器的方法，则实例中的拦截器会接收axios默认返回的值
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "加载中...",
            background: "rgba(0, 0, 0, .5)"
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (error) => {
        if (error.response.status === 404) {
          this.loading?.close()
        }
        return error
      }
    )
  }

  request<T = any>(config: httpRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 针对单个接口发送前的拦截器处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config) // 看不懂，但是打印出来看了一下，相当于是这个返回了一个新的config，然后改变了原有的requestInterceptor的方法
      }
      // 添加loading状态
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个接口响应成功后的拦截器处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 请求结束，将showLoading的状态初始化
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          // 请求结束，将showLoading的状态初始化
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: httpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: httpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: httpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: httpRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default Request
