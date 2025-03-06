<template>
  <!-- 今日运动计划 -->
  <view class="exercise-plan">
    <view class="flex justify-between items-center mb-16rpx">
      <text class="text-31.5rpx font-medium">今日运动计划</text>
      <uni-icons type="right" color="#9CA3AF" size="15" />
    </view>
    <template v-for="(item, index) in list" :key="index">
      <view class="exercise-card bg-white rounded-lg p-16rpx mb-16rpx shadow-sm">
        <view class="flex items-center">
          <image :src="item.icon" class="w-80rpx h-80rpx rounded" />
          <view class="ml-16rpx flex-1">
            <view class="flex justify-between">
              <text class="font-medium">{{ item.title }}</text>
              <text class="text-#5DBE8A fb">{{ item.time }}</text>
            </view>
            <text class="fb text-#6B7280">{{ item.desc }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import Yujia from '@image/icon-yujia.svg'

const list = [
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '力量训练', time: '30分钟', desc: '哑铃训练 + 核心力量' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
]
</script>

<style scoped></style>
