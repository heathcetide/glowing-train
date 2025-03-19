<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <CookNavBar title="菜品选择" />
    <view v-if="!foodList" class="col h-100vh">
      <up-loading-icon
        :size="30"
        color="#5DBE8A"
        text="数据加载中..."
        text-size="40rpx"
        text-color="#5DBE8A"
      ></up-loading-icon>
    </view>
    <view v-else>
      <view class="contain py-32rpx">
        <scroll-view scroll-y class="scroll-view" :style="{ height: height }">
          <view class="px-28rpx">
            <view class="title text-31rpx font700 mt26rpx mb-10rpx"> 今日推荐 </view>
            <uni-row :gutter="20">
              <uni-col :span="12" v-for="item in recommendedFood" :key="item.id" class="mb-28rpx">
                <FoodCard :item="item" @click="handleClick" />
              </uni-col>
            </uni-row>
            <view>
              <view class="title text-31rpx font700 my26rpx"> 全部菜品 </view>
              <uni-row :gutter="20">
                <uni-col v-for="item in otherFood" :key="item.id" class="mb-28rpx">
                  <FoodCard2 :item="item" @click="handleClick" />
                </uni-col>
              </uni-row>
            </view>
          </view>
        </scroll-view>
      </view>
      <view
        class="bg-#fff w-100% center pos-fixed bottom-20rpx w-100% px-40rpx py-20rpx shadow-0_-20rpx_5rxp_0_#333 flex justify-between"
      >
        <view> 已选择 {{ cookStore.totalNum }} 道菜 | 预估{{ cookStore.totalkcal }} kcal </view>
        <view> <button class="bg-#5DBE8A text-#fff px-20rpx py-10rpx" @click="goToCalc">结算</button></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getRankFoodMenu } from '@/services/rank/rankBaseModule'
import CookNavBar from '../common/CookNavBar.vue'
import Utils from '@/utils'
import { computed, h } from 'vue'
import { ref, onMounted } from 'vue'
import FoodCard from './common/FoodCard.vue'
import FoodCard2 from './common/FoodCard2.vue'
import type { CookModule } from '@/types/component'
import useCookStore from '@/stores/modules/cook'
import type { FoodMeanu } from '@/types/food'

const cookStore = useCookStore()
const { safeAreaInsets } = uni.getWindowInfo()
const height = computed(() => {
  const dis = safeAreaInsets.bottom + safeAreaInsets.top + 'px' || 320 + 'rpx'
  return `calc(100vh - 150rpx - ${dis})`
})
const foodList = ref()

const handleClick = (item: CookModule.FoodCardItem) => {
  cookStore.addDiet(item)
  console.log(item)
}

const keyword = ref()

// 跳转到结算页面
const goToCalc = () => {
  Utils.navigateTo('/pagesCook/calc-food/index')
}

onMounted(async () => {
  const list = await getRankFoodMenu()
  foodList.value = list.data.map((item: FoodMeanu.FoodMeanuItem) => {
    return {
      ...item,
      kcal: Math.floor(Math.random() * 100 + 100),
      num: 0,
    }
  })
  console.log('foodList', foodList.value)
})

// 计算属性：推荐菜品 - 前四个
const recommendedFood = computed<CookModule.FoodCardItem[]>(() => {
  return foodList.value?.slice(0, 4)
})
// 计算属性：全部菜品 - 最后六个倒序排列
const otherFood = computed(() => {
  const len = foodList.value.length
  // console.log('len', len)

  // eslint-disable-next-line no-unsafe-optional-chaining
  return len >= 6 ? [...foodList.value?.slice(len - 6)].reverse() : []
})
</script>

<style scoped></style>
