/**
 *
 * @module foodMenusBaseModule
 */
import type { Food, FoodMeanu } from '@/types/food'
import { http } from '@/utils/request'

// import { httpServer } from '@/utils/requests'

export const getFoodMenusAPI = (type: string) =>
  http<FoodMeanu.FoodMeanuItem[]>({
    url: '/api/foodMenus/list/' + type,
    method: 'GET',
  })

export const getRandomFoodMenusAPI = () =>
  http<FoodMeanu.FoodMeanuItem[]>({
    url: '/api/foodMenus/random',
    method: 'GET',
  })

export const getFoodMenuByIdAPI = (id: string) => {
  return http<FoodMeanu.FoodMeanuItem>({
    url: `/api/foodMenus/${id}`,
    method: 'GET',
  })
}
export const getFoodSearchAPI = (name: string) => {
  return http<Food.FoodItem[]>({
    url: `/api/foods/search?name=${name}`,
    method: 'GET',
  })
}

export const addFoodToStackAPI = (food: Food.FoodItem) => {
  return http<Food.FoodItem>({
    url: `/api/inventory/add`,
    method: 'POST',
    data: food,
  })
}

/**
 * /api/foods/random
 */
export const getRandomFoodAPI = () => {
  return http<Food.FoodItem[]>({
    url: `/api/foods/random`,
    method: 'GET',
  })
}
