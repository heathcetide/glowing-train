<template>
  <view class="container">
    <view class="slider-container">
      <text>当前值: {{ sliderValue }}</text>
      <slider :value="sliderValue" min="0" max="100" step="1" @change="onSliderChange" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 50, // 初始值
    }
  },
  methods: {
    // 监听滑动条值变化
    onSliderChange(event) {
      this.sliderValue = event.detail.value
    },
  },
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
}
</style>
