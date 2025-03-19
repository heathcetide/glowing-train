<template>
  <view class="wrap">
    <view class="search flex justify-between px-28rpx rounded-full bg-#F3F4F6 items-center h-91rpx">
      <uni-icons color="#9CA3AF" type="search" size="24" />
      <input type="text" placeholder="请输入搜索内容" v-model="search" @confirm="searchConfirm" />
      <uni-icons type="camera-filled" color="#7E7E7F" size="24" @click="searchConfirm" />
    </view>
    <SGIconTabs :tabs="tabs">
      <template #tab-0><DisplyList @refresh="onRefresh" :list="tabsData[0]" /></template>
      <template #tab-1><DisplyList @refresh="onRefresh" :list="tabsData[1]" /></template>
      <template #tab-2><DisplyList @refresh="onRefresh" :list="tabsData[2]" /></template>
      <template #tab-3><DisplyList @refresh="onRefresh" :list="tabsData[3]" /></template>
      <template #tab-4><DisplyList @refresh="onRefresh" :list="tabsData[4]" /></template>
    </SGIconTabs>
  </view>
</template>

<script setup lang="ts">
import IconTab1 from '@/static/image/home/icon-tab-1.svg'
import IconTab2 from '@/static/image/home/icon-tab-2.svg'
import IconTab3 from '@/static/image/home/icon-tab-3.svg'
import IconTab4 from '@/static/image/home/icon-tab-4.svg'
import IconTab5 from '@/static/image/home/icon-tab-5.svg'
import { ref, type Tabs } from 'vue'
import DisplyList from './components/common/DisplyList.vue'
import { getFoodMenusAPI } from '@/services/food-menus/foodMenusBaseModule'
import { onLoad } from '@dcloudio/uni-app'
import type { FoodMeanu } from '@/types/food'

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
    title: '家庭必备',
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

const tabsData = ref<Array<FoodMeanu.FoodMeanuItem[]>>([])
const search = defineModel('search', { type: String })

const emit = defineEmits(['confirm'])

const onRefresh = async (type: string) => {
  const res = await getFoodMenusAPI(type)
  const index = tabs.findIndex((item) => item.title === type)
  tabsData.value[index] = res.data
}
const getTabDatas = async () => {
  const promiseArr = tabs.map((tab) => {
    return getFoodMenusAPI(tab.title)
  })
  const res = await Promise.all(promiseArr)
  res.forEach((item, index) => {
    tabsData.value[index] = item.data || res
  })
  console.log(tabsData.value)
}
const searchConfirm = () => {
  console.log('searchConfirm', search.value)

  emit('confirm', search.value)
  if (search.value === '' || undefined) {
    getTabDatas()
    return
  }
  tabsData.value[0] = [tabsData.value[0][0]]
  search.value = ''
}
onLoad(() => {
  getTabDatas()
})
</script>

<style scoped lang="scss"></style>
