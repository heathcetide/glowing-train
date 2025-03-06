<template>
  <SGTabs :tabs="tabs" :showBorder="false" font-size="24rpx" padding="0rpx">
    <template #tabs="{ tab, isActive }">
      <view class="tab-item text-#4B5563 px-28rpx py-9rpx" :class="{ 'tab-item-active': isActive }">
        <view class="tab-item-text">{{ tab }}</view>
      </view>
    </template>

    <template #tab-0>
      <view class="px-28rpx py-14rpx">
        <Warning />
        <MessageList />
      </view>
    </template>
  </SGTabs>
</template>

<script setup lang="ts">
import Warning from './components/Warning.vue'
import MessageList from './components/MessageList.vue'
const tabs = ['全部通知', '计划提醒', '健康建议', '库存提醒']
</script>

<style scoped>
.tab-item-active {
  color: #16a34a;
  background-color: #c8f4d5;
}
</style>
