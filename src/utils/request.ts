import { useMemberStore } from '@/stores/modules/member' // 导入 pinia store

const enableProxy = import.meta.env.VITE_PROXY_ENABLE

let baseUrl: string = ''
if (enableProxy === '1') {
  baseUrl = import.meta.env.VITE_LOCAL_BASE_URL
} else {
  baseUrl = import.meta.env.VITE_BASE_URL
}

const httpInterceptor = {
  // 请求拦截器,拦截前触发
  invoke: (options: UniApp.RequestOptions) => {
    console.log('options', options)
    // 1.非http开头需要拼接
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 2.设置超时时间为10s
    options.timeout = 10000
    // 3. 添加请求头标识
    options.header = {
      ...options.header,
      'Content-Type': 'application/json',
    }
    // 4. 添加token
    const memberStore = useMemberStore()
    const token = memberStore.token // 获取 JWT 令牌
    if (token) {
      options.header.Authorization = token
    }

    return options
  },
}

// 添加请求拦截器
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**
 * @param {UniApp.RequestOptions} options
 * @returns {Promise<UniApp.RequestSuccessCallbackResult>}

 */
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    console.log('@  options', options.data)

    uni.request({
      ...options,
      success: (res: UniApp.RequestSuccessCallbackResult) => {
        // res.data as Data<T> 进行类型断言
        console.log('@  res', res)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.获取数据成功
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          //  3.1401错误->清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
        } else {
          // 3.2 其他错误 ->根据后端错误信息轻提示
          uni.showToast({
            title: (res.data as Data<T>).message || '请求失败',
            icon: 'none',
          })
        }
      },
      fail: (err: UniApp.GeneralCallbackResult) => {
        reject(err)
      },
    })
  })
}
