<template>
  <view class="item py-22rpx shadow1 px-24rpx flex justify-between items-center bg-white">
    <image :src="icon" class="size-112rpx" mode="scaleToFill" />
    <view class="desc flex flex-col flex-1 pl-15rpx">
      <text class="title">五花肉</text>
      <text class="" v-if="num">{{ num }}g</text>
    </view>
    <view>
      <up-checkbox :checked="isChecked" @click="handleChecked">
        <template #icon>
          <uni-icons v-show="isChecked" type="checkmarkempty" color="#fff" size="20" />
        </template>
      </up-checkbox>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconMet from '@/static/image/cook/met.svg'

import { ref } from 'vue'

defineProps<{
  title: string
  num?: number
  icon: string
}>()

const isChecked = ref(false)
const handleChecked = () => {
  isChecked.value = !isChecked.value
}
</script>

<style scoped></style>
