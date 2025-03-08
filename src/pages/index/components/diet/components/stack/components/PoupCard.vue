<template>
  <view>
    <up-popup round="20rpx" :show="show" mode="bottom" @close="close" @open="open">
      <view class="h-40vh p-30rpx">
        <view class="flex gap-30rpx">
          <up-image :src="item.cover" width="200rpx" height="200rpx" />

          <view class="info flex flex-col gap-10rpx">
            <view class="title text-32rpx font-500">{{ item.title }}</view>
            <view class="stack text-28rpx text-#6B7280">
              <text>库存: </text>
              <text>{{ item.stack }}</text>
            </view>
            <view class="number text-28rpx text-#6B7280">
              <text>规格: </text>
              <text>{{ item.number }}/份</text>
            </view>
            <view class="date text-28rpx text-#6B7280">
              <text>上次盘点: </text>
              <text>{{ item.prevDate }}</text>
            </view>
            <view class="expire text-28rpx text-#F87171">
              <text>到期时间: </text>
              <text>{{ item.latestDate }}</text>
            </view>
          </view>
        </view>

        <SGSliperInput />
      </view>
    </up-popup>
  </view>
</template>

<script setup lang="ts">
import type { HomeIndex } from '@/types/component'

interface Props {
  show: boolean
  item: HomeIndex.Stack.StackItem
  type: 'add' | 'remove'
}
defineProps<Props>()

const emit = defineEmits(['close', 'open'])

const open = () => {
  emit('open')
}
const close = () => {
  emit('close')
}
</script>

<style lang="scss" scoped></style>
