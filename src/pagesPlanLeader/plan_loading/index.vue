<template>
  <view v-if="isloading" class="col h-100vh">
    <up-loading-icon
      :size="30"
      color="#5DBE8A"
      text="计划生成中..."
      text-size="40rpx"
      text-color="#5DBE8A"
    ></up-loading-icon>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'
import { ref } from 'vue'

const isloading = ref(true)

setTimeout(() => {
  isloading.value = false
  Utils.navigateTo('/pagesPlanLeader/leader_five/index')
}, 2000)
</script>

<style scoped></style>
