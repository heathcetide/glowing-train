<template>
  <view class="container">
    <view class="slider-container">
      <text>当前值: {{ (sliderValue / 10).toFixed(1) }}cm</text>
      <slider
        :value="sliderValue"
        :min="1000"
        :max="2500"
        :blockSize="12"
        :step="1"
        @change="onSliderChange"
        @changing="onSliderChanging"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sliderValue = ref<number>(1750) // 初始值，对应175.0cm

function onSliderChange(event: { detail: { value: number } }) {
  sliderValue.value = event.detail.value
  saveValue(sliderValue.value)
}

function onSliderChanging(event: { detail: { value: number } }) {
  sliderValue.value = event.detail.value
}

function saveValue(value: number) {
  console.log(`保存的值: ${(value / 10).toFixed(1)}cm`)
  // 可以在此处添加保存逻辑，例如发送到服务器
}
</script>

<style>
.container {
  padding: 20px;
}

.slider-container {
  margin-top: 20px;
}

slider {
  width: 100%;
  cursor: pointer;
  height: 10px;
  border-radius: 5px;
  position: relative;
}

/* 刻度线样式 */
slider::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 60rpx;
  background: linear-gradient(
    to right,
    transparent 0%,
    transparent 4.5%,
    #5dbe8a 5%,
    transparent 5.5%,
    transparent 9.5%,
    #5dbe8a 10%,
    transparent 10.5%,
    transparent 14.5%,
    #5dbe8a 15%,
    transparent 15.5%,
    transparent 19.5%,
    #5dbe8a 20%,
    transparent 20.5%,
    transparent 24.5%,
    #5dbe8a 25%,
    transparent 25.5%,
    transparent 29.5%,
    #5dbe8a 30%,
    transparent 30.5%,
    transparent 34.5%,
    #5dbe8a 35%,
    transparent 35.5%,
    transparent 39.5%,
    #5dbe8a 40%,
    transparent 40.5%,
    transparent 44.5%,
    #5dbe8a 45%,
    transparent 45.5%,
    transparent 49.5%,
    #5dbe8a 50%,
    transparent 50.5%,
    transparent 54.5%,
    #5dbe8a 55%,
    transparent 55.5%,
    transparent 59.5%,
    #5dbe8a 60%,
    transparent 60.5%,
    transparent 64.5%,
    #5dbe8a 65%,
    transparent 65.5%,
    transparent 69.5%,
    #5dbe8a 70%,
    transparent 70.5%,
    transparent 74.5%,
    #5dbe8a 75%,
    transparent 75.5%,
    transparent 79.5%,
    #5dbe8a 80%,
    transparent 80.5%,
    transparent 84.5%,
    #5dbe8a 85%,
    transparent 85.5%,
    transparent 89.5%,
    #5dbe8a 90%,
    transparent 90.5%,
    transparent 94.5%,
    #5dbe8a 95%,
    transparent 95.5%,
    transparent 99.5%,
    #5dbe8a 100%
  );
}
slider::after {
  content: '';
  position: absolute;
  top: 100%;
  left: -5rpx;
  width: 100%;
  height: 40rpx;
  background: linear-gradient(
    to right,
    transparent 0%,
    transparent 2.5%,
    #cccc 3.33%,
    transparent 4.16%,
    transparent 12.5%,
    #cccc 3.33%,
    13.33%,
    transparent 14.16%,
    transparent 22.5%,
    #cccc 23.33%,
    transparent 24.16%,
    transparent 32.5%,
    #cccc 33.33%,
    transparent 34.16%,
    transparent 42.5%,
    #cccc 43.33%,
    transparent 44.16%,
    transparent 52.5%,
    #cccc 53.33%,
    transparent 54.16%,
    transparent 62.5%,
    #cccc 63.33%,
    transparent 64.16%,
    transparent 72.5%,
    #cccc 73.33%,
    transparent 74.16%,
    transparent 82.5%,
    #cccc 83.33%,
    transparent 84.16%,
    transparent 92.5%,
    #cccc 93.33%,
    transparent 94.16%,
    transparent 99%,
    #cccc 100%
  );
}

/* 滑块样式 */
slider::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  background-color: #5dbe8a;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
