<template>
  <view class="p-32rpx bg-#fff text-32rpx flex flex-col gap-32rpx">
    <view class="font-700">问题反馈</view>
    <view class="text-28rpx">问题类型</view>
    <uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
    <view class="text-28rpx">问题描述</view>

    <uni-easyinput
      v-model="content"
      type="textarea"
      placeholder="请详细描述您遇到的问题或建议（限300字）"
      :maxlength="300"
      @confirm="handleConfirm"
      clearable
      confirm-type="done"
      trim="both"
      @clear="handleClear"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 响应式数据
const value = ref(0)
const content = ref('')

const range = ref([
  { value: 0, text: '请选择问题类型' },
  { value: 1, text: '足球' },
  { value: 2, text: '游泳' },
])
// 方法
const change = (item: UniHelper.UniDataSelectValue) => {
  console.log(item)
}

const handleConfirm = () => {
  console.log('confirm')
}
const handleClear = () => {
  console.log('confirm')
}
</script>

<style scoped></style>
