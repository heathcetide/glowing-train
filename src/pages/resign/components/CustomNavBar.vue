<template>
  <uni-nav-bar shadow statusBar class="navbar" :border="false" rightWidth="180rpx" leftWidth="180rpx">
    <template #left>
      <view class="nav-icons">
        <view class="item-icon" :class="{ active: activeIndex === 0 }"></view>
        <view class="item-icon" :class="{ active: activeIndex === 1 }"></view>
        <view class="item-icon" :class="{ active: activeIndex === 2 }"></view>
      </view>
    </template>
    <template #default>
      <view class="title">
        <text>{{ title }}</text>
      </view>
    </template>
    <template #right>
      <view class="rightTitle">
        <text>第 {{ step }} 步 / 共 3 步</text>
      </view>
    </template>
  </uni-nav-bar>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CustomNavBar',
})
interface Props {
  title: string
  step: number
  activeIndex: number
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  step: 1,
  activeIndex: 0,
})
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

  .rightTitle {
    font-weight: 400;
    font-size: 20rpx;
    color: #6b7280;
    line-height: 35rpx;
  }
}

.nav-icons {
  display: flex;
  gap: 10rpx;
  .item-icon {
    width: 10rpx;
    height: 10rpx;
    border-radius: 50%;
    background-color: #d1d5db;
    transition: 0.5s;
    &.active {
      background-color: #5dbe8a;
    }
  }
}
</style>
