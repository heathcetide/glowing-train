<template>
  <view class="container">
    <uni-nav-bar class="navbar" :border="false" shadow statusBar>
      <template #default>
        <view class="title">
          <text>创建个人账号</text>
        </view>
      </template>
    </uni-nav-bar>

    <view class="wrap">
      <view class="image">
        <image :src="IconResgistSuccess" mode="scaleToFill" />
      </view>
      <view class="title">
        <text>恭喜您完成注册</text>
        <text class="info"> 您的账户已成功创建，现在可以开始使用食光烙记，为您推荐健康饮食和管理食材！ </text>
      </view>

      <view class="card">
        <view class="title">
          <text>账号信息</text>
        </view>
        <uni-list :border="false">
          <uni-list-item>
            <template v-slot:header> <text class="item-title">用户名: </text></template>
            <template v-slot:footer>
              <text class="content"> {{ memberStore.profile?.nickname }}</text>
            </template>
          </uni-list-item>
          <uni-list-item>
            <template v-slot:header><text class="item-title">邮箱: </text></template>
            <template v-slot:footer>
              <text class="content"> {{ memberStore.profile?.email }} </text>
            </template>
          </uni-list-item>
        </uni-list>
      </view>

      <uni-row :gutter="16" class="card-list">
        <uni-col :span="8" v-for="(item, index) in list" :key="index">
          <view class="item">
            <image :src="item.icon" mode="scaleToFill" class="image" />
            <text class="title">{{ item.title }}</text>
            <text class="desc">{{ item.desc }}</text>
          </view>
        </uni-col>
      </uni-row>

      <view class="invite">
        <text>邀请好友一起体验健康饮食管理</text>
        <view class="channel">
          <uni-icons type="weixin" color="green" size="24" />
          <uni-icons type="weibo" color="red" size="24" />
          <uni-icons type="qq" color="blue" size="24" />
        </view>
      </view>

      <view class="footer w-100% gap20rpx flex-col-nocenter">
        <!-- <button class="btn" @click="onSuccess">完成<uni-icons type="arrow-right" color="#fff" size="21" /></button> -->
        <button class="btn" @click="onMakePlan">制定计划<uni-icons type="arrow-right" color="#fff" size="21" /></button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconResgistSuccess from '@/static/image/regist/icon-resgist-success.png'
import IconResgistFoodAdmin from '@/static/image/regist/icon-regist-food-admin.png'
import IconResgistRecommend from '@/static/image/regist/icon-regist-recommend.png'
import IconResgistNutritionAnalyze from '@/static/image/regist/icon-resgist-nutrition-analyze.png'

import { useMemberStore } from '@/stores'
const memberStore = useMemberStore()

const list: Array<{ icon: string; title: string; desc: string }> = [
  { icon: IconResgistFoodAdmin, desc: '个性化饮食方案', title: '智能推荐' },
  { icon: IconResgistRecommend, desc: '高效管理食材库', title: '食材管理' },
  { icon: IconResgistNutritionAnalyze, desc: '科学营养数据', title: '营养分析' },
]

const onSuccess = () => {
  uni.switchTab({
    url: '/pages/index/index',
  })
}
const onMakePlan = () => {
  uni.navigateTo({
    url: '/pagesPlanLeader/index/index',
  })
}
</script>

<style scoped lang="scss">
.navbar {
  font-size: 40rpx;
  .title {
    width: 500rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42rpx 28rpx;
  .image {
    width: 140rpx;
    height: 140rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  & > .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10rpx;
    font-weight: 500;
    font-size: 32rpx;
    margin: 28rpx 0 14rpx;
    line-height: 49rpx;
    .info {
      font-size: 25rpx;
      color: #4b5563;
      line-height: 42rpx;
      text-align: center;
    }
  }
  .card {
    width: 100%;
    background: #ffffff rgba(0, 0, 0, 0.001);
    box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0, 0, 0, 0.05);
    border-radius: 14rpx;
    margin: 22rpx 0 28rpx;
    padding: 28rpx;
    & > .title {
      width: 100%;
      display: flex;
      justify-content: start;
      font-size: 28rpx;
      color: #000000;
      line-height: 42rpx;
      padding: 0 28rpx;
    }
    .item-title {
      font-weight: 400;
      font-size: 25rpx;
      color: #4b5563;
      line-height: 35rpx;
    }
    .content {
      font-weight: 400;
      font-size: 28rpx;
      color: #111827;
      line-height: 42rpx;
    }
  }

  .card-list {
    margin-bottom: 58rpx;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
      padding: 28rpx 32rpx 56rpx;
      .image {
        width: 84rpx;
        height: 84rpx;
      }
      .title {
        font-weight: 500;
        font-size: 25rpx;
        line-height: 35rpx;
        margin: 14rpx 0 6rpx;
      }
      .desc {
        font-weight: 400;
        width: 200rpx;
        font-size: 21rpx;
        color: #6b7280;
        line-height: 28rpx;
      }
    }
  }

  .channel {
    display: flex;
    justify-content: center;
    gap: 42rpx;
    height: 168rpx;
    margin-top: 28rpx;
  }

  .invite {
    font-weight: 400;
    font-size: 25rpx;
    color: #4b5563;
  }
  .footer {
    margin-top: 50rpx;
    width: 100%;
    // height: 105rpx;
    .btn {
      width: 100%;
      line-height: 105rpx;
      color: white;
      background-color: #5dbe8a;
    }
  }
}
</style>
