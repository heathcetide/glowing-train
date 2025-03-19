<template>
  <view class="wrap">
    <uni-nav-bar
      fixed
      z-10
      statusBar
      class="shadow1"
      left-icon="left"
      left-text="返回"
      :title="navTitle"
      height="100"
      @clickLeft="goBack"
    />
    <view class="image w-100%">
      <image :src="detail.image" mode="scaleToFill" class="w-100%" />
    </view>

    <DietDetailsCard
      :title="detail.title"
      :intro="detail.intro"
      :level="detail.level"
      :needFoodS="getNeedFoodS"
      :time="detail.duration"
    />
  </view>
</template>

<script setup lang="ts">
import DietDetailsCard from './components/DietDetailsCard.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getFoodMenuByIdAPI } from '@/services/food-menus/foodMenusBaseModule'
import { computed, ref } from 'vue'
import type { FoodMeanu } from '@/types/food'

const navTitle = ref('食谱')
const detail = ref<FoodMeanu.FoodMeanuItem>({} as FoodMeanu.FoodMeanuItem)
const getDetials = async (id: string) => {
  const res = await getFoodMenuByIdAPI(id)

  detail.value = res as unknown as FoodMeanu.FoodMeanuItem

  navTitle.value = detail.value.title + '食谱'
}
interface Item {
  name: string
  value: string
}

const getNeedFoodS = computed<Item[]>(() => {
  const { ingredients } = detail.value
  const needs = JSON.parse(ingredients || '[]')

  return Object.entries(needs).map(([key, value]) => {
    return {
      name: key,
      value: value,
    }
  }) as Item[]
})

onLoad((item) => {
  getDetials(item?.id)
})
const goBack = () => {
  uni.navigateBack()
}
</script>
<style lang="scss" scoped>
.right_icon {
  display: flex;
  gap: 10rpx;
}
.image {
  width: 750rpx;
  height: 448rpx;

  image {
    width: 100%;
  }
}
</style>
