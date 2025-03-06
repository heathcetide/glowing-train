<template>
  <!-- 体重数据区 -->
  <view class="weight-section px-32rpx pt-10rpx">
    <view class="pos-relative bg-#fff">
      <WeightChart />
      <view class="mb-32rpx pos-absolute pos-top-30rpx pos-left-0rpx w-100% px-33rpx">
        <view class="flex justify-between items-center">
          <text class="font-medium">体重</text>
          <text class="text-20rpx text-#6B7280">一天前更新</text>
        </view>
        <view class="mt-40rpx">
          <text class="text-48rpx">72.4</text>
          <text class="text-15.49rpx"> Kg </text>
        </view>
        <text class="text-20rpx mt-30rpx">体脂率 21%</text>
        <button class="bg-#5DBE8A text-white h-62rpx text-24rpx mt-10rpx">记录新的体重</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import WeightChart from './WeightChart.vue'
</script>

<style scoped></style>
