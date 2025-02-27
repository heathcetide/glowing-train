import axios, { type AxiosRequestConfig } from 'axios'

// 创建 axios 实例 https://0fc6-2409-8962-340-476f-9d75-6955-e2da-c559.ngrok-free.app http://8.137.22.105:800
const service = axios.create({
  baseURL: 'http://8.137.22.105:800/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

service.interceptors.request.use(
  (config) => {
    console.log('请求配置:', config)
    return config
  },
  (error) => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    console.log('响应数据:', response)
    return response
  },
  (error) => {
    console.error('响应错误:', error)
    return Promise.reject(error)
  },
)
// 封装请求函数
const request = <T>(options: AxiosRequestConfig): Promise<T> => {
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

export default request
