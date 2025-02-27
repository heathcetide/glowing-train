<template>
  <scroll-view scroll-y class="scroll-view">
    <uni-row :gutter="28">
      <uni-col :span="12" v-for="item in list" :key="item.title">
        <RecipeCard :src="item.src" :title="item.title" :tags="item.tags" :time="item.time" :hot="item.hot" />
      </uni-col>
    </uni-row>
  </scroll-view>
</template>

<script setup lang="ts">
import RecipeCard from '../common/RecipeCard.vue'
import IconCard1 from '@/static/image/home/icon-card-1.svg'
import IconCard2 from '@/static/image/home/icon-card-2.svg'

const list = [
  {
    src: IconCard1,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard2,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard1,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard2,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard1,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard2,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard1,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
  {
    src: IconCard2,
    title: '轻食沙拉配柠檬鸡胸',
    tags: ['低脂', '高蛋白'],
    time: 25,
    hot: 320,
  },
]
</script>

<style scoped lang="scss">
.scroll-view {
  height: calc(100vh - 580rpx);
}
</style>
