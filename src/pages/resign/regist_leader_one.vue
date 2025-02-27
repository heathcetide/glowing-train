<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="logo">
      <image :src="logo" mode="scaleToFill" class="image" />
    </view>
    <view>
      <text class="text">欢迎来到食光烙记</text>
    </view>
    <view>
      <text class="subTitel">智能食材管理与健康饮食推荐平台</text>
    </view>

    <view class="introduce">
      <view class="introduce-item" v-for="(item, index) in infoList" :key="index">
        <image :src="item.icon" class="introduce-item-icon" />
        <text class="introduce-item-title">{{ item.title }}</text>
      </view>
    </view>

    <view class="footer">
      <button class="button" @click="goToRegist">开始注册</button>
      <view class="latter" @click="goBack">稍后再说</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import logo from '/static/image/logo/logo.png'
const { safeAreaInsets } = uni.getWindowInfo()

const infoList = [
  { title: '智能分析，定制饮食方案', icon: '/static/image/regist/icon-regist-first.png' },
  { title: '轻松管理，食材不浪费', icon: '/static/image/regist/icon-regist-first.png' },
  { title: '营养记录，守护家人健康', icon: '/static/image/regist/icon-regist-first.png' },
]

const goToRegist = () => {
  uni.navigateTo({
    url: '/pages/resign/regist_leader_two',
  })
}
const goBack = () => {
  uni.navigateBack()
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  .logo {
    width: 350rpx;
    height: 340rpx;
    margin-top: 294rpx;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    font-weight: 700;
    font-size: 72rpx;
    line-height: 100rpx;
    margin-top: 24rpx;
  }
  .subTitel {
    font-weight: 700;
    font-size: 28rpx;
    line-height: 40rpx;
    margin-top: 10rpx;
  }

  .introduce {
    display: flex;
    flex-direction: column;
    margin-top: 240rpx;
    gap: 42rpx;
    &-item {
      display: flex;
      gap: 0 28rpx;
      align-items: center;
      &-icon {
        width: 24.5rpx;
        height: 28rpx;
      }
      &-title {
        font-weight: 400;
        font-size: 28rpx;
        color: #374151;
        line-height: 42rpx;
      }
    }
  }

  .footer {
    width: 100%;
    padding: 0 28rpx;
    color: #6b7280;
    margin-top: 68rpx;
    text-align: center;
    .button {
      width: 100%;
      background-color: #5dbe8a;
      color: white;
      margin-bottom: 34rpx;
    }
  }
}
</style>
