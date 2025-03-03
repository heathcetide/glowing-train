<template>
  <view class="shadow1 mt-48rpx p-28rpx">
    <view class="title mb-21rpx">存储位置</view>
    <uni-row :gutter="20">
      <uni-col :span="8" v-for="item in saveCondition" :key="item">
        <view
          class="bg-#F3F4F6 text-#4B5563 center w-100% h-70rpx rounded-8rpx"
          :class="{ active: item === SaveCondition.FROZEN }"
        >
          {{ item }}</view
        >
      </uni-col>
    </uni-row>
  </view>
</template>

<script setup lang="ts">
import { SaveCondition } from '@/enum/FoodEnum'

const saveCondition = ['冷藏', '冷冻', '常温']
</script>

<style scoped>
.active {
  background-color: #5dbe8a;
  color: #fff;
}
</style>
