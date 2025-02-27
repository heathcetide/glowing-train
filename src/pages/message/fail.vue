<template>
  <SGMsgNotice :msg="msg" flag="fail" />
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const msg = ref('')
onLoad((res) => {
  msg.value = res?.msg
})
</script>

<style scoped></style>
