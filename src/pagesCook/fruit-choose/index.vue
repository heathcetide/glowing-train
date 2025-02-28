<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <CookNavBar title="菜品选择" />
    <view class="contain px-28rpx py-32rpx">
      <uni-search-bar
        bg-color="#fff"
        placeholder="搜索菜品"
        class="rounded-20rpx"
        v-model="keyword"
        @confirm="handleSearch"
      />

      <SGTabs font-size="24.5rpx" :tabs="tabs" :show-border="false" padding="0rpx">
        <template #tabs="{ tab, isActive }">
          <view v-if="!isActive" class="bg-#fff py-14rpx px-28rpx text-#333333 text-24.5rpx">{{ tab }} </view>
          <view v-else class="bg-#5DBE8A text-#fff py-14rpx px-28rpx text-24.5rpx">{{ tab }}</view>
        </template>

        <template #tab-0><AllFood /></template>
        <template #tab-1><HotFood /></template>
        <template #tab-2><CoolFood /></template>
        <template #tab-3><MainFood /></template>
        <template #tab-4><SoupFood /></template>
        <template #tab-5><SmallFood /></template>
      </SGTabs>
    </view>

    <view
      class="bg-#fff center pos-fixed bottom-20rpx w-100% px-40rpx py-20rpx shadow-0_-20rpx_5rxp_0_#333 flex justify-between"
    >
      <view> 已选择 {{ cookStore.totalNum }} 道菜 | 预估{{ cookStore.totalHot }} kcal </view>
      <view> <button class="bg-#5DBE8A text-#fff px-20rpx py-10rpx" @click="goToCalc">结算</button></view>
    </view>
  </view>
</template>

<script setup lang="ts">
import AllFood from './components/all-food/index.vue'
import CoolFood from './components/cool-food/index.vue'
import HotFood from './components/hot-food/index.vue'
import MainFood from './components/main-food/index.vue'
import SmallFood from './components/small-food/index.vue'
import SoupFood from './components/soup-food/index.vue'
import CookNavBar from '../common/CookNavBar.vue'
import Utils from '@/utils'
import { ref } from 'vue'

import useCookStore from '@/stores/modules/cook'

const cookStore = useCookStore()
const { safeAreaInsets } = uni.getWindowInfo()
const tabs = ['全部', '热菜', '凉菜', '主食', '汤类', '小菜']
const keyword = ref()
// const selectedDielt =
// const totalCalorie =

// 跳转到结算页面
const goToCalc = () => {
  Utils.navigateTo('/pagesCook/calc-food/index')
}
const handleSearch = () => {
  console.log(keyword.value)
}
</script>

<style scoped></style>
