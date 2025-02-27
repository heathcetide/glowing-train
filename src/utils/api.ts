import axios, { Axios, type AxiosRequestConfig } from 'axios'
import qs from 'qs'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://223.104.216.59:800',
  timeout: 10000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 如果是 POST 请求，并且数据是对象，则转换为 x-www-form-urlencoded 格式
    if (config.method === 'post' && config.data && typeof config.data === 'object') {
      config.data = qs.stringify(config.data)
      config.headers!['Content-Type'] = 'application/x-www-form-urlencoded'
      console.log(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 封装请求函数
const request2 = <T>(options: AxiosRequestConfig): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    service(options)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        if (error.message === 'Network Error') {
          console.error('网络错误，请检查网络连接')
        } else if (error.response) {
          console.error('服务器错误:', error.response.status, error.response.data)
        } else {
          console.error('请求错误:', error.message)
        }
        reject(error)
      })
  })
}

export default request2
