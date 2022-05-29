import Taro from '@tarojs/taro'

export const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  PASSWORD_ERROR: 426
}

/** 请求参数 */
export interface RequestProps {
  /** 请求地址 */
  url: string
  /** 请求参数 */
  param?: any
  /** 域名的配置 */
  baseURL?: string
  /** 请求的方式: 默认get */
  method?: 'GET' | 'POST'
  /** 请求头 */
  header?: Taro.request.Option<any, any>
  /** 请求中的额外配置 */
  config?: any
}

/** 封装请求的拦截器 */
const customInterceptor = (chain) => {
  const requestParams = chain.requestParams
  return chain.proceed(requestParams).then(res => {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject({ message: '请求资源不存在', ...res })
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject({ message: '服务端出现了问题', ...res })
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return Promise.reject({ message: '没有权限访问', ...res })
    } else if (res.statusCode === HTTP_STATUS.GATEWAY_TIMEOUT) {
      return Promise.reject({ message: '请求超时', ...res })
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      return Promise.reject({ message: '没有访问的权限', ...res })
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。

const interceptors = [customInterceptor]
// 打印请求的数据
interceptors.push(Taro.interceptors.logInterceptor)

export default interceptors
