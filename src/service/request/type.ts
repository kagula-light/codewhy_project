import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface httpRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 定义一个新接口httpRequestConfig继承了AxiosRequestConfig的所有类型，在下面的对象中可以新增其他的类型
export interface httpRequestConfig extends AxiosRequestConfig {
  interceptors?: httpRequestInterceptors
  headers?: any
}
