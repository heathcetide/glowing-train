/**
 * @module userFoodMoudle
 * @description 用户食物模块接口
 */
import { http } from '@/utils/request'
import type { Food } from '@/types/food'
/**
 * @description 获取食物 /api/foods
 * @method GET
 * @returns {Promise<Food.GetFoodListResponse>}
 */
export const getFoodListAPI = () =>
  http<Food.GetFoodListResponse>({
    url: '/api/foods',
    method: 'GET',
  })

/**
 * @description 创建食物 /api/foods
 * @method POST
 */
export const createFoodAPI = (data: Food.CreateFoodParams) =>
  http<Food.FoodItem>({
    url: '/api/foods',
    method: 'POST',
    data,
  })
