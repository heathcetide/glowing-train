<template>
  <view class="user-info-container">
    <AvatarArea />
    <BaseInfo />
    <FavorSettings />
  </view>
</template>

<script setup lang="ts">
import AvatarArea from './components/AvatarArea.vue'
import BaseInfo from './components/BaseInfo.vue'
import FavorSettings from './components/FavorSettings.vue'
</script>

<style scoped></style>
