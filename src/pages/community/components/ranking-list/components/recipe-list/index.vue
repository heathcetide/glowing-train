<template>
  <scroll-view scroll-y class="scroll-view">
    <view class="px-28rpx flex gap-28rpx flex-col">
      <RecipeListCard v-for="(item, index) in list" :key="index" :item />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import type { Community } from '@/types/component'
import RecipeListCard from './components/RecipeListCard.vue'
import IconPic1 from '@/static/image/community/icon-pic1.svg'
import IconPic2 from '@/static/image/community/icon-pic2.svg'
import IconPic3 from '@/static/image/community/icon-pic3.svg'
import IconAvatar from '@/static/image/community/icon-avatar.svg'
const list: Community.RecipeListCardItem[] = [
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
]
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 340rpx);
}
</style>
