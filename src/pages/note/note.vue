<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="wrap px-28rpx py-22rpx text-24.5rpx">
      <uni-row :gutter="20">
        <uni-col :span="6" v-for="(item, index) in tags" :key="item">
          <view
            class="item bg-#fff center w-100% px-26rpx py-16rpx rounded-16rpx"
            :class="{ active: activeIndex === index }"
            @click="activeIndex = index"
          >
            {{ item }}
          </view>
        </uni-col>
      </uni-row>

      <view class="search p-28rpx bg-#fff mt-42rpx rounded-16rpx flex-col-nocenter gap28rpx">
        <view class="rounded-16rpx bg-#F5F5F5 px-28rpx py-16rpx">
          <up-input placeholder="搜索食材或菜品" border="none">
            <template #prefix>
              <uni-icons type="search" color="#333333" size="20" />
            </template>
          </up-input>
        </view>
        <view class="flex items-center">
          <view class="rounded-16rpx bg-#F5F5F5 px-28rpx py-16rpx">
            <up-input border="none" placeholder="请输入重量" />
          </view>
          <text class="text-28rpx text-center flex-1">克</text>
        </view>
        <button class="bg-#5DBE8A w-100% rounded-16rpx text-#fff">确认添加</button>
      </view>

      <!-- 添加的食物 -->
      <view class="mt-42rpx p-28rpx bg-#fff rounded-21rpx">
        <view class="title text-0 fb juslr mb-21rpx">
          <text>添加的食物</text>
          <text>共 3 项</text>
        </view>
        <view class="list flex-col-nocenter gap-21rpx">
          <view class="item py-8rpx flex gap-10rpx text-0 borderb" v-for="item in list" :key="item.id">
            <image :src="item.icon" class="size-84rpx" mode="scaleToFill" />
            <view class="contain flex-1 flex-col-nocenter">
              <text class="title">{{ item.title }}</text>
              <text class="weight">{{ item.weight }}</text>
            </view>
            <view>
              <text>{{ item.kcal }} kcal</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 营养数据概览 -->
      <view class="mt-42rpx p-28rpx bg-#fff rounded-21rpx">
        <view class="title text-0 mb-21rpx">
          <text>营养数据概览</text>
        </view>
        <uni-row>
          <uni-col :span="8" v-for="item in nutrition" :key="item.name">
            <view class="text-0 col">
              <view class="value text-31.5rpx text-#5DBE8A">{{ item.value }}</view>
              <view class="value">{{ item.name }}</view>
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
  </view>

  <!-- 立即记录 -->
  <view class="bg-#fff px-28rpx py-30rpx w-750rpx pos-fixed pos-bottom-0">
    <button class="bg-#5DBE8A text-#fff">+ 立即记录</button>
  </view>
</template>

<script setup lang="ts">
import IconXiaomi from '@image/icon-smimi.svg'

const { safeAreaInsets } = uni.getWindowInfo()
import { ref } from 'vue'
const activeIndex = ref(0)
const tags = ['早餐', '午餐', '晚餐', '加餐']

const list = [
  {
    icon: IconXiaomi,
    title: '小米粥',
    kcal: 168,
    weight: 100,
    id: 1,
  },
  {
    icon: IconXiaomi,
    title: '小米粥',
    kcal: 168,
    weight: 100,
    id: 1,
  },
  {
    icon: IconXiaomi,
    title: '小米粥',
    kcal: 168,
    weight: 100,
    id: 1,
  },
]

const nutrition = [
  {
    name: '卡路里',
    value: 328,
  },
  {
    name: '蛋白质(g)',
    value: 12.5,
  },
  {
    name: '脂肪(g)',
    value: 25.8,
  },
]
</script>
<style lang="scss" scoped>
.active {
  color: #fff;
  background-color: #5dbe8a;
}

page {
  background-color: #f5f5f5;
}
</style>
