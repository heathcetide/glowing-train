<template>
  <view class="shadow1 p-28rpx rounded-18rpx bg-#fff h-210rpx">
    <view class="text-#333333 justify-between text-28rpx flex mb-28rpx">
      <text>今日摄入量</text>
      <text>目标 2000 kcal</text>
    </view>
    <view class="process">
      <up-line-progress :percentage="30" :show-text="false" activeColor="#5DBE8A"></up-line-progress>
      <view class="mt-14rpx center text-31.5rpx text-#5DBE8A"> 1200 / 2000 kcal </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
