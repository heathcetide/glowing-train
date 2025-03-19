<template>
  <view class="w-100% h-336rpx text-#fff pos-relative mb-42rpx">
    <image :src="food.image" mode="scaleToFill" class="w-100% h-336rpx rounded-18rpx" />
    <view class="desc pos-absolute bottom-28rpx left-56rpx">
      <view class="title flex gap-10rpx">
        <text class="text-31.5rpx">{{ food.title }}</text>
        <up-tag color="#FFFFFF" border-color="#5DBE8A" plain-fill size="mini" bg-color="#5DBE8A">
          <text class="text-21rpx">推荐</text>
        </up-tag>
      </view>
      <view class="level flex items-center gap-30rpx text-24.5rpx">
        <view class="flex items-center gap-5rpx">
          <image :src="timeIcon" mode="scaleToFill" class="size-24.5rpx" />
          <text>{{ food.level }}难度</text>
        </view>
        <view class="flex items-center gap-5rpx">
          <uni-icons type="star" color="" size="16" />
          <text>{{ food.flavor }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FistPic from '@/static/image/cook/fish-pic.svg'
import timeIcon from '@/static/image/home/icon-time.svg'
import { getRandomFoodMenusAPI } from '@/services/food-menus/foodMenusBaseModule'

const food = ref()
// 页面加载后调用接口获取数据
onMounted(async () => {
  try {
    const res = await getRandomFoodMenusAPI()
    // 如果接口返回的数据在 res.data 中，则使用 res.data，否则直接使用 res
    food.value = res.data || res
    console.log(food.value)
  } catch (error) {
    console.error('获取食谱数据失败:', error)
  }
})
</script>

<style scoped></style>
