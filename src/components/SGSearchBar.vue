<template>
  <view class="search-bar">
    <up-input
      v-model="keyword"
      class="input"
      placeholder="请输入搜索内容"
      clearable
      @confirm="handleSearch"
      @clear="handleClear"
      :style="{ padding: 0 }"
    >
      <template #prefix>
        <up-icon name="search" size="42px" @click="handleSearch" class="icon" :style="{ color: '#fff' }" />
      </template>
    </up-input>

    <view class="meauBar">
      <uni-icons type="settings" :size="42" color="#fff" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'search', keyword: string): void
  (e: 'clear'): void
}>()

const keyword = ref('')

const handleSearch = () => {
  emit('search', keyword.value)
}

const handleClear = () => {
  keyword.value = ''
  emit('clear')
}
</script>

<style lang="scss" scoped>
.search-bar {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17rpx;
  flex-grow: 1;
  .meauBar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 105rpx;
    width: 105rpx;
    border-radius: 35rpx;
    background-color: $uni-color-success;
    margin-left: 23rpx;

    .icon {
      color: #f5f5f5 !important;
    }
  }

  :deep(.u-input) {
    background-color: #f5f5f5;
    border-radius: 40rpx;
    padding: 0 20rpx;
    height: 105rpx;
    width: 556rpx;
  }
}
</style>
