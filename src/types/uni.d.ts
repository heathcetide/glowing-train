import type { Uni as _Uni } from '@dcloudio/types'
import type Utils from '@/utils/index'
import type { Uv } from './uv'
declare global {
  /**
   *拓展全局变量Uni
   */
  interface Uni extends _Uni {
    $uv: Uv
    $Utils: typeof Utils
  }

  // 响应数据结果类型
  interface Data<T> {
    code: number
    message: string
    data: T
  }

  /** 分页查询格式 */
  class PageSearch {
    size?: number = 10
    page?: number = 1
  }
  type ScoreType = 1 | 2 | 3 | 4 | 5
}
