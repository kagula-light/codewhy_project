import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface httpRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 定义一个新接口httpRequestConfig继承了AxiosRequestConfig的所有类型，在下面的对象中可以新增其他的类型
export interface httpRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: httpRequestInterceptors<T>
  headers?: any
  showLoading?: boolean
}
