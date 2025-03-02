<template>
  <view class="wrap">
    <SGTabs :tabs="tabs" :showBorder="false" font-size="24rpx">
      <template #tab-0><Note /> </template>
      <template #tab-1><Stack /> </template>
      <template #tab-2><Recipe /> </template>
      <template #tab-3><List /> </template>
      <template #tabs="{ tab }">
        <view class="tab-item">
          <text class="tab-item-text">{{ tab }}</text>
        </view>
      </template>
      <template #nextIcon>
        <text @click="handleClick">做饭模式</text>
      </template>
    </SGTabs>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'
import List from './components/list/index.vue'
import Note from './components/note/index.vue'
import Recipe from './components/recipe/index.vue'
import Stack from './components/stack/index.vue'

const tabs = ['饮食记录', '库存管理', '菜谱推荐']

const handleClick = () => {
  Utils.navigateTo('/pagesCook/index/index')
}
</script>

<style scoped></style>
