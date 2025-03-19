<template>
  <view class="wrap">
    <view class="title">
      <text class="title">今日目标进度</text>
      <!-- 动态显示今天的日期 -->
      <text class="date">{{ currentDate }}</text>
    </view>

    <view class="progress">
      <view class="item" v-for="item in data" :key="item.title">
        <view class="circle" :style="{ borderColor: item.borderColor }">{{ item.value }}%</view>
        <text class="title">{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 动态获取当前日期
const currentDate = ref('')

const data = [
  {
    value: '75',
    title: '步数',
    borderColor: '#5DBE8A30',
  },
  {
    value: '60',
    title: '卡路里',
    borderColor: '#FF9F4330',
  },
  {
    value: '45',
    title: '饮水量',
    borderColor: '#4B7BF530',
  },
]

onMounted(() => {
  // 获取今天的日期，并格式化为 YYYY年MM月DD日 格式
  const today = new Date()
  currentDate.value = today.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>

<style scoped lang="scss">
.wrap {
  padding: 16rpx 46rpx;
  background-color: white;
  border-radius: 21rpx;
  box-shadow: $box-shadow-sm;
  margin-bottom: 16rpx;
  .title {
    font-size: $font-size-xl;
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    .date {
      font-size: $font-size-sub;
      color: $font-color-gray-light;
    }
  }

  .progress {
    display: flex;
    padding: 22rpx 42rpx;
    justify-content: space-between;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 26rpx;

      .circle {
        width: 112rpx;
        height: 112rpx;
        border-radius: 50%;
        border: 10rpx solid $uni-color-primary;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25rpx;
        color: #000000;
        line-height: 35rpx;
        text-align: center;
      }

      .title {
        font-weight: 400;
        font-size: 21rpx;
        color: #4b5563;
        line-height: 28rpx;
      }
    }
  }
}
</style>
