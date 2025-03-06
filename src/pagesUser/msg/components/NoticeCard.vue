<template>
  <view class="card">
    <image src="@/static/image/community/icon.png" mode="scaleToFill" class="image" />
    <view class="content">
      <view class="title">
        <view class="time">
          <text class="title-text"> {{ title }} </text>
          <uni-badge absolute="rightTop" size="small" text="10" type="primary" is-dot v-if="!isRead">
            <view class="box">
              <text class="time-text"> {{ time }} </text></view
            >
          </uni-badge>
          <text class="time-text" v-else> {{ time }} </text></view
        >
      </view>
      <text class="text"> {{ content }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface NoticeCardProps {
  title: string
  content: string
  time: string
  isRead?: boolean
}
withDefaults(defineProps<NoticeCardProps>(), {
  title: '警告',
  content: '建议尽快食用：胡萝卜、西兰花、 鸡胸肉 ',
  time: '3分钟前',
  isRead: false,
})
</script>
<style lang="scss" scoped>
// @import '@/styles/color.scss';
.card {
  display: flex;
  padding: 28rpx;
  height: 175rpx;
  gap: 20rpx;
  box-shadow: $card-box-shadow;
  border-radius: 10rpx;

  .image {
    width: 70rpx;
    height: 70rpx;
    flex-shrink: 0;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .title {
      &-text {
        font-size: 28rpx;
        font-weight: 700;
        line-height: 42rpx;
        color: black;
      }

      .time {
        display: flex;
        justify-content: space-between;

        &-text {
          font-size: 18rpx;
          color: #757373;
        }
      }
    }
    .text {
      font-size: 24.5rpx;
      font-weight: normal;
      line-height: 35rpx;
      color: #797979;
      letter-spacing: 1rpx;
    }
  }
}
</style>
