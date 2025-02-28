import { defineStore } from 'pinia'
import { ref } from 'vue'

const useChangeStore = defineStore('change', () => {
  // tabbar切换
  const tabType = ref<'main' | 'sub'>('main')
  const activeIndex = ref(0)
  const subActiveIndex = ref(0)
  const changeTab = (index: number) => {
    if (tabType.value === 'main') {
      activeIndex.value = index
      return
    }
    subActiveIndex.value = index
  }
  const getActiveIndex = () => {
    if (tabType.value === 'main') {
      return activeIndex
    }
    return subActiveIndex
  }

  const changeTabType = (type: 'main' | 'sub') => {
    tabType.value = type
  }

  return {
    activeIndex,
    subActiveIndex,
    tabType,
    getActiveIndex,
    changeTab,
    changeTabType,
  }
})

export default useChangeStore
