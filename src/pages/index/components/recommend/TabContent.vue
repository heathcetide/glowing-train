<template>
  <view class="wrap">
    <CustomCard v-for="(item, index) in cardItems" :key="index" :card="item" />
  </view>
</template>

<script setup lang="ts">
import type { CardPropsParams } from '@/types/home'
import CustomCard from './CustomCard.vue'

const cardItems: CardPropsParams[] = [
  {
    title: '该喝水啦！',
    icon: '/static/image/common/cup.png',
    constant: '适量喝一杯水（约200-250毫升）',
    noteTitle: '喝水',
    noteContent: '1,000/2,500 ml',
  },
  {
    title: '该喝水啦！',
    icon: '/static/image/common/cup.png',
    constant: '适量喝一杯水（约200-250毫升）',
    noteTitle: '喝水',
    noteContent: '1,000/2,500 ml',
  },
  {
    title: '该喝水啦！',
    icon: '/static/image/common/cup.png',
    constant: '适量喝一杯水（约200-250毫升）',
    noteTitle: '喝水',
    noteContent: '1,000/2,500 ml',
  },
  {
    title: '该喝水啦！',
    icon: '/static/image/common/cup.png',
    constant: '适量喝一杯水（约200-250毫升）',
    noteTitle: '喝水',
    noteContent: '1,000/2,500 ml',
  },
]
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  padding: 2rpx;
}
</style>
