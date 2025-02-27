<template>
  <CookNavBar title="菜品选择" />
  <view class="p-28rpx col gap-28rpx">
    <FoodCalcCard index="1" />
    <FoodCalcCard index="2" />
    <FoodCalcCard index="3" />
    <NutritionPanel />
  </view>

  <view class="btns pos-fixed pos-bottom-10rpx w-100% p-28rpx flex gap-28rpx text-28rpx">
    <button class="bg-#F5F5F5 flex-1 text-#333333" @click="onBack">继续选择</button>
    <button class="bg-#5DBE8A flex-1 text-white" @click="onStart">确认并开始</button>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'
import FoodCalcCard from './components/FoodCalcCard.vue'
import NutritionPanel from './components/NutritionPanel.vue'
import CookNavBar from '../common/CookNavBar.vue'

const onBack = () => {
  Utils.navigateBack()
}

const onStart = () => {
  Utils.navigateTo('/pagesCook/prepare/index')
}
</script>

<style scoped></style>
