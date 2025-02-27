<template>
  <view class="card">
    <view class="title">
      <view>
        <text class="main-title">{{ title }}</text>
      </view>
      <view>
        <text class="sub-title" v-if="props?.subTitle">{{ props?.subTitle }}</text>
      </view>
    </view>
    <view class="content">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subTitle?: string
}

const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
  .title {
    margin-bottom: 28rpx;
    text-align: left;
    .main-title {
      font-weight: 500;
      font-size: 28rpx;
      color: #374151;
      line-height: 42rpx;
    }
    .sub-title {
      font-weight: 400;
      font-size: 25rpx;
      color: #6b7280;
      line-height: 35rpx;
      margin-top: 14rpx;
    }
  }
}
</style>
