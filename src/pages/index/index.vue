<template>
  <view class="wrap">
    <view class="container">
      <SGTabs :tabs fontWeight="bold">
        <template #tab-0><Recommend /> </template>
        <template #tab-1><Diet /> </template>
        <template #tab-2><Move /> </template>
        <template #tab-3><Plan /> </template>
        <template #tabs="{ tab }">
          <view class="tab">
            <text>{{ tab }}</text>
          </view>
        </template>
      </SGTabs>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Recommend from './components/recommend/index.vue'
import Move from './components/move/index.vue'
import Plan from './components/plan/index.vue'
import Diet from './components/diet/index.vue'
const tabs = ref(['推荐', '饮食', '运动', '计划'])
</script>
<style lang="scss" scoped>
.notice-bar {
  height: 80rpx;
}

.scroll-view {
  height: 500px;
}
.container {
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 15.7rpx;

  .head {
    width: 100%;
    padding: 0 0 26rpx;
  }
}
</style>
