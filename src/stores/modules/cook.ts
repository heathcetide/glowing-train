import type { CookModule } from '@/types/component'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import icon1 from '@/static/image/cook/food-pic1.svg'
import icon2 from '@/static/image/cook/food-pic2.svg'
const useCookStore = defineStore('cook', () => {
  const chosedDietList = ref<CookModule.FoodCardItem[]>([])

  const defaultList = ref([
    {
      id: 1,
      icon: icon1,
      title: '烤鱼',
      desc: '烤鱼',
      hot: 100,
      num: 1,
    },
    {
      id: 2,
      icon: icon2,
      title: '烤鱼',
      desc: '烤鱼',
      hot: 200,
      num: 1,
    },

    {
      id: 3,
      icon: icon1,
      title: '烤鱼',
      desc: '烤鱼',
      num: 1,
      hot: 100,
    },
    {
      id: 4,
      icon: icon2,
      title: '烤鱼',
      desc: '烤鱼',
      hot: 100,
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

  const totalHot = computed(() => {
    return chosedDietList.value.reduce((a, b) => a + b.num * b.hot, 0)
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
    totalHot,
    totalNum,
    clear,
  }
})

export default useCookStore
