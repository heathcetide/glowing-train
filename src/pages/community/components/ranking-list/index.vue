<template>
  <SGTabsSub :tabs :show-border="false" :show-border-buttom="false" padding="0rpx">
    <template #tabs="{ tab, index, isActive }">
      <view
        v-if="!isActive"
        class="flex text-24.5rpx gap-8rpx items-center justify-center text-#4B5563 py-8rpx px-20rpx bg-#F9FAFB"
      >
        <image :src="icons[index]" class="w-24rpx h-24rpx" />
        <text>{{ tab }}</text>
      </view>
      <view
        v-else
        class="flex text-24.5rpx gap-8rpx items-center justify-center text-#fff bg-#5DBE8A w-100% py-8rpx px-20rpx"
      >
        <image :src="icons[index]" class="w-24rpx h-24rpx" />
        <text>{{ tab }}</text>
      </view>
    </template>
    <template #tab-0><RecipeList /></template>
    <template #tab-1><DrinkList /></template>
    <template #tab-2><ToolList /></template>
  </SGTabsSub>
</template>

<script setup lang="ts">
import IconRanke1 from '@/static/image/community/icon-ranke1.svg'
import IconRanke2 from '@/static/image/community/icon-ranke2.svg'
import IconRanke3 from '@/static/image/community/icon-ranke3.svg'
import DrinkList from './components/drink-list/index.vue'
import RecipeList from './components/recipe-list/index.vue'
import ToolList from './components/tool-list/index.vue'
const icons = [IconRanke1, IconRanke2, IconRanke3]
const tabs = ['食谱榜单', '食谱榜单', '工具榜单']
</script>

<style scoped></style>
