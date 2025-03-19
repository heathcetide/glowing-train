<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="wrap p-28rpx rounded-14rpx">
      <NutritionAnalyzeChart :data="healthData" />
      <EatFoodNotice />
      <EatFoodNotice />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPlanByUserAPI } from '@/services/plan/planBaseModule'
import NutritionAnalyzeChart from './components/NutritionAnalyzeChart.vue'
import EatFoodNotice from './components/EatFoodNotice.vue'

const healthData = ref({
  todayExerciseTarget: 0,
  todayExerciseCompleted: 0,
  todayCalorieTarget: 2000,
  todayCalorieCompleted: 0,
})

const todayDielt = ref({
  planContent: '',
  meals: [''],
  exercises: [''],
})

onMounted(async () => {
  const res = await getPlanByUserAPI()

  healthData.value.todayExerciseTarget = res.data.todayExerciseTarget
  healthData.value.todayCalorieTarget = res.data.todayCalorieTarget
  healthData.value.todayExerciseCompleted = res.data.todayExerciseCompleted
  healthData.value.todayCalorieCompleted = res.data.todayCalorieCompleted
  todayDielt.value.planContent = res.data.planContent
  todayDielt.value.meals = JSON.parse(res.data.meals)
  todayDielt.value.exercises = JSON.parse(res.data.exercises)
})
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 150rpx - 44px);
}
</style>
