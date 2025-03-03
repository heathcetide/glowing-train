<template>
  <view class="title mt-50rpx mb-10rpx px-28rpx">食材类别</view>
  <up-grid :border="false" col="4">
    <up-grid-item
      v-for="(listItem, listIndex) in tabList"
      :key="listIndex"
      bg-color="#fff"
      class="shadow1 p-10rpx rounded-10rpx"
    >
      <up-image :src="listItem.icon" width="112rpx" height="112rpx" mode="scaleToFill" />
      <text class="grid-text text-#4B5563 text-24.5rpx">{{ listItem.value }}</text>
    </up-grid-item>
  </up-grid>
</template>

<script setup lang="ts">
import iconTab from '@/static/image/common/image-tab.svg'
import IconTab1 from '@image/icon-tab1.svg'
import IconTab2 from '@image/icon-tab2.svg'
import IconTab3 from '@image/icon-tab3.svg'
import IconTab5 from '@image/icon-tab5.svg'
import IconTab6 from '@image/icon-tab6.svg'
import IconTab7 from '@image/icon-tab7.svg'
import IconTab8 from '@image/icon-tab8.svg'
const tabList = [
  { icon: IconTab1, value: '时令水果' },
  { icon: IconTab2, value: '新鲜蔬菜' },
  { icon: IconTab3, value: '肉禽蛋品' },
  { icon: iconTab, value: '海鲜水产' },
  { icon: IconTab5, value: '乳品烘焙' },
  { icon: IconTab6, value: '粮油调味' },
  { icon: IconTab7, value: '零食饮料' },
  { icon: IconTab8, value: '时令水果' },
]
</script>

<style scoped></style>
