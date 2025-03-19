<template>
  <view class="charts p-28rpx rounded-14rpx mb-40rpx">
    <uni-row>
      <uni-col :span="12">
        <view class="col">
          <text class="text-#6B7280 text-24.5rpx">今日摄入</text>
          <text class="text-35rpx">{{ props.data.todayCalorieCompleted }} / {{ props.data.todayCalorieTarget }}</text>
          <text class="text-21rpx text-#9CA3AF">卡路里</text>
        </view>
      </uni-col>
      <uni-col :span="12">
        <view class="col">
          <text class="text-#6B7280 text-24.5rpx">膳食评分</text>
          <text class="text-#5DBE8A text-35rpx">{{ price }}</text>
          <text class="text-21rpx text-#9CA3AF">优秀</text>
        </view>
      </uni-col>
    </uni-row>
    <view class="charts-box">
      <qiun-data-charts type="gauge" :opts="opts" :chartData="chartData" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { defineProps, computed, onMounted, nextTick } from 'vue'

// 定义接收的 prop 类型
const props = defineProps<{
  data: {
    todayExerciseTarget: number
    todayExerciseCompleted: number
    todayCalorieTarget: number
    todayCalorieCompleted: number
  }
}>()

// 使用 computed 动态计算图表数据
const chartData = computed(() => ({
  categories: [
    { value: 0.2, color: '#189' },
    { value: 0.8, color: '#2fc25b' },
    { value: 1, color: '#f04864' },
  ],
  series: [
    {
      name: '完成率',
      data: props.data.todayCalorieCompleted / props.data.todayCalorieTarget,
    },
  ],
}))

// 使用 computed 动态计算配置项 opts
const opts = computed(() => ({
  color: ['#5DBE8A', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
  padding: undefined,
  title: {
    name: props.data.todayCalorieCompleted,
    fontSize: 70,
    color: '#5DBE8A',
    offsetY: 0,
  },
  subtitle: {
    name: props.data.todayCalorieTarget,
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
}))

// 动态计算膳食评分（百分比）
const price = computed(() => {
  return ((props.data.todayCalorieCompleted / props.data.todayCalorieTarget) * 100).toFixed(2)
})

// 在 onMounted 中打印一次 computed 的结果，确保其已经计算并展示
onMounted(() => {
  // 如果 props.data 是异步加载的，确保在下一次 DOM 更新周期后再打印
  nextTick(() => {
    console.log('Chart Data onMounted:', chartData.value)
    console.log('Chart Options onMounted:', opts.value)
    console.log('Price onMounted:', price.value)
  })
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
