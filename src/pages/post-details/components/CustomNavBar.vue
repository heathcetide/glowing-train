<template>
  <uni-nav-bar left-width="100%" status-bar>
    <template #left>
      <view class="flex gap-10rpx items-center" @click="onBack">
        <uni-icons type="left" color="" size="20" />
        <up-avatar mode="scaleToFill" :src="src"></up-avatar>
        <text>{{ name }}</text>
      </view>
    </template>
    <template #right>
      <view class="w-100rpx rounded-full h-50rpx text-#16A34A bg-#F0FDF4 center" @click="onLook">关注</view>
    </template>
  </uni-nav-bar>
</template>

<script setup lang="ts">
interface Props {
  src: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
  name: '小明',
})

const onBack = () => {
  uni.navigateBack()
}
const onLook = () => {
  uni.showToast({
    title: '关注成功',
    icon: 'success',
  })
}
</script>

<style scoped></style>
