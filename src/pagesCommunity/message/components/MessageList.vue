<template>
  <view class="list">
    <view class="list-item" v-for="item in list" :key="item.title">
      <NoticeCard :title="item.title" :content="item.content" :time="item.time" :isRead="item.isRead" />
    </view>
  </view>
</template>

<script setup lang="ts">
import NoticeCard from './NoticeCard.vue'
import { ref } from 'vue'

import type { NoticeCardProps } from '@/types/community'

const list = ref<NoticeCardProps[]>([
  {
    title: '今日饮食计划完成提醒',
    content: '您今天的饮食计划完成率为 80%，继续保持， 明天争取达到 100%！',
    time: '3天前',
    isRead: true,
  },
  {
    title: '营养摄入建议',
    content: '今日蛋白质摄入不足，建议晚餐增加瘦肉、鱼 类或豆制品的摄入量。',
    time: '1小时前',
  },
  {
    title: '标题3',
    content: '内容',
    time: '3天前',
  },
])
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 28rpx;
  padding: 28rpx 1rpx;
}
</style>
