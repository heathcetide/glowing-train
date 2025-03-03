<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="logo">
      <image :src="logo" mode="scaleToFill" class="image" />
    </view>
    <view>
      <text class="text">开始制定你的健康计划</text>
    </view>
    <view class="mb-320rpx">
      <text class="subTitel">开始制定你的健康计划</text>
    </view>

    <view class="infoList flex justify-between w-100% p-28rpx">
      <view class="item col" v-for="item in infoList" :key="item.title">
        <image :src="item.icon" class="size-112rpx" mode="scaleToFill" />
        <text class="text-24.5rpx">{{ item.title }}</text>
        <text class="text-21rpx text-0">{{ item.subTitle }}</text>
      </view>
    </view>

    <view class="footer">
      <button class="button" @click="goMakePlan">开始制定计划</button>
      <view class="text-24.5rpx">只需简单几步，即可开启健康生活 </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import logo from '/static/image/logo/logo.png'
import IconIndex1 from '@/static/image/plan-leader/icon-planleader-index-1.svg'
import IconIndex2 from '@/static/image/plan-leader/icon-planleader-index-2.svg'
import IconIndex3 from '@/static/image/plan-leader/icon-planleader-index-3.svg'

const { safeAreaInsets } = uni.getWindowInfo()

const infoList = [
  { title: '个性化定制', subTitle: '根据你的需求量身定制', icon: IconIndex1 },
  { title: '专业指导', subTitle: '科学的专业建议', icon: IconIndex2 },
  { title: '目标追踪', subTitle: '实时跟进达成进度', icon: IconIndex3 },
]

const goMakePlan = () => {
  uni.navigateTo({
    url: '/pagesPlanLeader/leader_first/index',
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
    font-size: 48rpx;
    line-height: 100rpx;
    margin-top: 24rpx;
  }
  .subTitel {
    font-weight: 700;
    font-size: 28rpx;
    line-height: 40rpx;
    margin-top: 10rpx;
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

page {
  background: #fff;
}
</style>
