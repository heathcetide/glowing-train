<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="logo">
      <image :src="logo" mode="scaleToFill" class="image" />
    </view>
    <view>
      <text class="text">食光烙记</text>
    </view>
    <view>
      <text class="subTitel">赋能健康，智享营养 </text>
    </view>

    <view class="footer col">
      <view class="flex">
        <view class="team">
          <image :src="teamLogo" mode="scaleToFill" class="teamLogo" />
        </view>
        <view class="dis">
          <view>智能食材管理与健康饮食推荐平台</view>
          <view>学澜 EDUWAVE开发</view>
        </view>
      </view>

      <view class="mt-50rpx text-0">
        <view>蜀ICP备2025125402号</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import logo from '/static/image/logo/logo.png'
import teamLogo from '/static/image/logo/teamLogo.png'
import { onLoad } from '@dcloudio/uni-app'
const { safeAreaInsets } = uni.getWindowInfo()

import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
onLoad(() => {
  // TODO : 跳转逻辑
  if (memberStore.token) {
    uni.switchTab({
      url: '/pages/index/index',
    })
    return
  }

  setTimeout(() => {
    uni.navigateTo({
      url: '/pages/login/login',
    })
  }, 2000)
})
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  .logo {
    width: 203px;
    height: 197px;
    margin-top: 238rpx;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    font-size: 48px;
    font-weight: bolder;
    letter-spacing: 5px;
  }
  .subTitel {
    font-size: 16px;
    font-weight: bolder;
    letter-spacing: 2px;
  }

  .footer {
    display: flex;
    align-items: bottom;
    width: 200px;
    font-size: 10px;
    margin-top: 303px;
    .team {
      width: 38px;
      height: 34px;

      .teamLogo {
        width: 100%;
        height: 100%;
      }
    }

    .dis {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-left: 5px;
    }
  }
}
</style>
