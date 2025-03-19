<template>
  <view class="flex-col-nocenter gap28rpx p-28rpx bg-white">
    <!-- 用户信息区域 -->
    <view class="space-y-4">
      <view class="flex items-center justify-between p-4 border-b border-gray-100">
        <text class="text-gray-800 text-32rpx">陈明浩</text>
        <image src="/static/image/icons/right.png" class="w-6 h-6"></image>
      </view>
      <view class="flex items-center justify-between p-4 border-b border-gray-100">
        <text class="text-gray-800">138****5678</text>
        <image src="/static/image/icons/right.png" class="w-6 h-6"></image>
      </view>
      <view class="flex items-center justify-between p-4 border-b border-gray-100">
        <text class="text-gray-800">chen****@gmail.com</text>
        <image src="/static/image/icons/right.png" class="w-6 h-6"></image>
      </view>
    </view>

    <!-- 安全设置区域 -->
    <view class="rounded-lg bg-white p-4 space-y-4">
      <text class="text-gray-800 font-medium text-32rpx">安全设置</text>
      <view class="space-y-6">
        <view class="flex items-start gap-4">
          <image src="/static/image/icons/lock.png" class="w-10 h-10 text-blue-500"></image>
          <view class="flex-1">
            <text class="text-gray-800">登录密码</text>
            <text class="block text-gray-400 text-sm mt-1">建议定期更换密码</text>
          </view>
          <image src="/static/image/icons/right.png" class="w-6 h-6"></image>
        </view>
        <view class="flex items-start gap-4">
          <image src="/static/image/icons/shield.png" class="w-10 h-10 text-green-500"></image>
          <view class="flex-1">
            <text class="text-gray-800">两步验证</text>
            <text class="block text-gray-400 text-sm mt-1">开启后账号更安全</text>
          </view>
          <switch class="scale-75" color="#10B981" />
        </view>
      </view>
    </view>

    <!-- 隐私设置区域 -->
    <view class="rounded-lg bg-white p-4 space-y-4">
      <text class="text-gray-800 font-medium text-32rpx">隐私设置</text>
      <view class="space-y-6">
        <view class="flex items-center gap-4">
          <image src="/static/image/icons/user.png" class="w-10 h-10 text-purple-500"></image>
          <text class="text-gray-800 flex-1">数据共享</text>
          <switch class="scale-75" color="#10B981" />
        </view>
        <view class="flex items-center gap-4">
          <image src="/static/image/icons/clock.png" class="w-10 h-10 text-orange-500"></image>
          <text class="text-gray-800 flex-1">登录记录</text>
          <image src="/static/image/icons/right.png" class="w-6 h-6"></image>
        </view>
      </view>
    </view>

    <!-- 退出登录按钮 -->
    <button class="w-full bg-red-500 text-white py-3 rounded-lg mt-8" @click="logout">退出登录</button>
  </view>
</template>

<script setup lang="ts">
import { logoutUserAPI } from '@/services/user/userBaseModule'
import { useMemberStore } from '@/stores'
import Utils from '@/utils'

const memberStore = useMemberStore()
const logout = () => {
  Utils.showModal({
    title: '退出登录',
    content: '确定退出登录',
    cancel: () => {},
    confirm: async () => {
      const res = await logoutUserAPI()
      if (res.code === 200) {
        memberStore.token = ''
        memberStore.clearProfile()
        Utils.showToast('退出登录成功')
        Utils.navigateTo('/pages/login/index')
      } else {
        Utils.showToast('退出登录失败')
      }
    },
  })
}
</script>

<style scoped></style>
