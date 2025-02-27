<template>
  <view class="card">
    <view class="title mb-28rpx">{{ title }}</view>
    <view class="containt flex justify-between gap-21rpx">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
