<template>
  <view class="shadow rounded-21rpx">
    <view class="cover">
      <up-image
        radius="21rpx 21rpx 0 0"
        :lazy-load="true"
        :style="{ border: 'none' }"
        :src="item.foodMenu.image"
        width="100%"
        height="280rpx"
        @click="preview"
      />
    </view>
    <view class="containt p-28rpx text-24.5rpx text-#6B7280">
      <view class="title flex justify-between">
        <text class="name text-#111827 text-28rpx">{{ item.name }}</text>
        <view class="flex gap-14rpx">
          <view class="like flex gap-8rpx items-center">
            <text> 评分: {{ item.rankScore }}</text>
          </view>

          <view class="comment gap-8rpx flex items-center">
            <text> {{ item.foodMenu.craft }}</text>
          </view>
        </view>
      </view>
      <view class="desc mt-14rpx mb-22rpx"> {{ item.foodMenu.title }} </view>
      <view class="avatar flex justify-between items-center">
        <view class="left flex gap-8rpx items-center">
          <text class="nickname text-#4B5563">{{ item.foodMenu.intro.slice(0, 14) }}....</text>
        </view>
        <view class="right">
          <up-tag
            color="#5DBE8A"
            bg-color="#ECFDF5"
            border-color="#ECFDF5"
            @click="onGoToDetials"
            class="py-8rpx px-22rpx"
            >查看详情
          </up-tag>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'

interface Props {
  item: any
}
const props = withDefaults(defineProps<Props>(), {
  item: () => ({} as any),
})
const preview = () => {
  uni.previewImage({
    urls: [props.item.foodMenu.image],
    current: 0,
  })
}

watchEffect(() => {
  console.log(props.item)
})

const onGoToDetials = () => {
  uni.navigateTo({
    url: '/pages/dietDetails/dietDetails?id=' + props.item.foodMenu.id,
  })
}
</script>

<style scoped></style>
