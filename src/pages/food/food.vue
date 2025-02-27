<template>
  <view class="container">
    <uni-nav-bar
      left-icon="arrow-left"
      right-text="设置"
      title="食材详细"
      height="150rpx"
      :statusBar="true"
      :border="false"
      right-icon="heart"
      fixed
      @clickLeft="onClickLeft"
      @clickRight="onClickRight"
    />

    <scroll-view scroll-y>
      <view class="picture">
        <image src="@/static/image/common/food.png" mode="scaleToFill" />
      </view>
      <!-- 营养参数详情 -->
      <view class="construction">
        <view class="construction_item" v-for="item in construction_list" :key="item.title">
          <view class="title">{{ item.title }}</view>
          <view class="value">{{ item.value }}</view>
          <view class="unit">{{ item.unit }}</view>
        </view>
      </view>
      <!-- 食材简介 -->
      <view class="introducation">
        <view class="introducation_title">食材简介</view>
        <view class="introducation_content"
          >鸡胸肉是一种优质的蛋白质来源，富含必需氨基酸，脂肪含量
          低，是健身减脂人士的首选。肉质细嫩，易于消化吸收，适合各 类人群食用。</view
        >
      </view>
      <!-- 健康建议 -->
      <view class="health_advice">
        <view class="health_advice_title">健康建议</view>
        <view class="health_advice_content">
          <view class="health_advice_suit_people">适宜人群</view>
          <view
            >鸡胸肉是一种优质的蛋白质来源，富含必需氨基酸，脂肪含量
            低，是健身减脂人士的首选。肉质细嫩，易于消化吸收，适合各 类人群食用。</view
          >
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface FoodDetallProps {
  title: string
  value: string
  unit: string
}

interface FoodDetailParams {
  image: string
  nutritionDetails: FoodDetallProps[]
  foodIntroduce: string
  healthyAdvice: string
}

const construction_list = ref<FoodDetallProps[]>([
  {
    title: '热量',
    value: '165',
    unit: 'kcal/100g',
  },
  {
    title: '蛋白质',
    value: '3.6',
    unit: 'g/100g',
  },
  {
    title: '脂肪',
    value: '10',
    unit: 'g/100g',
  },
  {
    title: '碳水',
    value: '20',
    unit: 'g/100g',
  },
])
const onClickLeft = () => {
  uni.navigateBack()
}

const onClickRight = () => {}
</script>
<style lang="scss" scoped>
$image_border: 5rpx dashed #c4c8c4;
$content_bg_color: #f0fdf4;
$content_color: #4b5563;
.image {
  width: 31rpx;
  height: 50rpx;
}
.picture {
  image {
    width: 100%;
    height: 600rpx;
    border: $image_border;
  }
}

.construction {
  display: flex;
  padding: 42rpx 28rpx;
  justify-content: space-around;
  background-color: $uni-text-color-inverse;
  .construction_item {
    text-align: center;
    color: $content_color;
    .title {
      font-size: 24.5rpx;
      font-weight: normal;
      line-height: 35rpx;
      letter-spacing: 0px;
      font-feature-settings: 'kern' on;
    }
    .value {
      font-size: 31.5rpx;
      font-weight: 700;
      line-height: 49rpx;
      color: $uni-text-color;
    }
    .unit {
      font-size: 21rpx;
      font-weight: normal;
      line-height: 28rpx;
    }
  }
}

.introducation {
  padding: 42rpx 28rpx;
  background-color: $uni-text-color-inverse;
  margin-top: 14rpx;
  &_title {
    font-size: 31.5rpx;
    font-weight: 700;
    line-height: 49rpx;
    letter-spacing: 0px;
    margin-bottom: 21rpx;
  }
  &_content {
    font-size: 24.5rpx;
    color: $content_color;
    line-height: 42rpx;
    letter-spacing: 0px;
  }
}

.health_advice {
  padding: 42rpx 28rpx;
  background-color: $uni-text-color-inverse;
  margin-top: 14rpx;
  &_title {
    font-size: 31.5rpx;
    font-weight: 700;
    line-height: 49rpx;
    letter-spacing: 0px;
    margin-bottom: 21rpx;
  }
  &_content {
    font-size: 24.5rpx;
    color: $content_color;
    line-height: 42rpx;
    letter-spacing: 0px;
    background-color: $content_bg_color;
    border-radius: 20rpx;
    padding: 28rpx;
  }
  &_suit_people {
    font-size: 24.5rpx;
    font-weight: 600;
    line-height: 35rpx;
    color: $uni-text-color;
    margin-bottom: 13rpx;
  }
}
</style>
<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
