<template>
  <view class="inventory-detail-container">
    <!-- 头部图片 -->
    <up-image :src="inventoryData.foodImageUrl" mode="aspectFill" height="500rpx" width="100%"></up-image>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 食品名称 -->
      <u-text :text="inventoryData.foodName" size="32rpx" bold align="center" margin="20rpx 0"></u-text>

      <!-- 自定义食品名称
      <u-cell title="自定义名称" :value="inventoryData. || '无'" :border="false"></u-cell> -->

      <!-- 库存数量 -->
      <u-cell title="库存数量" :value="`${inventoryData.quantity} ${inventoryData.unit}`" :border="false"></u-cell>

      <!-- 库存来源 -->
      <u-cell title="来源" :value="inventoryData.source" :border="false"></u-cell>

      <!-- 存储位置 -->
      <u-cell title="存储位置" :value="inventoryData.storageLocation" :border="false"></u-cell>

      <!-- 购买日期 -->
      <u-cell title="购买日期" :value="formatDate(inventoryData.purchaseDate)" :border="false"></u-cell>

      <!-- 过期日期 -->
      <u-cell title="过期日期" :value="formatDate(inventoryData.lastUsedDate)" :border="false"></u-cell>

      <!-- 最后使用日期 -->
      <u-cell title="最后使用日期" :value="formatDate(inventoryData.expirationDate)" :border="false"></u-cell>

      <!-- 使用类别 -->
      <u-cell title="使用类别" :value="inventoryData.usageCategory" :border="false"></u-cell>

      <!-- 提醒阈值 -->
      <u-cell
        title="提醒阈值"
        :value="`${inventoryData.alertThreshold} ${inventoryData.unit}`"
        :border="false"
      ></u-cell>

      <!-- 备注 -->
      <view class="notes">
        <u-text text="备注" size="28rpx" bold margin="20rpx 0 10rpx"></u-text>
        <u-text :text="inventoryData.notes || '无'" size="28rpx" margin="10rpx 0"></u-text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import uText from 'uview-plus/components/u-text/u-text.vue'
import uCell from 'uview-plus/components/u-cell/u-cell.vue'

import useFoodStore from '@/stores/modules/food'
import type { HomeIndex } from '@/types/component'
const foodStore = useFoodStore()

// 定义库存数据
const inventoryData = ref<HomeIndex.Stack.StackItem>({} as HomeIndex.Stack.StackItem)

// 模拟从接口获取数据
const fetchInventoryData = (id: number) => {
  // 这里替换为实际的接口请求
}

// 格式化日期
const formatDate = (dateString: string) => {
  if (!dateString) return '无'
  const date = new Date(dateString)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

watchEffect(() => {
  inventoryData.value = foodStore.getFoodItem()!
  console.log('@@', inventoryData.value)
})

// 页面加载时获取数据
onLoad((options) => {
  const id = options?.id ? Number(options.id) : 0
})
</script>

<style scoped lang="scss">
.inventory-detail-container {
  background-color: #f8f8f8;
}

.content {
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  margin: 20rpx;
}

.notes {
  margin-top: 20rpx;
  padding: 20rpx;
  background-color: #f8f8f8;
  border-radius: 10rpx;
}
</style>
