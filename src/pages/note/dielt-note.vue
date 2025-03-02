<template>
  <NavSearch v-mode="value" />
  <NoteContainer />
  <!-- 立即记录 -->
  <view class="bg-#fff px-28rpx py-30rpx w-750rpx pos-fixed pos-bottom-0">
    <button class="bg-#5DBE8A text-#fff">保存</button>
  </view>
</template>

<script setup lang="ts">
import NavSearch from './components/NavSearch.vue'
import NoteContainer from './components/NoteContainer.vue'
import { ref } from 'vue'

const value = ref()
</script>

<style scoped>
.cate-tab {
  height: calc(100vh - 600rpx);
  /* #ifdef H5 */
  height: calc(100vh - 450rpx - var(--window-top));
  /* #endif */
}
</style>
