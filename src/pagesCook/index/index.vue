<template>
  <view class="" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
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
    <scroll-view scroll-y class="scroll-view">
      <view class="containt p-28rpx">
        <AdviseDielt />
        <ToolPanel />
        <CalorieIntake />
      </view>
    </scroll-view>
    <view class="w-100% pos-fixed pos-bottom-100rpx px-28rpx">
      <button class="bg-#5DBE8A text-#fff center" @click="goToChoose">
        <image :src="icon" mode="scaleToFill" class="size-24.5rpx" />
        开始烹饪
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import AdviseDielt from './components/AdviseDielt.vue'
import ToolPanel from './components/ToolPanel.vue'
import CalorieIntake from './components/CalorieIntake.vue'
import NutrientDistribution from './components/NutrientDistribution.vue'
import icon from '@/static/image/community/icon-ranke1.svg'
import Utils from '@/utils'
import { getUserInventoryMakeFoodAPI } from '@/services/Inventory/InventoryBaseModule'

const { safeAreaInsets } = uni.getWindowInfo()
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
  height: calc(100vh - 200rpx);
}
</style>
