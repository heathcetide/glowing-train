<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: hetght }">
    <view class="px-28rpx h-100% flex flex-col gap-28rpx">
      <ActivityCard :item />
      <ActivityCard :item />
      <ActivityCard :item />
      <ActivityCard :item />
      <ActivityCard :item />
      <ActivityCard :item />
      <ActivityCard :item />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import type { Community } from '@/types/component'
import ActivityCard from '../common/ActivityCard.vue'
import IconCover3 from '@/static/image/community/icon-activity-cover3.svg'
import { computed } from 'vue'
const { safeAreaInsets } = uni.getWindowInfo()

const hetght = computed(() => {
  console.log('safeAreaInsets: ', safeAreaInsets.bottom + safeAreaInsets.top)

  return `calc(100vh - 50rpx - ${safeAreaInsets.bottom + safeAreaInsets.top + 50}px)`
})
const item: Community.ActivityCardProps = {
  activityTitle: '低卡美味料理分享会',
  cover: IconCover3,
  desc: '达人教你做出美味又健康的低卡料理',
  participants: 1256,
}
</script>

<style scoped lang="scss"></style>
