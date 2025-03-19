<template>
  <view class="detail-container">
    <!-- 头部图片 -->
    <up-image :src="detailData.imageUrl" mode="aspectFill" height="300rpx" width="100%"></up-image>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 标题 -->
      <u-text :text="detailData.title" size="32rpx" bold align="center" margin="20rpx 0"></u-text>

      <!-- 活动类型 -->
      <u-cell title="活动类型" :value="detailData.activityType" :border="false"></u-cell>

      <!-- 活动时间 -->
      <u-cell
        title="活动时间"
        :value="`${formatDate(detailData.startDate)} 至 ${formatDate(detailData.endDate)}`"
        :border="false"
      ></u-cell>

      <!-- 活动地点 -->
      <u-cell title="活动地点" :value="detailData.location" :border="false"></u-cell>

      <!-- 活动描述 -->
      <view class="description">
        <u-text :text="detailData.description" size="28rpx" margin="20rpx 0"></u-text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import uImage from 'uview-plus/components/u-image/u-image.vue'
import uText from 'uview-plus/components/u-text/u-text.vue'
import uCell from 'uview-plus/components/u-cell/u-cell.vue'
import useAcitvityStore from '@/stores/modules/activity'

const activityStore = useAcitvityStore()
// 定义详情数据结构
interface DetailData {
  activityType: string
  createdAt: string
  deleted: number
  description: string
  endDate: number
  id: number
  imageUrl: string
  location: string
  startDate: number
  title: string
  updatedAt: string
}

// 定义详情数据
const detailData = ref<DetailData>({
  activityType: '',
  createdAt: '',
  deleted: 0,
  description: '',
  endDate: 0,
  id: 0,
  imageUrl: '',
  location: '',
  startDate: 0,
  title: '',
  updatedAt: '',
})

// 模拟从接口获取数据
const fetchDetailData = (id: number) => {
  // 这里替换为实际的接口请求

  detailData.value = activityStore.getActivityItem()
}

// 格式化日期
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

// 页面加载时获取数据
onLoad((options: any) => {
  const id = options.id ? Number(options.id) : 0
  if (id) {
    fetchDetailData(id)
  }
})
</script>

<style scoped lang="scss">
.detail-container {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.content {
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  margin: 20rpx;
}

.description {
  margin-top: 20rpx;
  padding: 20rpx;
  background-color: #f8f8f8;
  border-radius: 10rpx;
}
</style>
