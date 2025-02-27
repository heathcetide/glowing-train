<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CookNavBar title="烹饪进行中" />
    <view class="px-26rpx">
      <up-line-progress percentage="70" activeColor="#5DBE8A" :height="5" :show-text="false" />

      <view class="w-100% flex flex-col gap-20rpx my-22rpx text-35rpx">
        <up-image :src="IconBg" mode="aspectFit" width="100%" height="300rpx" />
        <text>青椒炒牛肉</text>
      </view>
      <scroll-view scroll-y class="h-1000rpx" :show-scrollbar="true">
        <view class="containt flex flex-col gap-28rpx">
          <view
            class="item border-2rpx border-solid b-#F5F5F5 bg-#fff p-30rpx rounded-14rpx"
            v-for="(item, index) in stepList"
            :key="item"
          >
            <view class="flex items-center gap-20rpx justify-between">
              <view class="rounded-full size-56rpx bg-#E8F5EE text-#5DBE8A center">{{ index + 1 }}</view>
              <view>{{ item }}</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="text-#5DBE8A col bg-#fff p-14rpx pos-fixed pos-bottom-100rpx w-100%">
      <text class="text-52.5rpx">
        <up-count-down
          ref="countDownRef"
          :time="2 * 1000"
          format="HH:mm:ss"
          @finish="handleFinish"
          :auto-start="false"
        ></up-count-down>
      </text>
      <view class="flex gap-20rpx">
        <button class="text-#FFf bg-#5DBE8A" @click="onStart">开始</button>
        <button class="text-#5DBE8A b-#5DBE8A" @click="onStop">暂停</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CookNavBar from '../common/CookNavBar.vue'

import IconBg from '@/static/image/cook/icon-bg-cook.svg'
import Utils from '@/utils'

const { safeAreaInsets } = uni.getWindowInfo()
const countDownRef = ref()
const stepList = [
  '牛肉切丝，加入料酒、生抽腌制15分钟',
  '青椒切丝，蒜切末备用',
  '热锅下油，爆香蒜末',
  '加入牛肉快速翻炒至七分熟',
  '加入青椒丝翻炒均匀',
  '最后加入适量盐调味即可',
]

const onStart = () => {
  countDownRef.value.start()
}
const onStop = () => {
  countDownRef.value.pause()
}
const handleFinish = () => {
  Utils.navigateTo('/pagesCook/cook-success/index')
}
</script>

<style scoped>
page {
  background-color: #f5f5f5;
}
</style>
