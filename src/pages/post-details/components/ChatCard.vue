<template>
  <!-- 显示圆形头像 -->
  <view class="flex gap-20rpx w-100% py28rpx">
    <up-avatar :src="item.avatar"></up-avatar>
    <view class="flex flex-col gap20rpx text-24.5rpx flex-1">
      <view class="title flex justify-between w-100%">
        <view class="name">{{ item.name }}</view>
        <view class="time text-#374151">{{ item.time }}</view>
      </view>
      <view class="containt text-#374151"> {{ item.containt }} </view>
      <view class="flex gap-10rpx text-#6B7280 items-center line-height-28rpx">
        <view class="flex gap-5rpx">
          <uni-icons type="heart" color="#6B7280" size="18" />
          <text>12</text>
        </view>
        <view class="ml-50rpx" @click="handleBack">回复</view>
      </view>
    </view>
  </view>
  <template v-if="item.children">
    <view v-for="ite in item.children" :key="ite.id">
      <ChatCard :item="ite" />
    </view>
  </template>
</template>

<script setup lang="ts">
interface CardItem {
  id: number
  name: string
  time: string
  containt: string
  avatar: string
  children?: CardItem[]
}
withDefaults(defineProps<{ item: CardItem }>(), {
  item: () =>
    ({
      name: '美食爱好者',
      time: '10分钟前',
      avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
      containt: '看起来太诱人了！请问糖放多少合适呢?',
    } as CardItem),
})

const handleBack = () => {}
</script>

<style scoped></style>
