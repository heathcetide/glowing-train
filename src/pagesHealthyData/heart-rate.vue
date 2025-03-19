<template>
  <view class="flex flex-col bg-white px-48rpx">
    <uni-nav-bar status-bar left-icon="back" :border="false" @clickLeft="goBack" title=""></uni-nav-bar>
    <!-- 标题栏部分 -->
    <view class="flex justify-between items-center mb-5">
      <text class="text-2xl font-bold">心率</text>
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
      <text class="text-20rpx text-1">今日范围</text>
      <text class="text-60rpx text-black">86-123 <text class="text-28rpx text-#333333">次/分钟</text></text>
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

    <view class="flex px-26rpx py-28rpx justify-between bg-#F8F9FA items-center">
      <view class="flex gap-20rpx text-24rpx">
        <text>最近一次</text>
        <text>2月28日 12:34</text>
      </view>
      <view>
        <text>120</text>
        <text class="text-#666666 text-24rpx"> 次/分钟</text>
      </view>
    </view>

    <button class="bg-#F14C7C w-100% center mt-20rpx text-#fff">再次检测</button>

    <!-- 摘要部分 -->
    <view class="my-6">
      <view class="text-40rpx mb-25rpx">摘要</view>
      <view class="px-28rpx">
        <uni-row :gutter="20">
          <uni-col :span="12" class="flex-col-nocenter">
            <view class="w-100%">
              <text class="text-24rpx text-1">今日最高</text>
              <view class="text-black">
                <text class="text-48rpx text-1">120</text>
                次/分钟
              </view>
            </view>
          </uni-col>
          <uni-col :span="12">
            <view class="">
              <text class="text-24rpx text-1">今日最低</text>
              <view class="text-black"> <text class="text-48rpx text-1">34 </text>次/分钟 </view>
            </view>
          </uni-col>
        </uni-row>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const filters = ref(['天', '周', '月', '年'])
const activeFilter = ref(0)

const goBack = () => {
  // 返回逻辑
  uni.navigateBack()
}

const setActiveFilter = (filter: number) => {
  activeFilter.value = filter
}

const categories = []

for (let i = 1; i <= 24; i++) {
  if (i % 3 === 0) {
    categories.push(i + '时')
  }
}
const data: number[] = []
categories.forEach((i) => {
  data.push(60 + Math.floor(Math.random() * 70))
})

const chartData = ref({
  categories: categories,
  series: [
    {
      name: '心率',
      data: data,
    },
  ],
})

const chartOpts = ref({
  yAxis: {
    min: 0,
    max: 160,
  },
  color: ['#F14C7C'],
  extra: {
    column: {
      type: 'group',
      width: 15,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
    },
  },
})
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
