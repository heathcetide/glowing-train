<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <SearchBar />
    <view class="container px-28rpx pt-22rpx">
      <HistoryNote />
      <HotSearch :list="hostList" />
    </view>
  </view>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import HistoryNote from './components/HistoryNote.vue'
import HotSearch from './components/HotSearch.vue'

const { safeAreaInsets } = uni.getWindowInfo()

const hostList = [
  { title: '低卡减脂餐', num: 12543 },
  { title: '轻食沙拉', num: 10234 },
  { title: '蒸菜食谱', num: 9876 },
  { title: '营养早餐', num: 6000 },
  { title: '瘦身食谱', num: 1250 },
  { title: '健康午餐', num: 12 },
]
</script>

<style scoped></style>
