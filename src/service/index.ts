import Taro from '@tarojs/taro'
import interceptors, { RequestProps } from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

/**
 * 基础的请求配置
 * @param {RequestProps} option
 * @return {Promise<any>}
 */
export const request = (option: RequestProps) => {
  const { url, baseURL, data, method = 'GET', header, ...otherConfig } = option
  return new Promise((resolve, reject) => {
    Taro.request({
      url: baseURL ? baseURL + url : url,
      data,
      method,
      header: {
        'Content-Type': 'application/json;charset=UTF-8',
        ...header
      },
      ...otherConfig
    }).then((res) => {
      // 业务逻辑的处理
      resolve(res)
    }).catch(e => {
      // 报错的处理
      reject(e)
    })
  })
}
