<template>
  <view class="pos-fixed bottom-100rpx px-28rpx w-750rpx">
    <QusetTags />
    <view class="input h-131rpx mt-10rpx bg-#fff px-14rpx pt-10rpx pb-16rpx flex items-center">
      <uni-easyinput
        trim="both"
        v-model="content"
        type="text"
        placeholder="请输入您的健康问题..."
        :inputBorder="false"
      />
      <uni-icons type="mic-filled" color="#5DBE8A" size="24" />

      <button size="mini" class="bg-#5DBE8A text-#fff">发送</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QusetTags from './QusetTags.vue'

const content = ref('')
</script>

<style scoped></style>
