/**
 * @module visitorServer
 * @description 提供游客用户相关接口
 */

import { http } from '@/utils/request'
import type { User, SearchUsersParams } from '@/types/user'

/**
 * @description 获取热门用户
 * @returns User.UserInfo[]
 */
export const getPublicPopularUsersAPI = () => {
  return http<User.UserInfo[]>({
    url: '/api/public/popular-users',
    method: 'GET',
  })
}

/**
 * @description 根据关键字查询公开用户列表
 * @param  data \{ keyword: string;page?: number=1;size?: number=10;}
 * @returns User.UserInfo[]
 */
export const getPublicUsersByKeywordAPI = (data: SearchUsersParams) => {
  return http<User.UserInfo[]>({
    url: '/api/public/search-users',
    method: 'GET',
    data,
  })
}

/**
 * @description 获取用户总量
 * @returns number 用户总量
 */
export const getUserCountAPI = () => {
  return http<number>({
    url: '/api/public/user-count',
    method: 'GET',
  })
}

/**
 * @description 获取公开的用户信息
 * @param username 用户名
 * @returns User.UserInfo
 */
export const getPublicUserInfoAPI = (username: string) => {
  return http<User.UserInfo>({
    url: `/api/public/user-profile/${username}`,
    method: 'GET',
  })
}
