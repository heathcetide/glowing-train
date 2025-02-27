<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="px-28rpx h-100% flex flex-col gap-28rpx">
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import ActivityCard from '../common/ActivityCard.vue'
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 500rpx);
}
</style>
