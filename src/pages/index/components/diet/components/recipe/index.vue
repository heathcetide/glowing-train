<template>
  <view class="wrap">
    <CustomSearch />
    <SGIconTabs :tabs="tabs">
      <template #tab-0><Nutrition /></template>
      <template #tab-1><Quick /></template>
      <template #tab-2><Family /></template>
      <template #tab-3><Vegetable /></template>
      <template #tab-4><Cake /></template>
    </SGIconTabs>
  </view>
</template>

<script setup lang="ts">
import CustomSearch from '../common/CustomSearch.vue'
import IconTab1 from '@/static/image/home/icon-tab-1.svg'
import IconTab2 from '@/static/image/home/icon-tab-2.svg'
import IconTab3 from '@/static/image/home/icon-tab-3.svg'
import IconTab4 from '@/static/image/home/icon-tab-4.svg'
import IconTab5 from '@/static/image/home/icon-tab-5.svg'
import type { Tabs } from 'vue'
import Cake from './components/cake/index.vue'
import Family from './components/family/index.vue'
import Nutrition from './components/nutrition/index.vue'
import Quick from './components/quick/index.vue'
import Vegetable from './components/vegetable/index.vue'

const tabs: Tabs[] = [
  {
    icon: IconTab1,
    title: '营养餐单',
  },
  {
    icon: IconTab2,
    title: '快速简单',
  },
  {
    icon: IconTab3,
    title: '家庭常备',
  },
  {
    icon: IconTab4,
    title: '素食选择',
  },
  {
    icon: IconTab5,
    title: '烘焙甜点',
  },
]
</script>

<style scoped lang="scss"></style>
