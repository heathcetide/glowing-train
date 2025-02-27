/**
 *
 * @package userStorage
 * @description 用户库存模块接口
 */

import { http } from '@/utils/request'
import type { User } from '@/types/user'
/**
 * @description 用户添加自定义食物
 * @param data User.UserAddFoodParams
 */
export const addUserFoodAPI = (data: User.UserAddFoodParams) =>
  http<unknown>({
    url: '/api/inventory',
    method: 'POST',
    data,
  })

/**
 * @description 更新用户库存
 */
export const updateInventoryAPI = (data: User.UserAddFoodParams) => {
  return http<unknown>({
    url: '/api/inventory',
    method: 'PUT',
    data,
  })
}

/**
 * @description 删除用户库存
 * @param {number} id 库存记录主键ID
 */
export const deleteInventoryAPI = (id: number) => {
  return http<unknown>({
    url: `/api/inventory/${id}`,
    method: 'DELETE',
  })
}

/**
 * @description 根据用户ID获取所有库存
 * @returns User.UserAddFoodParams[]
 */
export const getAllByUserIdAPI = (userId: number) => {
  return http<User.UserAddFoodParams[]>({
    url: `/api/inventory/${userId}`,
    method: 'GET',
  })
}

/**
 * @description
 */
export const getExpiringSoonAPI = (userId: number) => {
  return http<User.UserAddFoodParams[]>({
    url: `/api/inventory/${userId}/expiring-soon}`,
    method: 'GET',
  })
}

export const getLowStockAPI = (userId: number) => {
  return http<User.UserAddFoodParams[]>({
    url: `/api/inventory/${userId}/low-stock`,
    method: 'GET',
  })
}
