<template>
  <scroll-view scroll-y class="scroll-view">
    <uni-nav-bar
      :border="false"
      left-icon="arrow-left"
      left-text="返回"
      title="做饭模式"
      right-text="智能助手"
      color="#5DBE8A"
      @clickLeft="handleClickLeft"
      @clickRight="handleClickRight"
    >
    </uni-nav-bar>
    <view class="containt p-28rpx">
      <AdviseDielt />
      <ToolPanel />
      <CalorieIntake />
      <NutrientDistribution />
      <button class="bg-#5DBE8A text-#fff center w-100% pos-fixed pos-bottom-30rpx" @click="goToChoose">
        <image :src="icon" mode="scaleToFill" class="size-24.5rpx" />
        开始烹饪
      </button>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
import AdviseDielt from './components/AdviseDielt.vue'
import ToolPanel from './components/ToolPanel.vue'
import CalorieIntake from './components/CalorieIntake.vue'
import NutrientDistribution from './components/NutrientDistribution.vue'

import icon from '@/static/image/community/icon-ranke1.svg'
import Utils from '@/utils'

const handleClickRight = () => {
  console.log('sssd')
}
const handleClickLeft = () => {
  Utils.navigateBack()
}
const goToChoose = () => {
  Utils.navigateTo('/pagesCook/fruit-choose/index')
}
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - 100rpx);
}
</style>
