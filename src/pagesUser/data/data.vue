<template>
  <view class="py21rpx">
    <!-- 日期显示 -->
    <view class="flex justify-center">
      <text class="text-#1F2937 text-31.5rpx font-medium">2025年2月19日 - 2月25日</text>
    </view>
    <view class="flex-col-nocenter gap28rpx p-28rpx">
      <WeekRate />
      <WeekTrend />
      <NutritionAdvice />
    </view>
  </view>
</template>

<script setup lang="ts">
import NutritionAdvice from './components/NutritionAdvice.vue'
import WeekRate from './components/WeekRate.vue'
import WeekTrend from './components/WeekTrend.vue'
</script>

<style>
page {
  background-color: #f5f5f5;
}
</style>
