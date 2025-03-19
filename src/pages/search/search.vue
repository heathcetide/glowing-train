<template>
  <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <SearchBar @search="onSearch" />
    <view class="container px-28rpx pt-22rpx">
      <HistoryNote />
      <HotSearch :list="hostList" />
    </view>
    <view v-if="type === 'note' || type == 'food'" class="list">
      <view class="p-28rpx bg-#fff rounded-21rpx">
        <scroll-view scroll-y class="h-85vh">
          <view class="p-28rpx bg-#fff rounded-21rpx">
            <view class="list flex-col-nocenter gap-21rpx" v-if="searchResult.length">
              <view
                class="item py-8rpx flex center gap-10rpx text-0 borderb"
                v-for="item in searchResult"
                :key="item.id"
              >
                <up-image
                  :src="item.largeImageUrl"
                  width="84rpx"
                  height="84rpx"
                  class="size-84rpx"
                  mode="scaleToFill"
                  @click="onLook(item)"
                />
                <view class="contain flex-1 flex-col-nocenter">
                  <text class="title">{{ item.name }}</text>
                  <text class="weight">{{ item?.suggest }}</text>
                </view>
                <view>
                  <text>{{ item.kcal }} kcal</text>
                </view>
                <view class="center">
                  <button size="mini" class="bg-#5DBE8A text-white" @click="onAddToNote(item)">添加</button>
                </view>
              </view>
            </view>
            <view v-else>
              <!-- <view class="text-#374151 text-28rpx center">暂无数据</view> -->
            </view>
          </view>
        </scroll-view>
      </view>
    </view>

    <up-loading-page :loading="isLoading" />

    <view class="pos-fixed bottom-10 left-0 right-0 w-100% px-28rpx bg-#fff">
      <button class="bg-#5DBE8A text-white" @click="onSuccess">添加完成</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import HistoryNote from './components/HistoryNote.vue'
import HotSearch from './components/HotSearch.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { addFoodToStackAPI, getFoodSearchAPI } from '@/services/food-menus/foodMenusBaseModule'

import useFoodStore from '@/stores/modules/food'
import type { Food } from '@/types/food'
import Utils from '@/utils'
import type { HomeIndex } from '@/types/component'

const isLoading = ref(false)
const foodStore = useFoodStore()
const type = ref<'note' | 'food' | ''>()
const { safeAreaInsets } = uni.getWindowInfo()

const hostList = [
  { title: '低卡减脂餐', num: 12543 },
  { title: '轻食沙拉', num: 10234 },
  { title: '蒸菜食谱', num: 9876 },
  { title: '营养早餐', num: 6000 },
  { title: '瘦身食谱', num: 1250 },
  { title: '健康午餐', num: 12 },
]

const searchResult = ref<any[]>([])

const onSearch = async (condition: string) => {
  //TODO 搜索逻辑
  console.log('搜索条件', condition)
  isLoading.value = true
  const res = await getFoodSearchAPI(condition)
  isLoading.value = false
  if (res.code === 200) {
    searchResult.value = res.data.slice(0, 10)
    console.log('搜索结果', res.data)
  }
}

const onLook = (item: HomeIndex.Stack.StackItem) => {}

const onSuccess = () => {
  if (type.value === 'note') {
    Utils.redirectTo('/pages/note/note')
  } else if (type.value === 'food') {
    Utils.redirectTo('/pages/add-food/index')
  }
}
const onAddToNote = async (item: Food.FoodItem) => {
  const data: any = {
    alertThreshold: 1,
    customFoodName: item.name,
    foodId: item.id,
    quantity: 1,
    storageLocation: '冷藏',
    notes: item.suggest,
    source: '',
    unit: 'kg',
    usageCategory: '主食',
  }

  Utils.showModal({
    title: '添加菜品',
    content: '确定要添加' + item.name + '吗?',
    cancel: () => {},
    confirm: async () => {
      if (type.value === 'food') {
        const res = await addFoodToStackAPI(data)
        if (res.code === 200) {
          Utils.showToast('添加成功')
        }
      }
    },
  })
}

onLoad((param: any) => {
  type.value = param?.type
})
</script>

<style scoped></style>
