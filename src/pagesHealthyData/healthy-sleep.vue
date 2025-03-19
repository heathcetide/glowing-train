<template>
  <view class="px-48rpx bg-white flex flex-col">
    <uni-nav-bar status-bar left-icon="back" :shadow="false" @clickLeft="goBack" :border="false" title=""></uni-nav-bar>
    <!-- 标题栏部分 -->
    <view class="flex justify-between items-center mb-5">
      <text class="text-2xl font-bold">睡眠</text>
      <u-icon name="setting" size="28" color="#000"></u-icon>
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

    <!-- 今日睡眠概览 -->
    <view class="text-#515050">
      <view class="text-24rpx">今日</view>
      <view class="juslr items-end">
        <view class="">
          <text class="text-77rpx text-#000000">6.5</text>
          <text class="text-28rpx">小时</text>
        </view>
        <view class="text-#515050">上午12:10 - 上午8:23</view>
      </view>
    </view>

    <!-- 睡眠状态图表 -->
    <!-- 步数图表 -->
    <view class="my-5 w-100% h-400rpx">
      <qiun-data-charts type="column" :chartData="chartData" :opts="chartOptions"></qiun-data-charts>
      <view class="flex justify-center items-center mt-2.5">
        <uni-icons type="left" size="10" color="#9F9F9F"></uni-icons>
        <text class="mx-2.5 text-24rpx font-350">2.27</text>
        <uni-icons type="right" size="10" color="#9F9F9F"></uni-icons>
      </view>
    </view>
    <!-- 摘要部分 -->
    <view class="mb-5">
      <view class="text-40rpx mb-25rpx">摘要</view>
      <uni-row :gutter="20">
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">轻度睡眠</text>
            <view class="text-black">
              <view class="text-black">
                <text class="text-48rpx text-1">3 </text>小时 <text class="text-48rpx text-1">10</text> 分钟</view
              >
            </view>
          </view>
        </uni-col>
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">深度睡眠</text>
            <view class="text-black">
              <text class="text-48rpx text-1">2 </text>小时 <text class="text-48rpx text-1">46 </text> 分钟</view
            >
          </view>
        </uni-col>
      </uni-row>
      <uni-row :gutter="20" class="mt-24rpx transition-300">
        <uni-col :span="12">
          <view class="text-center col">
            <text class="text-24rpx text-1">醒来时间</text>
            <view class="text-black">
              <view class="text-black"> <text class="text-48rpx text-1">34 </text> 分钟</view>
            </view>
          </view>
        </uni-col>
      </uni-row>
    </view>

    <!-- 目标睡眠进度条 -->
    <view class="text-24rpx text-#A5A5A5">累计睡眠时长</view>
    <view class="mb-10rpx">
      <view>43小时30分钟</view>
      <up-line-progress :percentage="80" activeColor="#5451DC"></up-line-progress>
    </view>
    <view>
      <view>38小时23分钟</view>
      <up-line-progress :percentage="30" activeColor="#aaaa"></up-line-progress>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentTab = ref(0)

const filters = ref(['天', '周', '月', '年'])
const activeFilter = ref(0)

const setActiveFilter = (filter: number) => {
  activeFilter.value = filter
}

const chartData = ref({
  categories: ['周一', '', '', '周四', '', '', '周日'],
  series: [
    {
      name: '目标值',
      data: [6, 8, 10, 6, 8, 7, 7],
    },
  ],
})
const goBack = () => {
  // 返回逻辑
  uni.navigateBack()
}

const openSettings = () => {
  // 打开设置逻辑
}

const onTabChange = (index: number) => {
  currentTab.value = index
}

const chartOptions = {
  color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: [15, 15, 0, 5],
  enableScroll: false,
  legend: {},
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    data: [
      {
        min: 0,
      },
    ],
  },
  extra: {
    column: {
      type: 'group',
      width: 15,
      activeBgColor: '#000000',
      activeBgOpacity: 0.08,
    },
  },
}
</script>

<style scoped></style>
