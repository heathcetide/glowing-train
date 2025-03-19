import type { Food, FoodMeanu } from '@/types/food'
import { http } from '@/utils/request'

/**
 * @description 获取帖子列表
 */
export const getRankByTypeAPI = (type: string) => {
  const url = `/api/rankings/by-type/` + type
  return http<Post.PostItem[]>({
    url: url,
    method: 'GET',
  })
}

export const getRankFoodMenu = () => {
  return http<FoodMeanu.FoodMeanuItem[]>({
    url: '/api/rankings/by-score',
    method: 'GET',
  })
}
