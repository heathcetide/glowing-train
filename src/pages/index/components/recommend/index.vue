<template>
  <ProgressCard />
  <scroll-view scroll-y class="scroll-view mb-30rpx">
    <KeyIndicators />
    <AiSuggextion />
    <DisplyList :list="list" />
  </scroll-view>

  <up-loading-page :loading="list.length === 0"></up-loading-page>
</template>

<script setup lang="ts">
import AiSuggextion from './AiSuggextion.vue'
import KeyIndicators from './KeyIndicators.vue'
import DisplyList from '../diet/components/recipe/components/common/DisplyList.vue'
import ProgressCard from '../ProgressCard.vue'
import { onMounted, ref } from 'vue'
import { getFoodMenusAPI } from '@/services/food-menus/foodMenusBaseModule'
import type { FoodMeanu } from '@/types/food'

const list = ref<FoodMeanu.FoodMeanuItem[]>([])
const getData = async () => {
  const { data } = await getFoodMenusAPI('营养餐单')
  list.value = data
}

onMounted(() => {
  getData()
})
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - var(--status-bar-height));
}
.notice {
  display: flex;
  background-color: #eff6ff;
  justify-content: start;
  align-items: center;
  padding: 28rpx 22rpx;
  border-radius: 14rpx;
  gap: 10rpx;
  margin-bottom: 14rpx;

  .text {
    color: #2563eb;
    font-weight: 300;
    font-size: 28rpx;
    line-height: 42rpx;
  }

  .img {
    width: 21rpx;
    height: 28rpx;
  }
}
</style>
