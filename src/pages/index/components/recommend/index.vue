<template>
  <view class="notice">
    <image class="img" :src="IconWater"></image>
    <text class="text">该喝水啦！</text>
  </view>
  <ProgressCard />
  <scroll-view scroll-y class="scroll-view">
    <TabContent />
  </scroll-view>
</template>

<script setup lang="ts">
import TabContent from './TabContent.vue'
import ProgressCard from '../ProgressCard.vue'
import IconWater from '@/static/image/home/icon-water.svg'
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.notice {
  display: flex;
  background-color: #eff6ff;
  justify-content: start;
  align-items: center;
  padding: 28rpx 22rpx;
  border-radius: 14rpx;
  gap: 10rpx;
  margin-bottom: 14rpx;

  .text {
    color: #2563eb;
    font-weight: 300;
    font-size: 28rpx;
    line-height: 42rpx;
  }

  .img {
    width: 21rpx;
    height: 28rpx;
  }
}
</style>
