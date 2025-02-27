<template>
  <view>
    <view class="search flex justify-between items-center">
      <text class="title text-#111827 text-28rpx">搜索历史</text>
      <view>
        <uni-icons type="trash" color="#6B7280" size="21" />
        <text class="clear text-24.5rpx text-#6B7280">清空</text>
      </view>
    </view>
    <view class="tags mt-28rpx flex gap-14rpx flex-wrap">
      <view v-for="tag in tags" :key="tag" class="text-#374151 text-24.5rpx bg-#F9FAFB py-14rpx px-20rpx">
        {{ tag }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tags: string[]
  }>(),
  {
    tags: () => ['低脂减肥餐', '低脂减肥餐', '家常菜谱', '减肥食谱', '健康晚餐', '营养午餐'],
  },
)
</script>

<style scoped></style>
