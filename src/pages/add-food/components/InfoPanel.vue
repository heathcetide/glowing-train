<template>
  <view class="p-28rpx mt-20rpx flex-col-nocenter gap28rpx">
    <view class="flex justify-between items-center">
      <text>数量</text>
      <CalcNumber />
    </view>
    <view class="flex justify-between items-center fb">
      <text> 计量单位</text>
      <view class="w-180rpx">
        <uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
      </view>
    </view>
    <view class="flex justify-between items-center">
      <view>保质期</view>
      <view class="w-254rpx">
        <uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CalcNumber from '@/pagesCook/calc-food/components/CalcNumber.vue'
import { ref } from 'vue'

const datetimesingle = ref('')
const value = ref(0)
const range = ref([
  { text: '个', value: 0 },
  { text: '根', value: 1 },
  { text: 'g', value: 2 },
])
const change = () => {}
const changeLog = () => {
  console.log(datetimesingle.value)
}
</script>

<style scoped></style>
