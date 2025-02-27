<template>
  <uni-nav-bar
    :border="false"
    left-icon="arrow-left"
    left-text="返回"
    :title="title"
    right-text="智能助手"
    color="#5DBE8A"
    @clickRight="handleClickRight"
    @clickLeft="handleClickLeft"
  />
</template>

<script setup lang="ts">
import Utils from '@/utils'
defineProps({
  title: {
    type: String,
    default: '',
  },
})

const handleClickRight = () => {
  console.log('sssd')
}
const handleClickLeft = () => {
  Utils.navigateBack()
}
</script>

<style scoped></style>
