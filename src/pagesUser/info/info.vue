<template>
  <view>
    <view class="avatar bg-#5DBE8A w-100% h-384rpx center">
      <image :src="memberStore.profile?.avatarUrl" mode="scaleToFill" class="size-400rpx avatar-img" />
    </view>

    <view class="panel p-32rpx flex flex-col gap-32rpx">
      <view class="name flex justify-between p-32rpx bg-#fff">
        <text>昵称</text>
        <view class="flex gap-18rpx items-center">
          <text>{{ memberStore?.profile?.nickname || 'xxx' }}</text>
          <image :src="IconEdit" mode="scaleToFill" class="size-31.82rpx" />
        </view>
      </view>
      <view class="name flex justify-between p-32rpx bg-#fff">
        <text>性别</text>
        <view v-if="userGender" class="bg-#5DBE8A px-24rpx py-8rpx text-#fff">{{
          memberStore?.profile?.gender == 0 ? '女' : '男'
        }}</view>
        <view v-else class="flex gap-24rpx items-center">
          <view v-for="tag in sexTags" :key="tag" class="bg-#F3F4F6 text-#4B5563 px-24rpx py-8rpx"> {{ tag }}</view>
        </view>
      </view>
      <view class="name flex justify-between p-32rpx bg-#fff">
        <text>生日</text>
        <view class="w-280rpx">
          <uni-datetime-picker disabled v-model="birthday" />
        </view>
      </view>
    </view>

    <view class="bottom p-32rpx flex gap-32rpx bg-#fff pos-fixed bottom-0rpx w-100%">
      <button class="bg-#F3F4F6 text-#4B5563 flex-1" @click="onCancel">取消</button>
      <button class="bg-#5DBE8A text-#fff flex-1" @click="onSave">保存更改</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import UserAvatar from '@/static/image/center/user-avatar.svg'
import IconEdit from '@/static/image/center/icon-edit.svg'
import { useMemberStore } from '@/stores'
import { computed, ref } from 'vue'
import type { User } from '@/types/user'

const sexTags = ['男', '女', '保密']

const memberStore = useMemberStore()
const user = memberStore.profile as User.Info
const birthday = ref(user?.birthday || '2020-2-3')

const userGender: number = user?.gender || 1

const onSave = () => {
  uni.showLoading({
    title: '保存中',
  })
}
const onCancel = () => {
  uni.navigateBack()
}
</script>

<style scoped>
.avatar-img {
  width: 300rpx; /* 固定大小 */
  height: 300rpx; /* 固定大小 */
  border-radius: 50%; /* 圆形 */
}
</style>
