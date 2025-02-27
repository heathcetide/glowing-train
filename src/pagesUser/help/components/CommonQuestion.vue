<template>
  <view class="p-32rpx bg-#fff text-32rpx flex flex-col gap-32rpx">
    <view class="font-700">常见问题</view>
    <up-collapse :value="1" accordion :border="false">
      <up-collapse-item v-for="(item, index) in data" :key="index" :titleStyle="{ backgroundColor: '#F3F4F6' }">
        <template #title>
          <text class="u-page__item__title__slot-title">{{ item.title }}</text>
        </template>
        <view class="containt flex flex-col gap-16rpx" v-if="item.children">
          <view
            class="item rounded-16rpx p-26rpx border-2rpx b-#F3F4F6 border-solid flex items-center justify-between"
            v-for="(subItem, index) in item.children"
            :key="index"
          >
            <text> {{ subItem }}</text>
            <uni-icons type="plus" color="black" size="20" />
          </view>
        </view>
        <template #right-icon>
          <uni-icons type="right" color="" size="24" />
        </template>
      </up-collapse-item>
    </up-collapse>
  </view>
</template>

<script setup lang="ts">
const data = [
  {
    title: '账户问题',
    children: ['如何注册账号？', '如何修改密码？'],
  },
  {
    title: '功能问题',
  },
  {
    title: '隐私与安全',
  },
]
</script>

<style scoped></style>
