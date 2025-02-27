<template>
  <view>
    <up-popup round="20rpx" :show="show" mode="bottom" @close="close" @open="open">
      <view>
        <up-image :src="item.cover" width="200rpx" height="200rpx" />

        <view class="info">
          <view class="title">{{ item.title }}</view>
          <view class="desc">{{ item.stack }}</view>
        </view>
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
