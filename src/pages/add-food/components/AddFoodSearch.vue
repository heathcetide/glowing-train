<template>
  <uni-nav-bar left-text="添加食材" shadow left-width="200rpx" :border="false" left-icon="arrow-left">
    <template #right>
      <image :src="IconTime" class="size-28rpx" mode="scaleToFill" />
    </template>
  </uni-nav-bar>
</template>

<script setup lang="ts">
import IconTime from '@/static/image/common/icon-time2.svg'
</script>

<style scoped></style>
