<template>
  <!-- AI健康建议区 -->
  <view class="suggestions px-32rpx">
    <text class="text-32rpx font-medium block mb-24rpx">AI健康建议</text>
    <view
      v-for="(item, index) in suggestions"
      :key="index"
      class="suggestion-card bg-white rounded-lg p-24rpx mb-16rpx shadow-sm flex items-center"
    >
      <view class="mb-16rpx">
        <image :src="item.icon" class="w-40rpx h-40rpx mr-16rpx" />
      </view>
      <view class="flex-col-nocenter">
        <text class="font-medium">{{ item.title }}</text>
        <text class="fb text-#4B5563">{{ item.content }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import xx from '@image/cook/met.svg'

const suggestions = [
  {
    icon: xx,
    title: '今日运动建议',
    content: '建议进行30分钟中等强度有氧运动，可以选择快 走或慢跑',
  },
  {
    icon: xx,
    title: '营养建议',
    content: '今日蛋白质摄入不足，建议晚餐增加瘦肉或鱼类 的摄入',
  },
  {
    icon: xx,
    title: '睡眠优化',
    content: '昨晚睡眠质量良好，建议保持当前的作息时间',
  },

  {
    icon: xx,
    title: '今日运动建议',
    content: '建议进行30分钟中等强度有氧运动，可以选择快 走或慢跑',
  },
  {
    icon: xx,
    title: '营养建议',
    content: '今日蛋白质摄入不足，建议晚餐增加瘦肉或鱼类 的摄入',
  },
  {
    icon: xx,
    title: '睡眠优化',
    content: '昨晚睡眠质量良好，建议保持当前的作息时间',
  },
]
</script>

<style scoped></style>
