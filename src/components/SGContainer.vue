<template>
  <view class="container" :style="{ paddingTop: safeAreaInsets?.top + 10 + 'px' }">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
const { safeAreaInsets } = uni.getWindowInfo()
</script>
<style lang="scss" scoped>
.container {
  background-color: white;
}
</style>
