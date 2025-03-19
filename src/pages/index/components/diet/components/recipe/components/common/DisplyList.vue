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

    <scroll-view
      v-else
      scroll-y
      class="scroll-view"
      :refresher-triggered="trigger"
      :refresher-enabled="true"
      @refresherrefresh="onRefresh"
    >
      <view v-if="!isLoading && list.length == 0">没有这类菜普</view>
      <uni-row v-else :gutter="28" class="flex-wrap">
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
import { ref, watchEffect } from 'vue'

let timer = 0
const prop = defineProps<{
  list: FoodMeanu.FoodMeanuItem[]
}>()

const trigger = ref(false)
const isLoading = ref(true)

const emit = defineEmits(['refresh'])

watchEffect(() => {
  if (prop.list.length > 0) {
    isLoading.value = false
    return
  }
  timer = setTimeout(() => {
    isLoading.value = false
  }, 300)
})

const onRefresh = () => {
  trigger.value = true
  console.log('@@', prop.list[0])

  emit('refresh', prop.list[0].applicableType)
  setTimeout(() => {
    trigger.value = false
  }, 1000)
}
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 580rpx);
}
</style>
