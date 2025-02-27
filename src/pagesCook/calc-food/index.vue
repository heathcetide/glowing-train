<template>
  <CookNavBar title="菜品选择" />
  <view class="p-28rpx col gap-28rpx">
    <view v-for="(item, index) in foodList" :key="item.id">
      <FoodCalcCard :index="index" />
    </view>
    <NutritionPanel />
  </view>

  <view class="btns pos-fixed pos-bottom-10rpx w-100% p-28rpx flex gap-28rpx text-28rpx">
    <button class="bg-#F5F5F5 flex-1 text-#333333" @click="onBack">继续选择</button>
    <button class="bg-#5DBE8A flex-1 text-white" @click="onStart">确认并开始</button>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Utils from '@/utils'
import FoodCalcCard from './components/FoodCalcCard.vue'
import NutritionPanel from './components/NutritionPanel.vue'
import CookNavBar from '../common/CookNavBar.vue'

const onBack = () => {
  Utils.navigateBack()
}
// 定义一个 foodList 存储食物列表
const foodList = ref<any[]>([])

onMounted(() => {
  // 从本地存储获取推荐食物
  uni.getStorage({
    key: 'recommendedFoods',
    success: (res) => {
      if (res.data && Array.isArray(res.data)) {
        // 如果从存储中获取到推荐食物数据，赋值给 foodList
        foodList.value = res.data
      } else {
        console.log('没有找到推荐食物数据')
      }
    },
    fail: () => {
      console.log('无法获取推荐食物数据')
    },
  })
})

const onStart = () => {
  Utils.navigateTo('/pagesCook/prepare/index')
}
</script>

<style scoped></style>
