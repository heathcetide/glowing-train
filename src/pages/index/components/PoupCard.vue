<template>
  <view class="p-28rpx flex bg-#fff flex-col rounded-21rpx shadow1">
    <view class="title flex justify-between">
      <text>{{ title }}</text>
      <view class="img">
        <image :src="icon" class="size-56rpx" mode="scaleToFill" />
      </view>
    </view>
    <view class="img my-24rpx w-100%">
      <up-image :src="image" width="100%" height="160rpx" mode="scaleToFill" />
    </view>
    <text class="text-21rpx text-0">{{ subTitle }}</text>
  </view>
</template>

<script setup lang="ts">
import xx from '@/static/image/home/image-1.svg'
import Utils from '@/utils'

const props = withDefaults(
  defineProps<{
    title: string
    icon: string
    image: string
    subTitle: string
    url?: string
  }>(),
  {
    title: '饮食记录',
    icon: '',
    image: xx,
    subTitle: '已记录 3 餐',
  },
)

const handleTouchStart = () => {
  console.log('touchstart')
}
</script>

<style scoped></style>
