import type { ModalParams, CallbackFunction } from '@/types/utils'
// 工具类
class Utils {
  static showToast = (message: string) => {
    uni.showToast({
      icon: 'none',
      title: message,
      duration: 1500,
    })
  }
  static showModal = ({ title = '', content = '', confirm, cancel }: ModalParams) => {
    uni.showModal({
      title,
      content,
      success: (res) => {
        if (res.confirm) {
          confirm?.()
        } else if (res.cancel) {
          cancel?.()
        }
      },
    })
  }
  static switchTab = (url: string, success?: CallbackFunction) => {
    uni.switchTab({
      url,
      success,
    })
  }
  static navigateTo = (url: string, success?: CallbackFunction) => {
    uni.navigateTo({
      url,
      success,
    })
  }
  static redirectTo = (url: string, success?: CallbackFunction) => {
    uni.redirectTo({
      url,
      success,
    })
  }
  static navigateBack = (delta = 1, url = '/pages/index/index') => {
    const pages = getCurrentPages()
    if (pages.length > 1) {
      uni.navigateBack({
        delta,
      })
    } else {
      uni.switchTab({
        url,
      })
    }
  }
  static setStorage(key: string, value: unknown) {
    uni.setStorageSync(key, value)
  }
  static getStorage<T>(key: string): T {
    return uni.getStorageSync(key)
  }
  static removeStorage(key: string) {
    uni.removeStorageSync(key)
  }
  static removeAllStorage() {
    uni.clearStorageSync()
  }
  static getUuid(): string {
    return uni.$uv.uuid()
  }

  /**
   * 将对象参数转换为URL查询字符串
   * @param params 参数对象，支持字符串、数字、布尔值及数组类型
   * @returns 编码后的查询字符串，如 "key1=value1&key2=value2"
   */
  static objectToQueryString(params: {
    [key: string]: string | string[] | number | boolean | (string | number | boolean)[]
  }): string {
    const queryParts: string[] = []

    // 遍历对象属性
    for (const [key, value] of Object.entries(params)) {
      // 跳过空值
      if (value === null || value === undefined) continue

      // 处理数组类型（如 tags: ['js', 'ts'] → tags=js&tags=ts）
      if (Array.isArray(value)) {
        value.forEach((item) => {
          // 跳过数组中的空元素
          if (item !== null && item !== undefined) {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
          }
        })
      } else {
        // 处理基本类型（自动转换布尔值/数字为字符串）
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      }
    }

    // 拼接所有参数并用 & 连接
    return queryParts.join('&')
  }
}
export default Utils
