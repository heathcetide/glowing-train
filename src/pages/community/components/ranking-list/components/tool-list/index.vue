<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: hetght }">
    <view class="px-28rpx flex gap-28rpx flex-col">
      <RecipeListCard v-for="(item, index) in list" :key="index" :item="item" />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { Community } from '@/types/component'
import RecipeListCard from '../RecipeListCard.vue'
import IconPic1 from '@/static/image/community/icon-pic1.svg'
import IconPic2 from '@/static/image/community/icon-pic2.svg'
import IconPic3 from '@/static/image/community/icon-pic3.svg'
import IconAvatar from '@/static/image/community/icon-avatar.svg'
import { getRankByTypeAPI } from '@/services/rank/rankBaseModule'
const { safeAreaInsets } = uni.getWindowInfo()

const hetght = computed(() => {
  return `calc(100vh - 50rpx - ${safeAreaInsets.bottom + safeAreaInsets.top}px)`
})
const list: Community.RecipeListCardItem[] = ref([
  {
    author: '健身教练大明',
    avatar: IconAvatar,
    comment: 143,
    cover: IconPic1,
    desc: '高蛋白低碳水，健身减脂必备的营养餐',
    like: 1892,
    name: '藜麦鸡胸餐',
    isCommented: true,
  },
  {
    author: '健身教练大明',
    avatar: IconAvatar,
    comment: 143,
    cover: IconPic1,
    desc: '高蛋白低碳水，健身减脂必备的营养餐',
    like: 1892,
    name: '藜麦鸡胸餐',
  },
  {
    author: '健身教练大明',
    avatar: IconAvatar,
    comment: 143,
    cover: IconPic2,
    desc: '高蛋白低碳水，健身减脂必备的营养餐',
    like: 1892,
    name: '藜麦鸡胸餐',
  },
  {
    author: '健身教练大明',
    avatar: IconAvatar,
    comment: 143,
    cover: IconPic3,
    desc: '高蛋白低碳水，健身减脂必备的营养餐',
    like: 1892,
    name: '藜麦鸡胸餐',
  },
])

// 页面加载后调用接口获取数据
onMounted(async () => {
  try {
    const res = await getRankByTypeAPI('RATING')
    // 如果接口返回的数据在 res.data 中，则使用 res.data，否则直接使用 res
    list.value = res.data || res
  } catch (error) {
    console.error('获取活动数据失败:', error)
  }
})
</script>

<style scoped lang="scss"></style>
