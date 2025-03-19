<template>
  <view class="shadow1 p-28rpx rounded-18rpx bg-#fff h-210rpx">
    <view class="text-#333333 justify-between text-28rpx flex mb-28rpx">
      <text>今日摄入量</text>
      <text>目标 2000 kcal</text>
    </view>
    <view class="process">
      <up-line-progress
        :percentage="(healthData.todayCalorieCompleted / healthData.todayCalorieTarget) * 100"
        :show-text="false"
        activeColor="#5DBE8A"
      ></up-line-progress>
      <view class="mt-14rpx center text-31.5rpx text-#5DBE8A"
        >{{ healthData.todayCalorieCompleted }} / {{ healthData.todayCalorieTarget }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getPlanByUserAPI } from '@/services/plan/planBaseModule'
import type { Plan } from '@/types/user'
import Utils from '@/utils'
const healthData = ref<Plan.PlanInfo>({} as Plan.PlanInfo)

onMounted(async () => {
  try {
    const res = (await getPlanByUserAPI()) || {}
    console.log('返回数据', res)
    healthData.value.todayExerciseTarget = res.data.todayExerciseTarget
    healthData.value.todayCalorieTarget = res.data.todayCalorieTarget
    healthData.value.todayExerciseCompleted = res.data.todayExerciseCompleted
    healthData.value.todayCalorieCompleted = res.data.todayCalorieCompleted
  } catch (error: any) {
    Utils.navigateTo('/pages/message/index?fail=' + error.errMsg)
  }
})
</script>

<style scoped></style>
