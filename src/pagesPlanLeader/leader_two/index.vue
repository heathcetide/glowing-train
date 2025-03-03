<template>
  <view class="" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CustomNavBar title="启动健康焕新计划" :step="2" :totalStep="4" :activeIndex="1" />

    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">你的饮食习惯是怎样的？</text>
        <text class="text-24rpx text-0">我们会根据你的饮食习惯，为你推荐合适的菜谱和食材。</text>
      </view>

      <view class="main flex-col flex w-100% gap20rpx mt40rpx">
        <!-- 每日用餐次数 -->
        <PanelCard1 @count="handleCount" />
        <!-- 饮食风格（可多选） -->
        <PanelCard2 @style="handleStyle" />
        <!-- 口味偏好（可多选） -->
        <PanelCard3 @taste="handleTaste" title="运动类型（可多选）" />
      </view>

      <NextButton url="leader_three" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import PanelCard1 from '../components/PanelCard1.vue'
import PanelCard2 from '../components/PanelCard2.vue'
import PanelCard3 from '../components/PanelCard3.vue'

import NextButton from '../components/NextButton.vue'
import Utils from '@/utils'

const { safeAreaInsets } = uni.getWindowInfo()

const handleCount = (item: string) => {
  console.log('@', item)
}
const handleStyle = (item: string) => {
  console.log('@', item)
}
const handleTaste = (item: string) => {
  console.log('@', item)
}
const onNext = () => {
  Utils.navigateTo('/pagesPlanLeader/leader_three/index')
}
</script>

<style scoped>
page {
  background: #fff;
}
</style>
