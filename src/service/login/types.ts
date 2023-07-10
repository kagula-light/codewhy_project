export interface IAccount {
  name: string,
  password: string
}

// 登录接口的返回值类型
export interface ILoginResult {
  id: number,
  name: string,
  token: string
}

// 接口返回的数据格式类型
export interface IDataType<T = any> {
  code: number,
  data: T
}
