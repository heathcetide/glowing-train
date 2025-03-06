<template>
  <!-- 健康数据概览 -->
  <view class="health-overview mt-20rpx gap28rpx flex">
    <template v-for="item in list" :key="item.title">
      <view class="col flex-1 shadow1 bg-light-50 rounded-lg p-16rpx mb-16rpx">
        <text class="block text-21rpx text-#9CA3AF">{{ item.title }}</text>
        <text class="text-31.5rpx">{{ item.value }}</text>
        <view class="text-21rpx text-#9CA3AF">{{ item.unit }}</view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
const list = [
  {
    title: '饮食计划',
    value: '1680',
    unit: '卡路里',
  },
  {
    title: '运动计划',
    value: '45',
    unit: '分钟/天',
  },
  {
    title: '健康评分',
    value: '88',
    unit: '良好',
  },
]
</script>

<style scoped></style>
