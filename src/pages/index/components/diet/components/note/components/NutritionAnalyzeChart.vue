<template>
  <view class="charts p-28rpx rounded-14rpx mb-40rpx">
    <ToDayGrade />
    <view class="uchart h-336rpx w-100%">
      <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ToDayGrade from './TodayGrade.vue'
const chartData = ref({
  series: [
    {
      data: [
        { name: '碳水', value: 110 },
        { name: '蛋白质', value: 60 },
        { name: '脂肪', value: 30 },
      ],
    },
  ],
})
const opts = ref({
  rotate: false,
  rotateLock: false,
  color: ['#1890FF', '#91CB74', '#FAC858'],
  padding: [5, 5, 5],
  dataLabel: true,
  enableScroll: false,
  legend: {
    show: true,
    position: 'right',
    lineHeight: 25,
  },
  title: {
    name: '收益率',
    fontSize: 15,
    color: '#666666',
  },
  subtitle: {
    name: '70%',
    fontSize: 25,
    color: '#7cb5ec',
  },
  extra: {
    ring: {
      ringWidth: 30,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: false,
      borderWidth: 3,
      borderColor: '#FFFFFF',
    },
  },
})
</script>

<style scoped lang="scss">
.charts {
  box-shadow: $card-box-shadow-light;
}
</style>
