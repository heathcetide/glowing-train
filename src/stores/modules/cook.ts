import type { CookModule } from '@/types/component'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import icon1 from '@/static/image/cook/food-pic1.svg'
import icon2 from '@/static/image/cook/food-pic2.svg'
const useCookStore = defineStore('cook', () => {
  const chosedDietList = ref<CookModule.FoodCardItem[]>([])

  const defaultList = ref<Partial<CookModule.FoodCardItem>[]>([
    {
      id: '1',
      image: icon1,
      title: '烤鱼',
      intro: '烤鱼',
      kcal: 100,
      num: 1,
    },
    {
      id: '2',
      image: icon2,
      title: '烤鱼',
      intro: '烤鱼',
      kcal: 200,
      num: 1,
    },

    {
      id: '3',
      image: icon1,
      title: '烤鱼',
      intro: '烤鱼',
      num: 1,
      kcal: 100,
    },
    {
      id: ' 4',
      image: icon2,
      title: '烤鱼',
      intro: '烤鱼',
      kcal: 100,
      num: 1,
    },
  ])

  // const getTodayRecommends = async () => {}

  const addDiet = (item: CookModule.FoodCardItem) => {
    const target: CookModule.FoodCardItem | undefined = chosedDietList.value.find((a) => a.id === item.id)
    if (target && target.num == 0) {
      return
    }
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

  watch(
    chosedDietList.value,
    (newValue, oldValue) => {
      chosedDietList.value = newValue.filter((item) => item.num === 0)
      console.log('chosedDietList.value', chosedDietList.value)
    },
    { deep: true },
  )
  const deleteDiet = (id: string) => {
    chosedDietList.value = chosedDietList.value.filter((a) => a.id !== id)
  }

  const totalkcal = computed(() => {
    return chosedDietList.value.reduce((a, b) => {
      return a + b.num * b.kcal
    }, 0)
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
