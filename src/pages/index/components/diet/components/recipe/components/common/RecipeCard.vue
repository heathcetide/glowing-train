<template>
  <view class="card bg-white rounded-14rpx shadow mb-28rpx">
    <up-image :src="src" width="100%" height="249.75rpx" radius="14rpx" mode="scaleToFill" @click="goToDetail" />
    <view class="flex flex-col gap-14rpx p-10.5rpx text-21rpx text-#6B7280">
      <view class="title text-24.5rpx text-24.5 text-black ellipsis1">{{ title }}</view>
      <view class="dsc flex justify-between">
        <view class="time flex gap-5rpx">
          <up-image :src="IconTime" width="21rpx" height="21rpx" />
          <text>{{ time }}分钟</text>
        </view>
        <view class="hot flex gap-5rpx">
          <up-image :src="IconHot" width="21rpx" height="21rpx" />
          <text>{{ hot || Math.floor(100 + Math.random() * 300) }}千卡</text>
        </view>
      </view>
      <view class="tags flex gap-10rpx h-50rpx">
        <up-tag
          v-for="tag in limitedTags"
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
import { computed } from 'vue'
import IconTime from '@/static/image/home/icon-time.svg'
import IconHot from '@/static/image/home/icon-hot.svg'

// const hotf = computed(() => {})

defineOptions({
  name: 'RecipeCard',
})

interface Props {
  src: string
  title: string
  tags: string // tags should be a string representing a JSON array
  time: string
  id: string
  hot?: number
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
})

// Parse the tags string to an actual array
const parsedTags = computed(() => {
  try {
    return JSON.parse(props.tags)
  } catch (e) {
    console.error('Error parsing tags:', e)
    return []
  }
})

// Limit tags to the first two
const limitedTags = computed(() => parsedTags.value.slice(0, 2))

const goToDetail = () => {
  uni.navigateTo({
    url: '/pages/dietDetails/dietDetails?id=' + props.id,
  })
}
</script>

<style scoped></style>
