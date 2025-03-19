<template>
  <view class="flex flex-col bg-white px-48rpx">
    <uni-nav-bar status-bar left-icon="back" @clickLeft="goBack" :border="false" title=""></uni-nav-bar>
    <!-- 标题栏部分 -->
    <view class="flex justify-between items-center mb-5">
      <text class="text-2xl font-bold">卡路里</text>
      <up-icon name="setting" size="28" color="#000"></up-icon>
    </view>

    <!-- 时间筛选栏 -->
    <view class="flex gap-20rpx mb-5">
      <up-tag
        v-for="(item, index) in filters"
        :key="item"
        :type="activeFilter === index ? 'success' : 'primary'"
        @click="setActiveFilter(index)"
      >
        {{ item }}
      </up-tag>
    </view>

    <!-- 今日步数显示 -->
    <view class="mb-5 flex-col-nocenter">
      <text class="text-lg text-black">今日步数</text>
      <text class="text-3xl text-black">3,423 步</text>
    </view>

    <!-- 步数图表 -->
    <view class="mb-5">
      <qiun-data-charts type="column" :chartData="chartData" :opts="chartOpts"></qiun-data-charts>
      <view class="flex justify-center items-center mt-2.5">
        <uni-icons type="left" size="10" color="#9F9F9F"></uni-icons>
        <text class="mx-2.5 text-24rpx font-350">2.27</text>
        <uni-icons type="right" size="10" color="#9F9F9F"></uni-icons>
      </view>
    </view>

    <!-- 摘要部分 -->
    <view class="mb-5">
      <uni-row :gutter="20">
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">行走距离</text>
            <view class="text-black">
              <text class="text-48rpx text-1">10</text>
              公里
            </view>
          </view>
        </uni-col>
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">活跃时长</text>
            <view class="text-black">
              <text class="text-48rpx text-1">6 </text>小时 <text class="text-48rpx text-1">30 </text> 分钟</view
            >
          </view>
        </uni-col>
      </uni-row>
      <uni-row :gutter="20" class="mt-24rpx transition-300" v-show="filters[activeFilter] === '周'">
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">消耗卡路里</text>
            <view class="text-black">
              <text class="text-48rpx text-1">343</text>
              大卡
            </view>
          </view>
        </uni-col>
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">总步数</text>
            <view class="text-black"> <text class="text-48rpx text-1">62004</text>步</view>
          </view>
        </uni-col>
      </uni-row>
    </view>

    <!-- 目标部分 -->
    <view class="mb-5">
      <view class="flex justify-between items-center mb-2.5">
        <text class="text-lg text-black">目标</text>
        <view>
          <u-button type="text" color="#007AFF" size="mini">修改</u-button>
        </view>
      </view>
      <text class="text-lg text-black mb-2.5">目标完成 (560/1000 步每日)</text>
      <up-line-progress :percentage="56" :showInfo="false" activeColor="#007AFF"></up-line-progress>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const filters = ref(['天', '周', '月', '年'])
const activeFilter = ref(0)

const setActiveFilter = (filter: number) => {
  activeFilter.value = filter
}

const chartData = ref({
  categories: ['0时', '12时', '24时'],
  series: [
    {
      name: '步数',
      data: [2000, 8000, 4000],
    },
  ],
})

const chartOpts = ref({
  yAxis: {
    min: 0,
    max: 8000,
  },
  color: ['#007AFF'],
})

const goBack = () => {
  uni.navigateBack()
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.filter {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.filter .u-button {
  background-color: #f0f0f0;
  color: #000;
}

.filter .active {
  background-color: #ccc;
}

.today-steps {
  margin-bottom: 20px;
}

.sub-title {
  font-size: 18px;
  color: #000;
}

.steps {
  font-size: 36px;
  color: #000;
}

.chart {
  margin-bottom: 20px;
}

.date-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.date {
  margin: 0 10px;
  font-size: 18px;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.summary-item {
  text-align: center;
}

.value {
  font-size: 28px;
  color: #000;
}

.goal {
  margin-bottom: 20px;
}

.goal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.goal-info {
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
}
</style>
