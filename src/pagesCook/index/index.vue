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
import { getUserInventoryMakeFoodAPI } from '@/services/Inventory/InventoryBaseModule'
import icon from '@/static/image/community/icon-ranke1.svg'
import Utils from '@/utils'

const handleClickRight = () => {
  console.log('sssd')
}
const handleClickLeft = () => {
  Utils.navigateBack()
}
// 点击开始烹饪按钮
const goToChoose = async () => {
  try {
    // 调用获取用户库存推荐食物的接口
    const response = await getUserInventoryMakeFoodAPI()

    // 假设返回的数据是一个推荐食物数组
    const recommendedFoods = response.data || []

    // 将推荐食物存储到本地存储
    uni.setStorage({
      key: 'recommendedFoods',
      data: recommendedFoods,
      success: () => {
        console.log('食物推荐已存储成功！')
      },
      fail: () => {
        console.log('食物推荐存储失败')
      }
    })

    // 跳转到选择食材页面
    Utils.navigateTo('/pagesCook/fruit-choose/index')
  } catch (error) {
    console.error('获取食物推荐失败:', error)
  }
}
</script>

<style scoped>
.scroll-view {
  height: calc(100vh - 100rpx);
}
</style>
