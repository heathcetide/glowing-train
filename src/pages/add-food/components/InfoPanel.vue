<template>
  <view class="px-28rpx mt-20rpx">
    <view class="flex justify-between bg-#fff items-center">
      <text>数量</text>
      <CalcNumber />
    </view>
    <view class="flex justify-between items-center">
      <text> 计量单位</text>
      <view>个</view>
    </view>
    <view class="flex justify-between items-center">
      <view>保质期</view>
      <view class="w-500rpx">
        <uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CalcNumber from '@/pagesCook/calc-food/components/CalcNumber.vue'
import { ref } from 'vue'

const list = []

const datetimesingle = ref('')

const changeLog = () => {
  console.log(datetimesingle.value)
}
</script>

<style scoped></style>
