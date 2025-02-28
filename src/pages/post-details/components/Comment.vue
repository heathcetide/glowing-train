<template>
  <view class="comment bg-#fff">
    <view class="flex justify-between px-28rpx items-center py-30rpx">
      <view class="title" @click="handleComment">评论 {{ 20 }}</view>
      <view class="">
        <select id="sortSelect" :style="{ border: 'none' }" v-model="selectedSortOption" @change="handleSortChange">
          <option value="all">全部</option>
          <option value="latest">最新</option>
        </select>
      </view>
    </view>
    <uni-list :border="true" class="p-20rpx flex flex-col gap20rpx list">
      <view v-for="item in commentList" :key="item.id">
        <ChatCard :item="item" />
      </view>
    </uni-list>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ChatCard from './ChatCard.vue'
const selectedSortOption = ref<'all' | 'latest'>('all') // 处理排序变化的方法

const props = defineProps<{
  list?: Post.CardItem[]
}>()

const commentList = computed(() => {
  return props.list || ([] as Post.CardItem[])
})

const emit = defineEmits(['openInput'])
function handleSortChange(event: Event) {
  const target = event.target as HTMLSelectElement
  console.log('Selected sort option:', target.value)
  // 根据选择更新显示的内容或其他逻辑处理...
}

const handleComment = () => {}
</script>

<style scoped></style>
