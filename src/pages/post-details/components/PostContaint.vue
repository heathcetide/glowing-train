<template>
  <view class="p-28rpx text-#374151 text-28rpx">
    <up-image :src="item.image" width="100%" height="462.66rpx " />
    <!-- <view class="title text-35rpx font700 text-#000 mt20rpx center">{{ item.title }}</view> -->
    <rich-text :nodes="item.title"> </rich-text>
    <up-read-more>
      <rich-text :nodes="item.conduct"></rich-text>
    </up-read-more>
    <view>
      <!-- <view class="mb-20rpx">食材准备:</view> -->
      <view class="flex flex-col gap10rpx">
        <view v-for="it in item.tags" :key="it">
          <view>{{ it }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  item: {
    image: string
    title: string
    conduct: string
    tags: string[]
  }
}

defineProps<Props>()

// const item = {
//   title: '分享一道简单又美味的家常菜：红烧排骨',
//   conduct:
//     ' 今天给大家分享一道我最拿手的菜品，红烧排骨。这道 菜不仅美味可口，而且制作起来也相对简单，非常适合 在家尝试。',
//   prepare: [
//     {
//       tip: '主料',
//       value: '精选猪排骨500g',
//     },
//     {
//       tip: '调味料',
//       value: '生抽、老抽、料酒、白糖、八角、葱姜蒜',
//     },
//   ],
// }
</script>

<style scoped>
.input {
  padding: 20rpx;
  background-color: #fff;
  height: 100rpx;
}
</style>
