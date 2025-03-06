<template>
  <view class="charts-box size-168rpx">
    <qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const opts = ref({
  color: ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: undefined,
  title: {
    name: '93%',
    fontSize: 20,
    color: '#2fc25b',
  },
  subtitle: {
    name: '',
    fontSize: 10,
    color: '#666666',
    display: false,
  },
  extra: {
    arcbar: {
      type: 'circle',
      width: 8,
      backgroundColor: '#E9E9E9',
      startAngle: 1.5,
      endAngle: 0.25,
      gap: 2,
    },
  },
})
const chartData = {
  series: [
    {
      name: '正确率',
      color: '#10B981',
      data: 0.93,
    },
  ],
}
</script>

<style scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
</style>
