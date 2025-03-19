<template>
  <view class="wrap">
    <SGTabsSub :tabs="tabs" :showBorder="false" font-size="24rpx">
      <template #tab-0><Note /> </template>
      <template #tab-1><Stack /> </template>
      <template #tab-2><Recipe /> </template>
      <template #tabs="{ tab }">
        <view class="tab-item">
          <text class="tab-item-text">{{ tab }}</text>
        </view>
      </template>
    </SGTabsSub>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'

import Note from './components/note/index.vue'
import Recipe from './components/recipe/index.vue'
import Stack from './components/stack/index.vue'

const tabs = ['饮食记录', '库存管理', '菜谱推荐']
</script>

<style scoped></style>
