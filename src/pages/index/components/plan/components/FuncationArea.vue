<template>
  <!-- 功能区 -->
  <view class="grid grid-cols-4 gap-16rpx my-32rpx">
    <view v-for="item in list" :key="item.title" class="col">
      <view>
        <image :src="item.icon" class="size-100rpx rounded-full mx-auto" />
      </view>
      <text class="block mt-8rpx text-21rpx text-#4B5563">{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import icon1 from '@image/icon-ai-comment.svg'
import icon2 from '@image/icon-change.svg'
import icon3 from '@image/icon-progress.svg'
import icon4 from '@image/icon-anlays.svg'
const list = [
  { icon: icon1, title: 'AI推荐' },
  { icon: icon2, title: '参与挑战' },
  { icon: icon3, title: '目标进度  ' },
  { icon: icon4, title: '数据分析' },
]
</script>

<style scoped></style>
