<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <view @click="handleLookDetail">查看食才详情 </view>
    <view @click="handleLookSP">查看食谱详情 </view>
  </view>
</template>

<script setup lang="ts">
const { safeAreaInsets } = uni.getWindowInfo()

const handleLookDetail = () => {
  uni.navigateTo({ url: `/pages/dietDetails/dietDetails` })
}
const handleLookSP = () => {
  uni.navigateTo({ url: '/pages/food/food' })
}
</script>
<style lang="scss" scoped></style>
