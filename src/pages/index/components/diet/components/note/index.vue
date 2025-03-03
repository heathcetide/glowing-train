<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="wrap p-28rpx rounded-14rpx">
      <CustomSearch v-model="search" @confirm="handleSearch" />
      <NutritionAnalyzeChart />
      <EatFoodNotice />
      <EatFoodNotice />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomSearch from '../common/CustomSearch.vue'

import NutritionAnalyzeChart from './components/NutritionAnalyzeChart.vue'
import EatFoodNotice from './components/EatFoodNotice.vue'
const handleSearch = (value: string) => {
  console.log('@', value)
}
const search = ref('')
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 200rpx - 44px);
}
</style>
