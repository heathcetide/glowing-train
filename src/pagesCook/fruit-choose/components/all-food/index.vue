<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: height }">
    <view class="mt-42rpx px-28rpx">
      <view class="title text-31rpx font700 mt26rpx"> 今日推荐 </view>
      <uni-row :gutter="20">
        <uni-col :span="12" v-for="item in foodList" :key="item.id" class="mb-28rpx">
          <FoodCard :item="item" @click="handleClick" />
        </uni-col>
      </uni-row>
      <view>
        <view class="title text-31rpx font700 my26rpx"> 全部菜品 </view>
        <uni-row :gutter="20">
          <uni-col v-for="item in foodList" :key="item.id" class="mb-28rpx">
            <FoodCard2 :item="item" @click="handleClick" />
          </uni-col>
        </uni-row>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { ref, onMounted } from 'vue'
import FoodCard from '../../common/FoodCard.vue'
import FoodCard2 from '../../common/FoodCard2.vue'
import type { CookModule } from '@/types/component'
import useCookStore from '@/stores/modules/cook'

const cookStore = useCookStore()
const { safeAreaInsets } = uni.getWindowInfo()
const height = computed(() => {
  const dis = safeAreaInsets.bottom + safeAreaInsets.top + 'px' || 320 + 'rpx'
  return `calc(100vh - 50rpx - ${dis})`
})
const foodList = cookStore.defaultList

const handleClick = (item: CookModule.FoodCardItem) => {
  cookStore.addDiet(item)
  console.log(item)
}

// 页面加载时读取本地存储的数据
onMounted(() => {
  console.log('store: ', cookStore.defaultList)
  // 从本地存储获取推荐食物
  // uni.getStorage({
  //   key: 'recommendedFoods',
  //   success: (res) => {
  //     if (res.data && Array.isArray(res.data)) {
  //       // 如果从存储中获取到推荐食物数据，赋值给 foodList
  //       // foodList.value = res.data
  //     } else {
  //       console.log('没有找到推荐食物数据')
  //     }
  //   },
  //   fail: () => {
  //     console.log('无法获取推荐食物数据')
  //   },
  // })
})
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - 320rpx);
}
</style>
