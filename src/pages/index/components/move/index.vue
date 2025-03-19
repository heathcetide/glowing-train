<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="wrap">
      <KeyIndicators />
      <AiSuggestion />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import AiSuggestion from './components/AiSuggextion.vue'
import KeyIndicators from './components/KeyIndicators.vue'
// import WeightData from './components/WeightData.vue'
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - var(--status-bar-height) - 200rpx) !important;
}
</style>
