<template>
  <view class="p-28rpx flex bg-#fff flex-col rounded-21rpx shadow1" @clic="handleClick">
    <view class="title flex justify-between">
      <text>{{ title }}</text>
      <view class="img size-28rpx bg-#ECFDF5">
        <image :src="icon" class="size-24.5rpx" mode="scaleToFill" />
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
import Icon from '@/static/image/home/icon-run-man.svg'
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
    icon: Icon,
    image: xx,
    subTitle: '已记录 3 餐',
  },
)

const handleClick = () => {
  if (props.url) {
    Utils.navigateTo(props.url)
  }
}
</script>

<style scoped></style>
