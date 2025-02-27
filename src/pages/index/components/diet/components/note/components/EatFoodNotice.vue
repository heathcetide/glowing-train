<template>
  <view>
    <view class="title flex gap-6rpx items-center">
      <image :src="sanchan[0].icon" class="w-31.27rpx h-31.27rpx" mode="scaleToFill" />
      <view class="flex gap-6rpx">
        <text>{{ sanchan[0].title }}</text>
        <text>{{ sanchan[0].time }}</text>
      </view>
    </view>

    <view class="card mt-20rpx mb-46rpx p-22rpx rounded-14rpx flex-row gap-14rpx bg-#F9FAFB shadow">
      <view class="card_item flex justify-between" v-for="item in eatContent" :key="item.name">
        <text class="text-24.5rpx text-#374151">{{ item.name }}</text>
        <text class="text-#6B7280 text-24.5rpx">{{ item.energe }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconBreakfast from '@/static/image/home/icon-breakfrest.svg'
import IconLounch from '@/static/image/home/icon-lounch.svg'

const sanchan = [
  {
    icon: IconBreakfast,
    title: '早餐',
    time: '8:30',
  },
  {
    icon: IconLounch,
    title: '午餐',
    time: '12:30',
  },
]

const eatContent = [
  {
    name: '全麦面包',
    energe: '120卡路里',
  },
  {
    name: '牛奶',
    energe: '150卡路里',
  },
  {
    name: '鸡蛋',
    energe: '80卡路里',
  },
]
</script>

<style lang="scss" scoped></style>
