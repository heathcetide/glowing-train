<template>
  <view class="shadow rounded-21rpx bg-white">
    <view class="cover">
      <up-image
        radius="21rpx 21rpx 0 0"
        :lazy-load="true"
        :style="{ border: 'none' }"
        :src="item.cover"
        width="100%"
        height="280rpx"
      />
    </view>
    <view class="containt p-28rpx text-24.5rpx text-#6B7280">
      <view class="title flex justify-between">
        <text class="name text-black text-31.5rpx">{{ item.activityTitle }}</text>
      </view>
      <view class="desc mt-14rpx mb-22rpx"> {{ item.desc }} </view>
      <view class="avatar flex justify-between items-center">
        <view class="left flex gap-8rpx items-center">
          <image :src="IconPeoples" mode="scaleToFill" class="w-35rpx h-28rpx" />
          <text class="text-#6B7280">{{ item.participants }}人参与</text>
        </view>
        <view class="right">
          <up-tag color="#FFFFFF" bg-color="#5DBE8A" border-color="#5DBE8A" class="py-8rpx px-28rpx">立即参与 </up-tag>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconActivityCover1 from '@/static/image/community/icon-activity-cover1.svg'

import IconPeoples from '@/static/image/community/icon-people.svg'
import type { Community } from '@/types/component'
interface Props {
  item: Community.ActivityCardProps
}

const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      activityTitle: '21 天健康饮食计划',
      cover: IconActivityCover1,
      desc: '跟随营养师定制饮食计划，养成健康饮食习惯',
      participants: 2345,
    } as Community.ActivityCardProps),
})
</script>

<style scoped></style>
