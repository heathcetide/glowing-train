<template>
  <view class="wrap px-28rpx" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <SGCalender />
    <scroll-view scroll-y class="scroll-view">
      <HealthDate />
      <FuncationArea />
      <TodayDielt />
      <TodayExecrise />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import FuncationArea from './components/FuncationArea.vue'
import TodayDielt from './components/TodayDielt.vue'
import TodayExecrise from './components/TodayExecrise.vue'
import HealthDate from './components/HealthDate.vue'

const safeAreaInsets = uni.getWindowInfo().safeAreaInsets
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - var(--status-bar-height) - 360rpx);
}
</style>
