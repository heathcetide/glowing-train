<template>
  <view class="wrap w-100% bg-#fff">
    <view class="center">
      <view class="title w-260rpx text-#ADA4A5 text-20rpx juslr items-center">
        <uni-icons type="left" color="" size="15" />
        <text>2025 年 3月</text>
        <uni-icons type="right" color="" size="15" />
      </view>
    </view>
    <view class="juslr text-24.5rpx">
      <view v-for="item in data" :key="item.week">
        <view class="item col">
          <text>{{ item.week }}</text>
          <view class="rounded-full size-50rpx center" :class="{ 'bg-#5DBE8A text-#fff': item.data == '10' }">{{
            item.data
          }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const data = [
  { week: '一', data: '8' },
  { week: '二', data: '9' },
  { week: '三', data: '10' },
  { week: '四', data: '11' },
  { week: '五', data: '12' },
  { week: '六', data: '13' },
  { week: '日', data: '14' },
]
</script>

<style scoped></style>
