<template>
  <!-- AI健康建议区 -->
  <view class="suggestions">
    <text class="text-32rpx font-medium block mb-24rpx">AI健康建议</text>
    <view
      v-for="(item, index) in suggestions"
      :key="index"
      class="suggestion-card bg-white rounded-lg p-24rpx mb-16rpx shadow-sm flex items-center"
    >
      <view class="mb-16rpx">
        <image :src="item.icon" class="size-84rpx mr-16rpx" />
      </view>
      <view class="flex-col-nocenter">
        <text class="font-medium">{{ item.title }}</text>
        <text class="fb text-#4B5563">{{ item.content }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import sleep from '@/static/icons/ai-sleep.svg'
import run from '@/static/icons/ai-run.svg'
import nutrition from '@/static/icons/ai-nutrition.svg'

const suggestions = [
  {
    icon: run,
    title: '今日运动建议',
    content: '建议进行30分钟中等强度有氧运动，可以选择快 走或慢跑',
  },
  {
    icon: nutrition,
    title: '营养建议',
    content: '今日蛋白质摄入不足，建议晚餐增加瘦肉或鱼类 的摄入',
  },
  {
    icon: sleep,
    title: '睡眠优化',
    content: '昨晚睡眠质量良好，建议保持当前的作息时间',
  },
]
</script>

<style scoped></style>
