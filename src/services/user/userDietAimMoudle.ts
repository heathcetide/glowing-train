/**
 *
 * @module userDietAimMoudle
 * @description 用户饮食目标模块
 */
import type { User } from '@/types/user'
import { http } from '@/utils/request'

/**
 * @description 为用户生成健康计划 /api/dietary-goals/generate +token
 * @method POST
 *
 */
export const getDietaryGoalsAPI = () =>
  http({
    url: '/dietary-goals/generate',
    method: 'POST',
  })

/**
 * @description 获取用户饮食目标 /api/dietary-goals/get
 * @method GET
 */
export const getUserDietaryGoalsAPI = () =>
  http<User.UserTargetInfo>({
    url: '/dietary-goals/get',
    method: 'GET',
  })

/**
 * @description 更新用户饮食目标 /api/dietary-goals/user/{userId}
 * @method POST
 */
export const updateUserDietaryGoalsAPI = (data: User.UserTargetInfo) =>
  http<User.UserTargetInfo>({
    url: '/dietary-goals/user',
    method: 'POST',
    data,
  })
