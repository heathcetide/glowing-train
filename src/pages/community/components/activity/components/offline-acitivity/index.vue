<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: hetght }">
    <view class="px-28rpx h-100% flex flex-col gap-28rpx">
      <!-- 根据获取到的活动数据，依次渲染 ActivityCard 组件 -->
      <ActivityCard v-for="item in activities" :key="item.id" :item="item" />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import ActivityCard from '../common/ActivityCard.vue'
import { getActivityAPI } from '@/services/activity/postBaseModule'

const { safeAreaInsets } = uni.getWindowInfo()

const hetght = computed(() => {
  return `calc(100vh - 50rpx - ${safeAreaInsets.bottom + safeAreaInsets.top + 100}px)`
})

// 定义响应式变量保存获取到的活动数据
const activities = ref([])

// 页面加载后调用接口获取数据
onMounted(async () => {
  try {
    const res = await getActivityAPI('线下活动')
    // 如果接口返回的数据在 res.data 中，则使用 res.data，否则直接使用 res
    activities.value = res.data || res
  } catch (error) {
    console.error('获取活动数据失败:', error)
  }
})
</script>

<style scoped lang="scss">
/* 根据需要添加样式 */
</style>
