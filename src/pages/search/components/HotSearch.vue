<template>
  <view class="mt-48rpx">
    <view class="title text-#111827 mb-28rpx">热门搜索</view>
    <uni-row :gutter="28">
      <uni-col :span="12" v-for="(item, index) in list" :key="item.title">
        <view class="card-item text-24.5rpx flex gap-20rpx items-center p-22rpx mb-28rpx bg-#F9FAFB">
          <view v-if="index < 3" class="icon-dot center rounded-full w-42rpx h-42rpx bg-#5DBE8A text-white">
            {{ index }}</view
          >
          <view v-else class="icon-dot center rounded-full size-42rpx bg-#E5E7EB text-#4B5563"> {{ index }}</view>
          <view class="flex flex-col">
            <text class="text-#111827 text-24.5rpx">{{ item.title }}</text>
            <text class="text-#6B7280 text-21rpx">{{ item.num }}次搜索</text>
          </view>
        </view>
      </uni-col>
    </uni-row>
  </view>
</template>

<script setup lang="ts">
interface Item {
  title: string
  num: number
}
interface Props {
  list: Item[]
}

const props = defineProps<Props>()
</script>

<style scoped></style>
