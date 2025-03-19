<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }" class="page-container">
    <CookNavBar title="烹饪进行中" />
    <up-line-progress percentage="70" activeColor="#5DBE8A" :height="5" :show-text="false" />

    <scroll-view scroll-y class="content-scroll">
      <view class="content-wrapper">
        <!-- 头部信息：图片和标题 -->
        <view class="header">
          <up-image :src="chosedDiet.image" mode="aspectFill" width="100%" height="300rpx" />
          <text class="diet-title">{{ chosedDiet.title }}</text>
        </view>
        <!-- 步骤列表 -->
        <view class="steps">
          <view class="step-item" v-for="item in stepList" :key="item.index">
            <view class="step-header">
              <view class="step-index">{{ item.index }}</view>
              <view class="step-content">{{ item.content }}</view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 固定底部按钮 -->
    <view class="footer h-130rpx">
      <button class="finish-btn" @click="onFinish">完成</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CookNavBar from '../common/CookNavBar.vue'
import Utils from '@/utils'
import useCookStore from '@/stores/modules/cook'

const cookStore = useCookStore()
const chosedDiet = ref(cookStore.chosedDietList[0])
const { safeAreaInsets } = uni.getWindowInfo()
// 假设 steps 存储的是一个 JSON 字符串
const stepList = JSON.parse(chosedDiet.value.steps)

const onFinish = () => {
  Utils.navigateTo('/pagesCook/cook-success/index')
}
</script>

<style scoped>
.page-container {
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
}

/* 内容区，底部预留空间 */
.content-scroll {
  padding: 20rpx;
  /* 为底部固定按钮预留空间 */
  margin-bottom: 90rpx;
  height: calc(100vh - 160rpx - 44px);
}

.content-wrapper {
  background-color: #fff;
  border-radius: 14rpx;
  padding: 20rpx;
}

/* 头部：图片和标题 */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rpx;
}

/* .diet-image {

  width: 80%;
  max-height: 300rpx;
  border-radius: 10rpx;
} */

.diet-title {
  margin-top: 20rpx;
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

/* 步骤列表 */
.steps {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.step-item {
  padding: 20rpx;
  border: 1rpx solid #eaeaea;
  border-radius: 10rpx;
  background-color: #fff;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15rpx;
}

.step-index {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rpx;
  height: 50rpx;
  background-color: #e8f5ee;
  color: #5dbe8a;
  border-radius: 50%;
  font-size: 28rpx;
  font-weight: bold;
}

.step-content {
  flex: 1;
  font-size: 30rpx;
  color: #555;
}

/* 底部固定按钮 */
.footer {
  position: fixed;
  bottom: 10rpx;
  left: 0;
  right: 0;
  padding: 10rpx 20rpx;
  background-color: #fff;
}

.finish-btn {
  width: 100%;
  background-color: #5dbe8a;
  color: #fff;
  font-size: 32rpx;
  padding: 15rpx;
  border-radius: 8rpx;
}
</style>
