<template>
  <view class="p-28rpx bg-#fff mt-88rpx">
    <SGCateTab class="cate-tab" :tabList="tabList" tabKeyName="title" itemKeyName="title">
      <template #tabItem="{ item }">
        <view class="bg-#fff w-100% col py-20rpx item">
          <up-image :src="item.tabIcon" width="100rpx" height="100rpx" />
          <view class="text-21rpx z-10 text-0">{{ item.title }}</view>
        </view>
      </template>
      <template #pageItem="{ pageItem }">
        <view class="p-28rpx flex gap28rpx juslr w-526rpx center">
          <up-image :src="pageItem.cover" width="112rpx" height="112rpx" />
          <view class="flex-col-nocenter gap7rpx text-0 flex-1">
            <view>{{ pageItem.title }}</view>
            <view class="fb">{{ pageItem.desc }}</view>
          </view>
          <view class="size-56rpx center text-#fff bg-#5DBE8A rounded-full"><text> + </text></view>
        </view>
      </template>
    </SGCateTab>
  </view>
</template>

<script setup lang="ts">
import tab1 from '@image/icon-all-tab1.svg'
import tab2 from '@image/icon-all-tab2.svg'
import tab3 from '@image/icon-all-tab3.svg'
import tab4 from '@image/icon-all-tab4.svg'
import bread from '@image/icon-bread.svg'
import { ref } from 'vue'
const tabList = ref([
  {
    title: '主食类',
    tabIcon: tab1,
    children: [{ title: '水煮肉片', desc: '256 千卡 / 100g', cover: bread, price: 88 }],
  },
  {
    title: '肉蛋类',
    tabIcon: tab2,
    children: [{ title: '酸菜鱼', desc: '256 千卡 / 100g', cover: bread, price: 99 }],
  },
  {
    title: '蔬菜类',
    tabIcon: tab3,
    children: [{ title: '水煮肉片', desc: '256 千卡 / 100g', cover: bread, price: 88 }],
  },
  {
    title: '水果类',
    tabIcon: tab4,
    children: [{ title: '酸菜鱼', desc: '256 千卡 / 100g', cover: bread, price: 99 }],
  },
])
</script>

<style scoped></style>
