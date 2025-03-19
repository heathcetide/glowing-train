import type { Community } from '@/types/component'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useAcitvityStore = defineStore('acitvity', () => {
  const activityItem = ref<Community.ActivityCardProps>({} as any)

  const getActivityItem = (): Community.ActivityCardProps => {
    return activityItem.value
  }

  const setActivityItem = (item: Community.ActivityCardProps) => {
    activityItem.value = item
  }

  const clearAcitvityItem = () => {
    activityItem.value = {} as any
  }
  return {
    activityItem,
    getActivityItem,
    setActivityItem,
    clearAcitvityItem,
  }
})

export default useAcitvityStore
