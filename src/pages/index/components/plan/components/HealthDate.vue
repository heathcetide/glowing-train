<template>
  <!-- 健康数据概览 -->
  <view class="health-overview mt-20rpx gap28rpx flex">
    <template v-for="item in list" :key="item.title">
      <view class="col flex-1 shadow1 bg-#fff rounded-lg p-16rpx mb-16rpx">
        <text class="block text-21rpx text-#9CA3AF">{{ item.title }}</text>
        <text class="text-31.5rpx">{{ item.value }}</text>
        <view class="text-21rpx text-#9CA3AF">{{ item.unit }}</view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

interface DataInter {
  todayExerciseTarget: number
  todayExerciseCompleted: number
  todayCalorieTarget: number
  todayCalorieCompleted: number
}
// 定义接收的 prop 类型
const props = defineProps<{ data: DataInter }>()

// 假设 data 包含这些属性
const todayCalorieTarget = props.data.todayCalorieTarget
const todayExerciseTarget = props.data.todayExerciseTarget
const todayCalorieConsumed = props.data.todayCalorieConsumed // 用户今天消耗的卡路里
const todayExerciseTime = props.data.todayExerciseTime // 用户今天的运动时间

// 动态计算健康评分
const healthScore = computed(() => {
  let score = 80 // 基础分数

  // 卡路里目标与实际消耗比较（假设目标达到 80% 以上即为好）
  const calorieScore = todayCalorieConsumed >= todayCalorieTarget * 0.8 ? 40 : 20

  // 运动时间目标与实际时间比较（假设目标达到 80% 以上即为好）
  const exerciseScore = todayExerciseTime >= todayExerciseTarget * 0.8 ? 40 : 20

  // 计算总评分
  score += calorieScore + exerciseScore
  return score
})

const list = ref([
  {
    title: '饮食计划',
    value: props.data.todayCalorieTarget,
    unit: '卡路里',
  },
  {
    title: '运动计划',
    value: props.data.todayExerciseTarget,
    unit: '分钟/天',
  },
  {
    title: '健康评分',
    value: healthScore.value,
    unit: '良好',
  },
])
</script>

<style scoped></style>
