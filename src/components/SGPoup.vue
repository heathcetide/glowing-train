<template>
  <up-popup ref="popup" :show="show" :round="30" :z-index="999" mode="bottom" @close="close" @open="open">
    <slot></slot>
  </up-popup>
</template>

<script setup lang="ts">
const show = defineModel<boolean>('show')
defineExpose({
  close,
  open,
})

// 定义方法
function open() {
  // 打开逻辑，比如设置 show 为 true
  show.value = true
  // console.log('open');
}

function close() {
  // 关闭逻辑，设置 show 为 false
  show.value = false
  // console.log('close');
}
</script>

<style scoped></style>
