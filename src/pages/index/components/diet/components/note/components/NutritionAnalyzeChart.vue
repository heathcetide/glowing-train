<template>
  <view class="charts p-28rpx rounded-14rpx mb-40rpx">
    <ToDayGrade />
    <view class="charts-box">
      <qiun-data-charts type="gauge" :opts="opts" :chartData="chartData" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ToDayGrade from './TodayGrade.vue'
const chartData = ref({
  categories: [
    { value: 0.2, color: '#189' },
    { value: 0.8, color: '#2fc25b' },
    { value: 1, color: '#f04864' },
  ],
  series: [
    {
      name: '完成率',
      data: 0.9,
    },
  ],
})
const opts = ref({
  color: ['#5DBE8A', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: undefined,
  title: {
    name: '1739',
    fontSize: 70,
    color: '#5DBE8A',
    offsetY: 0,
  },
  subtitle: {
    name: '/2957',
    fontSize: 15,
    color: '#5DBE8A',
    offsetY: 0,
  },
  extra: {
    gauge: {
      type: 'progress',
      width: 20,
      labelColor: '#666666',
      startAngle: 0.75,
      endAngle: 0.25,
      startNumber: 0,
      endNumber: 100,
      labelFormat: '',
      splitLine: {
        fixRadius: -10,
        splitNumber: 10,
        width: 15,
        color: '#FFFFFF',
        childNumber: 5,
        childWidth: 12,
      },
      pointer: {
        width: 24,
        color: 'auto',
      },
    },
  },
})
</script>

<style scoped lang="scss">
.charts {
  box-shadow: $card-box-shadow-light;
}
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
