<template>
  <view class="container">
    <CustomNavBar title="饮食偏好与过敏信息" :step="3" :activeIndex="2" />

    <view class="content">
      <CustomCard title="饮食偏好">
        <template #default>
          <uni-row :gutter="20">
            <uni-col :span="12" v-for="item in foodListFaver" :key="item.text">
              <view class="item-favor">
                <image class="img" :src="item.icon"></image>
                <text class="text">{{ item.text }}</text>
              </view>
            </uni-col>
          </uni-row>
        </template>
      </CustomCard>
      <view class="orign">
        <CustomCard title="过敏原信息" subTitle="如果您对某些食物过敏，请选择相应选项">
          <template #default>
            <uni-row :gutter="20">
              <uni-col :span="8" v-for="item in foodListSensitive" :key="item.text">
                <view class="item-favor">
                  <image class="img" :src="item.icon"></image>
                  <text class="text senstive">{{ item.text }}</text>
                </view>
              </uni-col>
            </uni-row>
          </template>
        </CustomCard>
      </view>
    </view>

    <CustomButton url="/pages/resign/regist_success" />
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from './components/CustomNavBar.vue'
import CustomCard from './components/CustomCard.vue'
import CustomButton from './components/CustomButton.vue'
import IconVegetable from '@/static/image/regist/icon-vegetable.svg'
import IconLowtansui from '@/static/image/regist/icon-lowtansui.svg'
import IconGaodanbai from '@/static/image/regist/icon-gaodanbai.svg'
import IconNospecial from '@/static/image/regist/icon-nospecial.svg'
import IconSensitiveOrigin1 from '@/static/image/regist/icon-sensitive-origin1.svg'
import IconSensitiveOrigin2 from '@/static/image/regist/icon-sensitive-origin2.svg'
import IconSensitiveOrigin3 from '@/static/image/regist/icon-sensitive-origin3.svg'
import IconSensitiveOrigin4 from '@/static/image/regist/icon-sensitive-origin4.svg'
import IconSensitiveOrigin5 from '@/static/image/regist/icon-sensitive-origin5.svg'
import IconSensitiveOrigin6 from '@/static/image/regist/icon-sensitive-origin6.svg'

const foodListFaver = [
  {
    icon: IconVegetable,
    text: '素食',
  },
  {
    icon: IconLowtansui,
    text: '低碳水',
  },
  {
    icon: IconGaodanbai,
    text: '高蛋白',
  },
  {
    icon: IconNospecial,
    text: '无特殊偏好',
  },
]

const foodListSensitive = [
  {
    icon: IconSensitiveOrigin1,
    text: '花生',
  },
  {
    icon: IconSensitiveOrigin2,
    text: '牛奶',
  },
  {
    icon: IconSensitiveOrigin3,
    text: '鸡蛋',
  },
  {
    icon: IconSensitiveOrigin4,
    text: '海鲜',
  },

  {
    icon: IconSensitiveOrigin5,
    text: '大豆',
  },
  {
    icon: IconSensitiveOrigin6,
    text: '坚果',
  },
]
</script>

<style scoped lang="scss">
.content {
  padding: 48rpx 28rpx 0 28rpx;

  .item-favor {
    display: flex;
    flex-direction: column;
    gap: 18rpx;
    background-color: white;
    border: 2rpx solid #e5e7eb;
    border-radius: 14rpx;
    padding: 30rpx 0;
    margin-bottom: 20rpx;
    align-items: center;
    .img {
      width: 112rpx;
      height: 112rpx;
    }
    .text {
      font-weight: 400;
      font-size: 25rpx;
      color: #000000;
      line-height: 35rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      &.senstive {
        font-size: 21rpx !important;
      }
    }
  }
  .orign {
    margin: 38rpx 0;
  }
}
</style>
