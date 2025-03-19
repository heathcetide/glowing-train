<template>
  <view class="flex-col justify-center">
    <view v-if="isLoading" class="col h-50vh">
      <up-loading-icon
        :size="30"
        color="#5DBE8A"
        text="数据加载中..."
        text-size="40rpx"
        text-color="#5DBE8A"
        :duration="300"
      ></up-loading-icon>
    </view>
    <view v-else-if="!isLoading && list.length == 0">没有这类菜普</view>
    <scroll-view v-else scroll-y class="scroll-view">
      <uni-row :gutter="28" class="flex-wrap">
        <uni-col :span="12" v-for="item in list" :key="item.title">
          <RecipeCard :id="item.id" :src="item.image" :title="item.title" :tags="item.tags" :time="item.duration" />
        </uni-col>
      </uni-row>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import RecipeCard from '../common/RecipeCard.vue'
import type { FoodMeanu } from '@/types/food'
import { onMounted, ref, watchEffect } from 'vue'

let timer = 0
const prop = defineProps<{
  list: FoodMeanu.FoodMeanuItem[]
}>()

const isLoading = ref(true)

watchEffect(() => {
  if (prop.list.length > 0) {
    isLoading.value = false
    return
  }
  timer = setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 580rpx);
}
</style>
