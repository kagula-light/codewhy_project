import httpRequestMethod from '@/service'
import { IAccount, IDataType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' // /role/id/menu
}

export function accountLoginRequest(account: IAccount) {
  return httpRequestMethod.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true
  })
}

export function requestUserInfoById(id: number) {
  return httpRequestMethod.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return httpRequestMethod.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
