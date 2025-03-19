import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { HomeIndex } from '@/types/component'
import type { Food } from '@/types/food'

const useFoodStore = defineStore('food', () => {
  const foodItem = ref<HomeIndex.Stack.StackItem>({} as any)

  const searchResult = ref<Food.FoodItem[]>([])

  const setSearchResult = (result: Food.FoodItem) => {
    searchResult.value.push(result)
  }

  const getSearchResult = (): Food.FoodItem[] => {
    return searchResult.value
  }

  const getFoodItem = (): HomeIndex.Stack.StackItem => {
    return foodItem.value
  }
  const setFoodItem = (item: HomeIndex.Stack.StackItem) => {
    foodItem.value = item
  }
  return {
    foodItem,
    searchResult,
    getFoodItem,
    setFoodItem,
    getSearchResult,
    setSearchResult,
  }
})

export default useFoodStore
