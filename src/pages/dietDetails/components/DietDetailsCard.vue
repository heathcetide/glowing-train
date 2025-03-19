<template>
  <view class="containt">
    <view class="card">
      <!-- 食材名 -->
      <view class="dietname card-item">
        <view class="title">{{ title }}</view>
        <view class="info">
          <view class="time item"> <uni-icons type="tune" size="24.5rpx" />{{ time }}</view>
          <view class="level item">中等难度</view>
          <view class="comment item"><uni-icons type="star-filled" size="24.5rpx" color="#FACC15" />4.8 (2.3k)</view>
        </view>
      </view>
      <!-- 营养价值 -->
      <view class="nutritionValue card-item">
        <view class="title">营养价值</view>
        <uni-row class="card_list" :gutter="20">
          <uni-col :span="12" v-for="(item, index) in nutritionValues" :key="index">
            <view class="card_list_item">
              <view class="nutrition_value">{{ item.name }}</view>
              <view class="value">{{ item.value }}</view>
            </view>
          </uni-col>
        </uni-row>
      </view>

      <!-- 介绍 -->
      <view class="nutritionValue card-item my-40rpx">
        <view class="title">食谱介绍</view>
        <view class="text-0 fb line-height-50rpx text"> {{ info }} </view>
      </view>

      <!-- 所需食材 -->
      <view class="need-food-list card-item">
        <view class="top-title w-100% juslr">
          <view class="title">所需食材</view>
          <view>
            <button class="btn">加入购物清单</button>
          </view>
        </view>
        <scroll-view scroll-y class="max-h-500rpx" :show-scrollbar="true">
          <uni-list class="list">
            <uni-list-item v-for="item in needFoodS" :key="item.name" :title="item.name" :rightText="item.value" />
          </uni-list>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Item {
  name: string
  value: string
}
interface Props {
  title: string
  time: string
  level: string
  intro: string
  nutritionValues: Item[]
  needFoodS: Item[]
}
const props = withDefaults(defineProps<Props>(), {
  level: '中等难度',
  nutritionValues: () => [
    {
      name: '能量',
      value: 800 + Math.floor(Math.random() * 300) + 'kcal',
    },
    {
      name: '蛋白质',
      value: 900 + Math.floor(Math.random() * 300) + 'kcal',
    },
    {
      name: '脂肪',
      value: 700 + Math.floor(Math.random() * 300) + 'kcal',
    },
    {
      name: '碳水化合物',
      value: 900 + Math.floor(Math.random() * 300) + 'kcal',
    },
  ],
  needFoodS: () => [
    {
      name: '鸡胸肉',
      value: '200克',
    },
    {
      name: '西兰花',
      value: '100克',
    },
    {
      name: '胡萝卜',
      value: '1根',
    },
    {
      name: '橄榄油',
      value: '15ml',
    },
  ],
  time: '30分钟',
  title: '香煎鸡胸配时蔬',
})

const info = computed(() => {
  return props.intro.split('“')[1].split('”')[0]
})
</script>
<style lang="scss" scoped>
@import '@/styles/color.scss';

.text {
  text-indent: 2rem;
}
.containt {
  padding: 0 28rpx;
}
.card {
  position: relative;
  top: -42rpx;
  background-color: white;
  width: 100%;
  border-radius: 28rpx;
  padding: 28rpx;
  box-shadow: $card-box-shadow;
  &-item {
    margin: 10rpx 0;
  }
  .dietname {
    .info {
      font-size: 24.5rpx;
      color: #4b5563;
      display: flex;
      gap: 26rpx;

      .item {
        display: flex;
      }
    }
  }
}

// 营养价值卡片样式
.card_list {
  &_item {
    display: flex;
    background-color: #f9fafb;
    flex-direction: column;
    padding: 21rpx;
    border-radius: 14rpx;
    margin-bottom: 20rpx;

    .nutrition_value {
      font-family: Roboto;
      font-size: 24.5rpx;
      font-weight: normal;
      line-height: 35rpx;
      letter-spacing: 0px;
      font-feature-settings: 'kern' on;
      color: #4b5563;
    }
    .value {
      font-family: Roboto;
      font-size: 31.5rpx;
      font-weight: 600;
      line-height: 49rpx;
      letter-spacing: 0px;
      font-feature-settings: 'kern' on;
      color: #000000;
    }
  }
}

.top-title {
  display: flex;
  justify-content: space-between;
  line-height: 49rpx;
  margin-bottom: 21rpx;
  .btn {
    display: flex;
    padding: 7rpx 21rpx;
    background-color: #ecfdf5;
    color: #059669;
    font-size: 24.5rpx;
    font-weight: normal;
    line-height: 35rpx;
    align-items: center;
    font-feature-settings: 'kern' on;
  }
}

.title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 35rpx;
  font-weight: bold;
  line-height: 50rpx;
  letter-spacing: 0px;
  margin-bottom: 10rpx;
}
</style>
