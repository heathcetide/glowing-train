<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="mt-42rpx px-28rpx">
      <view class="title text-31rpx font700 mt26rpx"> 今日推荐 </view>
      <uni-row :gutter="20">
        <uni-col :span="12" v-for="item in foodList" :key="item.id" class="mb-28rpx">
          <FoodCard :item="item" />
        </uni-col>
      </uni-row>

      <view>
        <view class="title text-31rpx font700 my26rpx"> 全部菜品 </view>
        <uni-row :gutter="20">
          <uni-col v-for="item in foodList" :key="item.id" class="mb-28rpx">
            <FoodCard2 :item="item" />
          </uni-col>
        </uni-row>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import FoodCard from '../../common/FoodCard.vue'
import FoodCard2 from '../../common/FoodCard2.vue'
import icon1 from '@/static/image/cook/food-pic1.svg'
import icon2 from '@/static/image/cook/food-pic2.svg'

const foodList = [
  {
    id: 1,
    icon: icon1,
    title: '烤鱼',
    desc: '烤鱼',
  },
  {
    id: 2,
    icon: icon2,
    title: '烤鱼',
    desc: '烤鱼',
  },

  {
    id: 3,
    icon: icon1,
    title: '烤鱼',
    desc: '烤鱼',
  },
  {
    id: 4,
    icon: icon2,
    title: '烤鱼',
    desc: '烤鱼',
  },
]
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - 320rpx);
}
</style>
