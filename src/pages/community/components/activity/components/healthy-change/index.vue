<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: hetght }">
    <view class="px-28rpx h-100% flex flex-col gap-28rpx">
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ActivityCard from '../common/ActivityCard.vue'
const { safeAreaInsets } = uni.getWindowInfo()

const hetght = computed(() => {
  console.log('safeAreaInsets: ', safeAreaInsets.bottom + safeAreaInsets.top)

  return `calc(100vh - 50rpx - ${safeAreaInsets.bottom + safeAreaInsets.top + 50}px)`
})
</script>

<style scoped lang="scss"></style>
