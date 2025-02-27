<template>
  <!--     <up-navbar title="食谱" :autoBack="true" :fixed="false" bgColor="#cbf" height="60">
      <template #left>
        <up-icon name="arrow-leftward"></up-icon>
      </template>
      <template #right>
        <view class="right_icon">
          <up-icon name="heart"></up-icon>
          <up-icon name="share"></up-icon>
        </view>
      </template>
    </up-navbar> -->
  <uni-nav-bar shadow status-bar left-icon="left" left-text="返回" title="食谱" height="100" @clickLeft="goBack" />
  <view class="image">
    <image :src="diet" mode="scaleToFill" />
  </view>
</template>

<script setup lang="ts">
import diet from '@/static/image/common/diet.png'

const goBack = () => {
  uni.navigateBack()
}
</script>
<style lang="scss" scoped>
.right_icon {
  display: flex;
  gap: 10rpx;
}
.image {
  width: 750rpx;
  height: 448rpx;

  image {
    width: 100%;
  }
}
</style>
