<template>
  <view class="wrap">
    <image src="@/static/image/common/warn.png" mode="scaleToFill" class="image" />
    <view class="content">
      <text class="title"> 3种食材即将过期 </text>
      <text class="text"> 建议尽快食用：胡萝卜、西兰花、 鸡胸肉 </text>
    </view>
    <van-button type="danger" size="mini">立即处理</van-button>
  </view>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  padding: 28rpx;
  background-color: #fef2f2;
  gap: 10rpx;
  .image {
    width: 70rpx;
    height: 70rpx;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 28rpx;
      font-weight: 500;
      line-height: 42rpx;
      color: #dc2626;
    }
    .text {
      font-size: 20rpx;
      font-weight: normal;
      line-height: 35rpx;
      color: #ef4444;
    }
  }
}
</style>
