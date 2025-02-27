<template>
  <view class="shadow rounded-21rpx">
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
        <text class="name text-#111827 text-28rpx">{{ item.name }}</text>
        <view class="flex gap-14rpx">
          <view class="like flex gap-8rpx items-center">
            <uni-icons v-if="item.isCommented" type="heart-filled" color="red" size="21" />
            <uni-icons v-else type="heart" color="" size="21" />
            <text> {{ item.like }}</text>
          </view>

          <view class="comment gap-8rpx flex items-center">
            <image :src="IconComment" mode="scaleToFill" class="size-30rpx" />
            <text> {{ item.comment }}</text>
          </view>
        </view>
      </view>
      <view class="desc mt-14rpx mb-22rpx"> {{ item.desc }} </view>
      <view class="avatar flex justify-between items-center">
        <view class="left flex gap-8rpx items-center">
          <image :src="IconAvatar" mode="scaleToFill" class="size-42rpx" />
          <text class="nickname text-#4B5563">{{ item.author }}</text>
        </view>
        <view class="right">
          <up-tag color="#5DBE8A" bg-color="#ECFDF5" border-color="#ECFDF5" class="py-8rpx px-22rpx">查看详情 </up-tag>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconPic1 from '@/static/image/community/icon-pic1.svg'
import IconComment from '@/static/image/community/icon-comment.svg'
import IconAvatar from '@/static/image/community/icon-avatar.svg'
import type { Community } from '@/types/component'
interface Props {
  item: Community.RecipeListCardItem
}

const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      author: '营养师小王',
      avatar: IconAvatar,
      cover: IconPic1,
      desc: '低脂健康，营养均衡的轻食套餐，热量仅需 350 卡路里',
      like: 2341,
      comment: 156,
      name: '轻食沙拉套餐',
    } as Community.RecipeListCardItem),
})
</script>

<style scoped></style>
