<template>
  <view class="wrap px-28rpx">
    <SGCalender ref="calender" />
    <scroll-view scroll-y class="scroll-view">
      <HealthDate :data="healthData" />
      <FuncationArea />
      <TodayDielt :data="todayDielt" />
      <TodayExecrise :exercises="todayDielt.exercises" />
    </scroll-view>

    <!-- <up-loading-page :loading="isLoading"></up-loading-page> -->
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import FuncationArea from './components/FuncationArea.vue'
import TodayDielt from './components/TodayDielt.vue'
import TodayExecrise from './components/TodayExecrise.vue'
import HealthDate from './components/HealthDate.vue'
import { getPlanByUserAPI, getPlanByUserTextAPI } from '@/services/plan/planBaseModule'
const safeAreaInsets = uni.getWindowInfo().safeAreaInsets
interface HealthData {
  todayExerciseTarget: number
  todayExerciseCompleted: number
  todayCalorieTarget: number
  todayCalorieCompleted: number
}

const healthData = ref<HealthData>({} as HealthData)

const isLoading = computed<boolean>(() => {
  return Object.entries(healthData.value).length === 0
})

const todayDielt = ref({
  planContent: '',
  meals: [''],
  exercises: [''],
  id: 0,
})

const calender = ref()

watchEffect(() => {
  console.log(calender.value.data)
})

onMounted(async () => {
  // const res = await getPlanByUserAPI()

  const result = (await getPlanByUserAPI()) as any
  console.log(result)
  healthData.value.todayExerciseTarget = result.data.todayExerciseTarget
  healthData.value.todayCalorieTarget = result.data.todayCalorieTarget
  healthData.value.todayExerciseCompleted = result.data.todayExerciseCompleted
  healthData.value.todayCalorieCompleted = result.data.todayCalorieCompleted
  todayDielt.value.planContent = result.data.planContent
  todayDielt.value.meals = JSON.parse(result.data.meals)
  todayDielt.value.exercises = JSON.parse(result.data.exercises || '[]')
  todayDielt.value.id = result.data.id
})
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - var(--status-bar-height) - 100px);
}
</style>
