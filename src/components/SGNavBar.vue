<template>
  <view class="navbar">
    <view class="wrap">
      <view class="left">
        <uni-icons type="arrow-left" color="" size="24" @click="onClickLeft" />
      </view>
      <view class="right">
        <slot name="right"></slot>
      </view>
      <view class="containt" :style="{ width: width }">
        <text v-if="title">{{ title }}</text>
        <template v-else>
          <slot name="title"></slot>
        </template>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '80%',
  },
})

const onClickLeft = () => {
  uni.navigateBack()
}
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  z-index: 999;
  width: 750rpx;
  min-height: 100rpx;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  .wrap {
    position: absolute;
    bottom: 10rpx;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 60rpx;
    justify-content: space-between;
    padding: 0 24rpx;

    .containt {
      position: absolute;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 31.5rpx;
      font-weight: 500;
      bottom: 0;
      left: 10%;
    }
  }
}
</style>
