/**
 *
 * @module userSuggestions
 * @description 用户反馈相关接口
 */
import { http } from '@/utils/request'
import type { User } from '@/types/user'

/**
 * @param {number} foodId
 * @description 根据食物 ID 获取该食物的所有用户反馈
 * @returns   用户反馈列表
 */
export const getFoodSuggestionsAPI = (foodId: number) =>
  http<User.CommentInfo[]>({
    url: `/api/feedback/food/${foodId}`,
    method: 'GET',
  })

/**
 * @param {number} foodId
 * @param {PageSearch} data? 分页查询参数
 * @description 分页获取指定食物的用户反馈
 * @returns   用户反馈列表
 */
export const getFoodSuggestionsPageAPI = (foodId: number, data?: PageSearch) =>
  http<User.CommentInfo[]>({
    url: `/api/feedback/food/${foodId}/page`,
    method: 'GET',
    data,
  })

/**
 * @description 获取指定食物评分
 * @returns   用户评分
 */
export const getFoodRatingAPI = (foodId: number) =>
  http<number>({
    url: `/api/feedback/food/{foodId}/rating`,
    method: 'GET',
  })

/**
 * @description 根据用户 ID 获取该用户的所有反馈记录
 * @returns   用户反馈列表
 */
export const getUserSuggestionsByUserIdAPI = (userId: number) =>
  http<User.CommentInfo[]>({
    url: `/api/feedback/user/${userId}`,
    method: 'GET',
  })

/**
 * @description 创建用户反馈记录
 * @param {number} userId 用户 ID
 * @param {User.CreateCommentParams} data 反馈信息
 * @returns   用户反馈信息
 */
export const createUserSuggestionsAPI = (userId: number, data: User.CreateCommentParams) =>
  http<User.CommentInfo>({
    url: `/api/feedback/user/${userId}`,
    method: 'POST',
    data,
  })

/**
 * @description 更新用户反馈记录
 * @param {number} userId 用户 ID
 * @param {number} feedbackId 反馈 ID
 * @param {User.CreateCommentParams} data 修改后的反馈信息
 * @returns   用户修改后的反馈信息
 */
export const updateUserSuggestionsAPI = (
  userId: number,
  feedbackId: number,
  data: User.CreateCommentParams,
) =>
  http<User.CommentInfo>({
    url: `/api/feedback/user/${userId}/${feedbackId}`,
    method: 'PUT',
    data,
  })

/**
 * @description 管理员--删除用户反馈记录
 * @param {number} userId 用户 ID
 * @param {number} feedbackId 反馈 ID
 */
export const deleteUserSuggestionsAPI = (userId: number, feedbackId: number) =>
  http<void>({
    url: `/api/feedback/user/${userId}/${feedbackId}`,
    method: 'DELETE',
  })
