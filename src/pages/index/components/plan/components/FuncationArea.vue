<template>
  <!-- 功能区 -->
  <view class="grid grid-cols-4 gap-16rpx my-32rpx">
    <view v-for="item in list" :key="item.title">
      <view class="feature-item size-100rpx bg-blue-100 rounded-full p-16rpx text-center">
        <image :src="item.icon" class="w-48rpx h-48rpx mx-auto" />
      </view>
      <text class="block mt-8rpx text-21rpx text-#4B5563">{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const list = [
  { icon: '/static/icons/ai.png', title: 'AI推荐' },
  { icon: '/static/icons/ai.png', title: '参与挑战' },
  { icon: '/static/icons/ai.png', title: '目标进度  ' },
  { icon: '/static/icons/ai.png', title: '数据分析' },
]
</script>

<style scoped></style>
