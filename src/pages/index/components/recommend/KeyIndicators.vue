<template>
  <!-- 关键指标区 -->
  <view class="list">
    <text class="text-32rpx font-medium block mb-24rpx">关键指标</text>
    <view class="indicators grid grid-cols-2 gap-16rpx mb-32rpx">
      <view
        v-for="(item, index) in indicators"
        :key="index"
        class="indicator-card gap14rpx bg-white rounded-lg p-24rpx shadow-sm flex-col-nocenter justify-center"
        @click="onLook(item?.url)"
      >
        <view class="flex items-center gap14rpx">
          <image :src="item.icon" class="w-48rpx h-48rpx mb-16rpx" />
          <!-- <view class="bg-red rounded-full size-50rpx"></view> -->
          <text class="block fb font-medium mb-8rpx">{{ item.label }}</text>
        </view>
        <text class="text-32rpx text-#6B7280">
          {{ item.value }}
          <text class="text-21rpx">{{ item.unit }}</text>
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import heart from '@/static/icons/heart.svg'
import run from '@/static/icons/run.svg'
import sleep from '@/static/icons/sleep.svg'
import kcal from '@/static/icons/kcal.svg'
const indicators = [
  {
    icon: heart,
    label: '心率',
    value: '72',
    unit: 'BPM',
    url: '/pagesHealthyData/heart-rate',
  },
  {
    icon: run,
    label: '步数',
    value: '8,426',
    unit: '步',
    url: '/pagesHealthyData/healthy-data',
  },
  {
    icon: kcal,
    label: '卡路里',
    value: '1,860',
    unit: 'kcal',
    url: '/pagesHealthyData/kcal-data',
  },
  {
    icon: sleep,
    label: '睡眠',
    value: '7.5',
    unit: 'h',
    url: '/pagesHealthyData/healthy-sleep',
  },
]

const onLook = (url: string | undefined) => {
  uni.navigateTo({
    url: url!,
  })
}
</script>

<style scoped></style>
