import type { CookModule } from '@/types/component'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import icon1 from '@/static/image/cook/food-pic1.svg'
import icon2 from '@/static/image/cook/food-pic2.svg'
const useCookStore = defineStore('cook', () => {
  const chosedDietList = ref<CookModule.FoodCardItem[]>([])

  const defaultList = ref<CookModule.FoodCardItem[]>([
    {
      id: 1,
      foodUrl: icon1,
      title: '烤鱼',
      desc: '烤鱼',
      kcal: 100,
      num: 1,
    },
    {
      id: 2,
      foodUrl: icon2,
      title: '烤鱼',
      desc: '烤鱼',
      kcal: 200,
      num: 1,
    },

    {
      id: 3,
      foodUrl: icon1,
      title: '烤鱼',
      desc: '烤鱼',
      num: 1,
      kcal: 100,
    },
    {
      id: 4,
      foodUrl: icon2,
      title: '烤鱼',
      desc: '烤鱼',
      kcal: 100,
      num: 1,
    },
  ])
  const addDiet = (item: CookModule.FoodCardItem) => {
    const target: CookModule.FoodCardItem | undefined = chosedDietList.value.find((a) => a.id === item.id)
    if (target) {
      const newList = chosedDietList.value.map((a) => {
        if (a.id === item.id) {
          a = item
        }
        return a
      })
      return (chosedDietList.value = newList)
    }

    chosedDietList.value = [...chosedDietList.value, item]
  }

  const deleteDiet = (id: number) => {
    chosedDietList.value = chosedDietList.value.filter((a) => a.id !== id)
  }

  const totalkcal = computed(() => {
    return chosedDietList.value.reduce((a, b) => a + b.num * b.kcal, 0)
  })
  const totalNum = computed(() => {
    const count = chosedDietList.value.reduce((a, b) => a + b.num, 0)
    return count
  })
  const clear = () => {
    chosedDietList.value = []
  }

  return {
    chosedDietList,
    defaultList,
    addDiet,
    deleteDiet,
    totalkcal,
    totalNum,
    clear,
  }
})

export default useCookStore
