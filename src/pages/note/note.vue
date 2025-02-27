<template>
  <view class="wrap">
    <SGNavBar titlle="笔记">
      <template #title>
        <uni-search-bar v-model="keyword" @confirm="handleSearch" :style="{ width: '100%' }" />
      </template>
    </SGNavBar>

    <view class="container">
      <SGTabs :tabs="['笔记', '收藏', '笔记']">
        <template #tab-1> 开始的非建档立卡司法局手打立卡 </template>
      </SGTabs>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const keyword = ref('')
const handleSearch = () => {
  console.log(keyword.value)
}
</script>
<style lang="scss" scoped>
.wrap {
  padding: 1rpx;
  .container {
    margin-top: 260rpx;
    background-color: antiquewhite;
  }
}
</style>
