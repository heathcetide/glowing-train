<template>
  <view class="p-32rpx bg-#fff text-32rpx flex flex-col gap-32rpx w-100%">
    <view class="font-700">问题反馈</view>
    <view class="flex flex-col gap-24rpx w-100%">
      <view class="flex flex-col gap-16rpx">
        <text class="text-28rpx text-#374151">问题类型</text>
        <view class="w-100% border-2rpx border-solid border-#E5E7EB rounded-16rpx">
          <picker mode="selector" :range="range" :value="value" @change="change">
            <view class="h-88rpx flex items-center px-24rpx text-#9CA3AF">
              {{ range[value] || '请选择问题类型' }}
              <uni-icons type="bottom" size="16" color="#9CA3AF" class="ml-auto" />
            </view>
          </picker>
        </view>
      </view>
      <view class="flex flex-col gap-16rpx w-100%">
        <text class="text-28rpx text-#374151">问题描述</text>
        <textarea
          class="h-240rpx w-91% p-24rpx border-2rpx border-solid border-#E5E7EB rounded-16rpx text-28rpx"
          placeholder="请详细描述您遇到的问题或建议（限300字）"
          placeholder-class="text-#9CA3AF"
          :maxlength="300"
          :adjust-position="true"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 响应式数据
const value = ref(-1)
const content = ref('')

const range = ['功能问题', '账户问题', '系统问题', '其他']
// 方法
const change = (item: UniHelper.SelectorPickerOnChangeEvent) => {
  value.value = item.detail.value
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
