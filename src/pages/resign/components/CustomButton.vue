<template>
  <view :style="{ margin: margin }">
    <view class="button">
      <button class="edit-btn" @click="onNext">下一步 <uni-icons type="arrow-right" color="#fff" size="21" /></button>
      <view class="info"> 稍后再说</view>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  url: string
  margin?: string
}

defineOptions({
  name: 'CustomButton',
})
const props = defineProps<Props>()
const onNext = () => {
  uni.navigateTo({
    url: props.url,
  })
}
</script>

<style scoped lang="scss">
.button {
  padding: 0 28rpx;
  .edit-btn {
    background-color: #5dbe8a;
    font-weight: 500;
    font-size: 32rpx;
    color: #ffffff;
    line-height: 105rpx;
    border-radius: 8rpx;
    margin-bottom: 34rpx;
  }
  .info {
    font-weight: 400;
    font-size: 28rpx;
    color: #4b5563;
    line-height: 40rpx;
    text-align: center;
    .login {
      color: #5dbe8a;
    }
  }
}
</style>
