<template>
  <view class="mt-22rpx">
    <view class="px-28rpx">添加的食材信息：</view>
    <view class="iten juslr items-center">
      <view class="flex gap-20rpx">
        <up-image :src="IconTab1" width="84rpx" height="84rpx" />
        <view class="fb flex-col-nocenter gap7rpx">
          <view class="title">鸡蛋</view>
          <view class="title">1个/份 </view>
        </view>
      </view>

      <view class="text-0 text-21rpx flex-col-nocenter gap7rpx">
        <view> 食材类别：肉禽蛋品 </view>
        <view>新增库存：2个 </view>
        <view>保质期至2025-03-01 </view>
        <view>存储位置：冷藏 </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconTab1 from '@image/icon-tab1.svg'
</script>

<style scoped></style>
