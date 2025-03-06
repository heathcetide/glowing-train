<template>
  <!-- 本周评分模块 -->
  <view class="flex items-center gap42rpx bg-white rounded-lg shadow1 p-28rpx">
    <view>
      <ProgressUchart />
    </view>
    <view class="flex-1 text-#4B5563 flex-col-nocenter justify-center">
      <view class="flex items-center text-center gap12rpx">
        <text class="text-#16A34A text-52.5rpx font-bold">A</text>
        <text class="font-medium">本周评分</text>
      </view>
      <text class="text-gray-600 fb">本周目标完成情况良好，继续保持！</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import ProgressUchart from './ProgressUchart.vue'
</script>

<style scoped></style>
