/**
 *
 * @module postBaseModules
 * @description 帖子基础模块
 */
import { http } from '@/utils/request'

/**
 * @description 获取用户所有库存
 */
export const getUserInventoryAPI = () => {
  return http<any[]>({
    url: '/api/inventory/owner', // 调用获取用户库存的接口
    method: 'GET',
  })
}

/**
 * 假设你有一个接口返回的库存数据的类型定义
 */
export interface UserInventory {
  id: number
  user_id: number
  food_id: number | null
  custom_food_name: string | null
  quantity: number
  unit: string
  expiration_date: string | null
  purchase_date: string | null
  last_used_date: string | null
  source: string | null
  usage_category: string | null
  is_available: boolean
  storage_location: string | null
  notes: string | null
  alert_threshold: number
  created_at: string
  updated_at: string
  deleted: boolean
}

/**
 * @description 获取用户库存推荐食物
 */
export const getUserInventoryMakeFoodAPI = () => {
  return http({
    url: '/api/recommendations/user/foods', // 调用获取用户库存的接口
    method: 'GET',
  })
}
