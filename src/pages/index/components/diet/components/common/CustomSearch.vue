<template>
  <view class="search flex justify-between px-28rpx rounded-full bg-#F3F4F6 items-center h-91rpx">
    <uni-icons color="#9CA3AF" type="search" size="24" />
    <input type="text" placeholder="请输入搜索内容" v-model="search" @confirm="searchConfirm" />
    <uni-icons type="camera-filled" color="#7E7E7F" size="24" />
  </view>
</template>

<script setup lang="ts">
const search = defineModel('search', { type: String })

const emit = defineEmits(['confirm'])

const searchConfirm = () => {
  // console.log('searchConfirm', search.value)

  emit('confirm', search.value)
  search.value = ''
}
</script>

<style scoped></style>
