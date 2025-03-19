<template>
  <view class="shadow rounded-21rpx bg-white">
    <view class="cover">
      <up-image
        radius="21rpx 21rpx 0 0"
        :lazy-load="true"
        :style="{ border: 'none' }"
        :src="item.imageUrl"
        width="100%"
        height="280rpx"
      />
    </view>
    <view class="containt p-28rpx text-24.5rpx text-#6B7280">
      <view class="title flex justify-between">
        <text class="name text-black text-31.5rpx">{{ item.title }}</text>
      </view>
      <view class="desc mt-14rpx mb-22rpx"> {{ item.description }} </view>
      <view class="avatar flex justify-between items-center">
        <view class="left flex gap-8rpx items-center">
          <image :src="IconPeoples" mode="scaleToFill" class="w-35rpx h-28rpx" />
          <text class="text-#6B7280">地点:{{ item.location }}</text>
        </view>
        <view class="right">
          <up-tag
            color="#FFFFFF"
            bg-color="#5DBE8A"
            border-color="#5DBE8A"
            class="py-8rpx px-28rpx"
            @click="handleJoinActivity"
            >立即参与
          </up-tag>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconActivityCover1 from '@/static/image/community/icon-activity-cover1.svg'

import IconPeoples from '@/static/image/community/icon-people.svg'
import type { Community } from '@/types/component'
import useAcitvityStore from '@/stores/modules/activity'

const activityStore = useAcitvityStore()
interface Props {
  item: Community.ActivityCardProps
}

const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      activityType: '健康挑战',
      createdAt: '2025-03-09 09:38:26',
      deleted: 0,
      description: '适合中老年人的健康生活计划，轻松运动。',
      endDate: 1746014400000,
      id: 5,
      imageUrl:
        'https://cetide-1325039295.cos.ap-chengdu.myqcloud.com/b77339a6-6b52-40fb-9fb4-df04959c859dwordCloud-2412190816.png',
      location: '社区活动中心',
      startDate: 1743469200000,
      title: '中老年健康挑战',
      updatedAt: '2025-03-09 09:53:32',
    } as Community.ActivityCardProps),
})

const handleJoinActivity = () => {
  activityStore.setActivityItem(props.item)

  uni.navigateTo({
    url: '/pages/activity-detials/index?id=' + props.item.id,
  })
}
</script>

<style scoped></style>
