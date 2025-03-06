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

  getDayOfWeek(dateString: string): string {
    const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六']

    // 解析输入的日期字符串
    const [yearStr, monthStr, dayStr] = dateString.split('-')
    const year = parseInt(yearStr, 10) + 2000 // 假设年份在21世纪
    const month = parseInt(monthStr, 10) - 1 // 月份是从0开始的，所以需要减1
    const day = parseInt(dayStr, 10)

    const date = new Date(year, month, day)
    const dayOfWeek = date.getDay()

    return daysOfWeek[dayOfWeek]
  }
}
export default Utils
