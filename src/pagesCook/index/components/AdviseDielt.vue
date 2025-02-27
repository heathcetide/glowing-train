<template>
  <view class="w-100% h-336rpx text-#fff pos-relative mb-42rpx">
    <image :src="FistPic" mode="scaleToFill" class="w-100% h-336rpx rounded-18rpx" />
    <view class="desc pos-absolute bottom-28rpx left-56rpx">
      <view class="title flex gap-10rpx">
        <text class="text-31.5rpx">清蒸鱼</text>
        <up-tag color="#FFFFFF" border-color="#5DBE8A" plain-fill size="mini" bg-color="#5DBE8A">
          <text class="text-21rpx">推荐</text>
        </up-tag>
      </view>
      <view class="level flex items-center gap-30rpx text-24.5rpx">
        <view class="flex items-center gap-5rpx">
          <image :src="timeIcon" mode="scaleToFill" class="size-24.5rpx" />
          <text>普通难度</text>
        </view>
        <view class="flex items-center gap-5rpx">
          <uni-icons type="star" color="" size="16" />
          <text>普通难度</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import FistPic from '@/static/image/cook/fish-pic.svg'
import timeIcon from '@/static/image/home/icon-time.svg'
</script>

<style scoped></style>
