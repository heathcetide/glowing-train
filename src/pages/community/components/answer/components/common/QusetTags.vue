<template>
  <view class="text-24.5rpx px-28rpx flex gap-12rpx">
    <view v-for="item in tags" :key="item.title" class="flex rounded-18rpx items-center gap-8rpx box-shadow">
      <image :src="item.icon" class="w-21.44rpx h-24.5rpx px-28rpx py-14rpx" mode="scaleToFill" />
      <text>{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconDiet from '@/static/image/community/icon-diet.svg'
import IconMove from '@/static/image/community/icon-move.svg'
import IconApple from '@/static/image/community/icon-apple.svg'

const tags = [
  { icon: IconDiet, title: '健康计划' },
  { icon: IconMove, title: '运动计划' },
  { icon: IconApple, title: '饮食计划' },
]
</script>

<style scoped>
.box-shadow {
  box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.05);
}
</style>
