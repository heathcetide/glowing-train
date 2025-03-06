<template>
  <!-- 体重折线图 -->
  <view class="weight-chart h-300rpx mb-32rpx bg-#fff">
    <qiun-data-charts type="line" :opts="opts" :chartData="weightChartData" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opts = ref({
  color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: [15, 20, 0, 80],
  dataLabel: false,
  dataPointShape: false,
  enableScroll: false,
  legend: {
    position: 'bottom',
    formatter: (val: string) => {
      return val.split('-')[1]
    },
  },
  xAxis: {
    disableGrid: true,
    disabled: true,
  },
  yAxis: {
    disableGrid: true,
    gridType: 'dash',
    disabled: true,
    dashLength: 2,
    data: [
      {
        min: 0,
        max: 150,
      },
    ],
  },
  extra: {
    line: {
      type: 'curve',
      width: 2,
      activeType: 'hollow',
      linearType: 'custom',
      onShadow: true,
      animation: 'horizontal',
    },
  },
})
const weightChartData = ref({
  categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
  series: [
    {
      name: '成交量A',
      linearColor: [
        [0, '#1890FF'],
        [0.25, '#00B5FF'],
        [0.5, '#00D1ED'],
        [0.75, '#00E6BB'],
        [1, '#90F489'],
      ],
      setShadow: [3, 8, 10, '#1890FF'],
      data: [95, 45, 15, 45, 15, 45],
    },
  ],
})
</script>

<style scoped></style>
