<template>
  <view class="card bg-white rounded-14rpx shadow mb-28rpx">
    <up-image :src="src" width="100%" height="249.75rpx" radius="14rpx" />
    <view class="flex flex-col gap-14rpx p-10.5rpx text-21rpx text-#6B7280">
      <view class="title text-24.5rpx text-24.5 text-black">{{ title }}</view>
      <view class="dsc flex justify-between">
        <view class="time flex gap-5rpx">
          <up-image :src="IconTime" width="21rpx" height="21rpx" />
          <text>{{ time }}分钟</text>
        </view>
        <view class="hot flex gap-5rpx">
          <up-image :src="IconHot" width="21rpx" height="21rpx" />
          <text>{{ hot }}千卡</text>
        </view>
      </view>
      <view class="tags flex gap-10rpx">
        <up-tag
          v-for="tag in tags"
          :text="tag"
          :key="tag"
          border-color="#F0FDF4"
          shape="circle"
          size="mini"
          bg-color="#F0FDF4"
          color="#5DBE8A"
        />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconTime from '@/static/image/home/icon-time.svg'
import IconHot from '@/static/image/home/icon-hot.svg'

defineOptions({
  name: 'RecipeCard',
})
interface Props {
  src: string
  title: string
  tags: string[]
  time: number
  hot: number
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
})
</script>

<style scoped></style>
