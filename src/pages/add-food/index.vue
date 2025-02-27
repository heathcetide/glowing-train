<template>
  <view>
    <uni-nav-bar left-text="添加食材" shadow left-width="200rpx" :border="false" left-icon="arrow-left">
      <template #right>
        <image :src="IconTime" class="size-28rpx" mode="scaleToFill" />
      </template>
    </uni-nav-bar>

    <view class="px-28rpx">
      <CustomSearch />
      <view class="title mt-50rpx mb-10rpx">食材类别</view>
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
    </view>

    <InfoPanel />

    <view class="p-28rpx">
      <view class="title">存储位置</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomSearch from '../index/components/diet/components/common/CustomSearch.vue'
import IconTime from '@/static/image/common/icon-time2.svg'
import iconTab from '@/static/image/common/image-tab.svg'
import InfoPanel from './components/InfoPanel.vue'

const tabList = [
  { icon: iconTab, value: '时令水果' },
  { icon: iconTab, value: '新鲜蔬菜' },
  { icon: iconTab, value: '肉禽蛋品' },
  { icon: iconTab, value: '海鲜水产' },
  { icon: iconTab, value: '乳品烘焙' },
  { icon: iconTab, value: '粮油调味' },
  { icon: iconTab, value: '零食饮料' },
  { icon: iconTab, value: '时令水果' },
]
</script>

<style scoped></style>
