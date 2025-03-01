<template>
  <view class="card">
    <view class="card-image">
      <up-lazy-load threshold="-450" border-radius="10" :image="image" :index="index"></up-lazy-load>
    </view>
    <view class="content">
      <view class="title line-clamp-3 ellipsis line-clamp-3">{{ title }}</view>
      <view class="info">
        <view class="userinfo">
          <image :src="avatar" class="avatar" />
          <text>{{ nickName }}</text>
        </view>
        <view class="heart">
          <uni-icons v-if="isComment" custom-prefix="iconfont" type="icon-aixin" size="10" color="#f00"></uni-icons>
          <uni-icons v-else custom-prefix="iconfont" type="icon-aixin1" size="10"></uni-icons>
          <text class="user">{{ number }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { RecommendCardProps } from '@/types/community'
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<RecommendCardProps>(), {
  id: 1,
  image: '/static/image/community/recomment1.png',
  title: '绿色食物推荐',
  avatar: '/static/image/community/user_tx.png',
  nickName: '绿色食物分享家',
  number: '100',
  isComment: false,
  index: 0,
})
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 360rpx;
  margin-bottom: 10rpx;
  border-radius: 36rpx;
  background-color: white;
  box-shadow: $box-shadow-sm;
  .card-image {
    flex-grow: 1;
    // background-color: yellow;
    width: 360rpx;
    border-radius: 36rpx 36rpx 0 0;
    .image {
      width: 100%;
      height: 480rpx;
      border-radius: 36rpx 36rpx 0 0;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 5rpx 20rpx;
    .title {
      display: flex;
      justify-content: start;
      font-size: 30rpx;
      font-weight: 500;
      line-height: 100%;
      color: $font-color-gray-dark;
      letter-spacing: 0.04em;
    }
    .info {
      display: flex;
      justify-content: space-between;
      .userinfo {
        display: flex;
        gap: 10rpx;
        font-family: Source Han Sans;
        font-size: 16rpx;
        font-weight: 300;
        line-height: 52rpx;
        align-items: center;
        letter-spacing: 0.6rpx;

        .avatar {
          width: 30rpx;
          height: 30rpx;
          border-radius: 50%;
        }
      }

      .heart {
        font-family: Source Han Sans;
        font-size: 20rpx;
        font-weight: 350;
        line-height: 52rpx;
        display: flex;
        gap: 10rpx;
        align-items: center;
        letter-spacing: 0px;
      }
    }
  }
}
</style>
