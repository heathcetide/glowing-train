<template>
  <!-- 头像区域 -->
  <view class="avatar-section col bg-#ffff p-42rpx">
    <view class="avatar-wrapper pos-relative">
      <up-avatar :src="profile?.avatarUrl" :size="70" />
      <view class="pos-absolute bottom-0 right-0 rounded-full bg-#fff size-56rpx center">
        <uni-icons type="camera-filled" color="#4B5563" size="24" />
      </view>
    </view>
    <view class="flex items-center mt-24rpx text-center gap10rpx">
      <view class="text-32rpx font-medium">{{ profile?.nickname }}</view>
      <uni-icons type="compose" color="#6B7280" size="20" />
    </view>
    <text class="text-#6B7280 fb mt-8rpx">ID: 88888888</text>
  </view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMemberStore } from '@/stores'
const { profile } = storeToRefs(useMemberStore())
</script>

<style scoped></style>
