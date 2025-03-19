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
  return http<any>({
    url: '/api/inventory/owner', // 调用获取用户库存的接口
    method: 'GET',
  })
}

export const updateUserInventoryAPI = (data: UserInventory) => {
  return http({
    url: '/api/inventory/update', // 调用获取用户库存的接口
    method: 'POST',
    data,
  })
}

/**
 * 假设你有一个接口返回的库存数据的类型定义
 */
export interface UserInventory {
  id: number
  userId: number
  foodId: number | null
  customFoodName: string | null
  quantity: number
  unit: string
  expirationDate: string | null
  purchaseDate: string | null
  lastUsedDate: string | null
  source: string | null
  usageCategory: string | null
  available: boolean
  storageLocation: string | null
  notes: string | null
  alertThreshold: number
  createdAt: string
  updatedAt: string
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

export const addUserStackAPI = (data: UserInventory) => {
  return http({
    url: '/api/inventory/add', // 调用获取用户库存的接口
    method: 'POST',
    data,
  })
}
