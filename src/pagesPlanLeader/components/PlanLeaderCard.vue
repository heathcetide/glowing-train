<template>
  <view class="item px-32rpx py-36rpx flex gap-16rpx bg-#fff border-4rpx b-#F5F5F5 b-solid rounded-20rpx">
    <up-image :src="icon" width="152rpx" height="152rpx" mode="aspectFit" />
    <view class="box flex justify-between w-100% items-center">
      <view class="desc flex flex-col p-24rpx gap-6rpx">
        <text class="title text-31.5rpx"> {{ title }} </text>
        <text class="title text-24.5rpx text-0">{{ subTitle }} </text>
      </view>
      <view class="narrow">
        <uni-icons type="right" color="#9CA3AF" size="24" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import PicSec from '@/static/image/plan-leader/icon-planleader-sec-1.svg'

interface Props {
  icon: string
  title: string
  subTitle: string
}

withDefaults(defineProps<Props>(), {
  icon: PicSec,
  title: '减脂塑形',
  subTitle: ' 燃烧脂肪，塑造理想体态',
})
</script>

<style scoped></style>
