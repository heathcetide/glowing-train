<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 30 + 'px' }">
    <uni-row class="top">
      <uni-col :span="10">
        <text class="nickName">{{ memberStore.profile?.levelName || '萌新' }}</text>
      </uni-col>
      <uni-col :span="2" :offset="10">
        <uni-icons type="gear" size="30" color="#fff" />
        <uni-icons type="email" size="30" color="#fff" />
      </uni-col>
    </uni-row>
    <view class="profit">
      <view class="victor" @click="handleLogin">
        <image :src="memberStore.profile?.avatarUrl" mode="scaleToFill" class="image" />
      </view>
      <view class="nickName_progress">
        <view class="progress">
          <view class="info-box">
            <view>
              <text class="num">{{ memberStore.profile?.nickname || '绿色食物分享家' }}</text>
            </view>
            <text class="info">距离升级积分</text>
          </view>
          <progress
            class="progress-bar"
            :percent="(memberStore.profile?.levelPoints / memberStore.profile?.maxPoints) * 100"
            :stroke-width="3"
            backgroundColor="#108981"
            activeColor="#ffffff"
          />
          <text class="num">{{ memberStore.profile?.levelPoints }}/{{ memberStore.profile?.maxPoints || '999' }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member' // 引入 Pinia store
const { safeAreaInsets } = uni.getWindowInfo()

// 使用 Pinia store
const memberStore = useMemberStore()

const handleLogin = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>
<style lang="scss" scoped>
.wrap {
  background-color: #10b981;
  padding: 28rpx 28rpx 42rpx 28rpx;
  /*   height: 259rpx; */
  border-radius: 0 0 42rpx 42rpx;

  .top {
    padding: 30rpx 0;
    .nickName {
      font-size: 35rpx;
      font-weight: 700;
      color: rgb(214, 212, 212);
    }
  }

  .profit {
    display: flex;

    .victor {
      margin-right: 26rpx;
      width: 100rpx;
      height: 100rpx;
      border-radius: 50rpx;

      padding: 10rpx;
      .image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 50rpx;
      }
    }

    .nickName_progress {
      flex-grow: 1;
      .progress-bar {
        margin: 10rpx 0;
      }

      .progress {
        .info-box {
          display: flex;
          justify-content: space-between;
          font-size: 26.67rpx;
          font-weight: 400;
          color: #4e4c4c;
          margin-bottom: 10rpx;
        }
      }

      .num {
        font-size: 26.67rpx;
        font-weight: 400;
        color: #000;
      }
    }
  }
}
</style>
