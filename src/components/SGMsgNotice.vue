<template>
  <view class="wrap">
    <view class="card">
      <image :src="imageList[flag]" mode="scaleToFill" />
      <text class="flag">{{ title[flag] }}</text>
      <text class="msg">{{ msg }} </text>
      <button v-if="flag !== 'comfirm'" class="btn" @click="onBack">返回</button>
      <view v-else class="btngroup">
        <button class="reject" @click="onReject">否</button>
        <button class="resolve" @click="onConfirm">是</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import failIcon from '@/static/image/common/fail_icon.png'
import successIcon from '@/static/image/common/success_icon.png'
import comfrimIcom from '@/static/image/common/comfrim_icon.png'
import { ref } from 'vue'

interface Props {
  flag: 'fail' | 'success' | 'comfirm'
  msg: string
}

const title = ref({
  fail: 'Failed!',
  success: 'Success?',
  comfirm: 'Confirm?',
})
withDefaults(defineProps<Props>(), {
  flag: 'comfirm',
  msg: '返回对应的失败信息',
})
const imageList = {
  fail: failIcon,
  success: successIcon,
  comfirm: comfrimIcom,
}

const onReject = () => {
  uni.navigateBack()
}

const onBack = () => {
  uni.navigateBack()
}
const onConfirm = () => {
  uni.navigateBack()
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: calc(100vh - 200rpx);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card {
    width: 600rpx;
    height: 800rpx;
    box-shadow: 0rpx 38rpx 94rpx -16rpx rgba(0, 0, 0, 0.25);
    border-radius: 40rpx;
    display: flex;
    flex-direction: column;
    padding: 54rpx 80rpx;
    align-items: center;

    image {
      width: 180rpx;
      height: 180rpx;
    }
    .msg {
      font-size: 28rpx;
      color: #808080;
      line-height: 43rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
      margin-bottom: 192rpx;
    }
    .btn {
      width: 440rpx;
      height: 120rpx;
      background: #5dbe8a;
      border-radius: 30rpx;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .flag {
      font-weight: 700;
      margin: 56rpx 0 12rpx;
      font-size: 60rpx;
      color: #5dbe8a;
      line-height: 90rpx;
      text-align: center;
      font-style: normal;
    }

    .btngroup {
      display: flex;
      justify-content: space-between;
      gap: 40rpx;
      height: 120rpx;
      button {
        width: 200rpx;
        line-height: 120rpx;
        font-size: 36rpx;
        color: white;
      }
      .reject {
        background: #6a6a6a;
      }
      .resolve {
        background: #5dbe8a;
      }
    }
  }
}
</style>
