<template>
  <view class="p-28rpx w-100%">
    <view class="juslr">
      <text class="text-#374151">我的成就</text>
      <text class="text-21rpx text-#6B7280">已获得 12 枚徽章</text>
    </view>
    <view class="p-28rpx w-100% juslr">
      <view class="item col text-21rpx text-#4B5563 gap14rpx" v-for="item in tabs" :key="item.title">
        <image v-if="item.icon" src="" mode="scaleToFill" class="size-100rpx" />
        <view v-else src="" class="size-100rpx bg-#5DBE8A rounded-full" />
        <text>{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const tabs = [
  { icon: '', title: '绿色先锋' },
  { icon: '', title: '年度贡献' },
  { icon: '', title: '优质创作' },
  { icon: '', title: '待解锁' },
]
</script>

<style scoped></style>
