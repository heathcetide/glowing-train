<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 30 + 'px' }">
    <view class="profit">
      <view class="victor" @click="handleLogin">
        <image
          v-if="memberStore.profile?.avatarUrl"
          :src="memberStore.profile?.avatarUrl"
          mode="scaleToFill"
          class="image"
        />
        <view v-else class="size-112rpx rounded-full bg-red"> </view>
      </view>
      <view class="nickName_progress ml-10rpx">
        <view class="progress">
          <view class="info-box">
            <view>
              <text class="text-31.5px">{{ memberStore.profile?.nickname || '陈思远' }}</text>
            </view>
            <text class="info center px-18rpx py-2rpx w-100rpx h-50rpx text-#fff rounded-50rpx bg-#20C05B">
              <uni-icons type="vip-filled" color="yellow" size="20"></uni-icons>
              <text>Lv6.0</text>
            </text>
          </view>
          <progress
            class="progress-bar rounded-14rpx"
            :percent="present"
            :stroke-width="14"
            backgroundColor="#F3F4F6"
            activeColor="#30CD69"
          />
          <view class="text-#6B7280 text-21rpx juslr">
            <text>成长值</text>
            <text>{{ profile?.levelPoints }} / {{ profile?.maxPoints }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member' // 引入 Pinia store
import { computed } from 'vue'
const { safeAreaInsets } = uni.getWindowInfo()

// 使用 Pinia store
const memberStore = useMemberStore()
const profile = memberStore.profile

const present = computed(() => {
  return (memberStore.profile?.levelPoints! / memberStore.profile?.maxPoints!) * 100 || 50
})
const handleLogin = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>
<style lang="scss" scoped>
.wrap {
  // background-color: #10b981;
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
