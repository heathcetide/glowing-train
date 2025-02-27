<template>
  <view class="card">
    <view class="card-title">
      <view class="title">
        <text class="title-text">{{ card.title }}</text>
        <image :src="plus" mode="scaleToFill" class="icon" />
      </view>
      <view class="subTitle">{{ card.constant }}</view>
    </view>

    <view class="note">
      <view class="text">
        <view class="text-title">{{ card.noteTitle }}</view>
        <view class="text-content">{{ card.noteContent }}</view>
      </view>
      <view class="image">
        <image :src="card.icon" mode="scaleToFill" class="icon" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import plus from '@/static/image/common/plus.png'
import type { CardPropsParams } from '@/types/home'

withDefaults(defineProps<{ card: CardPropsParams }>(), {
  card() {
    return {
      title: '该喝水啦！',
      icon: '/static/image/common/cup.png',
      constant: '适量喝一杯水（约200-250毫升）',
      noteTitle: '喝水',
      noteContent: '1,000/2,500 ml',
    }
  },
})
</script>
<style lang="scss" scoped>
$card-width: 340rpx;
$card-shadow: 0 0 10rpx rgba(0, 0, 0, 0.212);
$icon-width: 40rpx;
$title-font-size: 36rpx;
$content-font-size: 20rpx;
$bg-color: #ffffff;
.card {
  background-color: $bg-color;
  width: $card-width;
  min-height: 300rpx;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 34.88rpx;
  box-shadow: $card-shadow;
  .card-title {
    padding: 20rpx;
    .title {
      display: flex;
      justify-content: space-between;
      font-size: $title-font-size;
      font-weight: 700;

      font-feature-settings: 'kern' on;
      color: #000000;
      .icon {
        width: $icon-width;
        height: $icon-width;
      }
    }

    .subTitle {
      font-size: $content-font-size;
      font-weight: normal;
      line-height: 35rpx;

      color: #4b5563;
    }
  }

  .note {
    display: flex;
    gap: 14rpx;
    padding: 15rpx;
    .image {
      .icon {
        width: 60rpx;
        height: 60rpx;
      }
    }
    .text {
      &-title {
        font-size: 21rpx;
        font-weight: normal;
        line-height: 28rpx;
        color: #6b7280;
      }
      &-content {
        font-size: 30rpx;
      }
    }
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 34.88rpx;
    bottom: 0;
  }
}
</style>
