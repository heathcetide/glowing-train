/**
 * @module UserFavor
 * @description 用户偏好设置模块
 */

import type { SetUserPreferencesParams } from '@/types/user'
import { http } from '@/utils/request'

/**
 * @description 用户偏好设置
 * @param data \{ channel: string, userName: string; }
 */
export const setUserPreferencesAPI = (userId: number, data: SetUserPreferencesParams) => {
  return http({
    url: `/api/preferences/${userId}`,
    method: 'GET',
    data,
  })
}

/**
 * @description 设置推送
 * @param message string
 * @param userId number
 */
export const setTestNotificationAPI = (userId: number, message: string) => {
  return http({
    url: `/api/preferences/${userId}`,
    method: 'GET',
    data: {
      message,
    },
  })
}

/** @description 获取用户偏好设置 */
export const getUserPreferencesAPI = (userId: number) => {
  return http({
    url: `/api/preferences/${userId}`,
    method: 'GET',
  })
}
