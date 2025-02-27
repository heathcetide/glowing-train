<template>
  <view>
    <iframe
      src="https://try2.fit2cloud.cn/ui/chat/1555b0e647572a4d"
      style="width: 100%; height: 80vh"
      frameborder="0"
      allow="microphone"
    >
    </iframe>
  </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    // 动态加载外部脚本
    const script = document.createElement('script')
    script.src =
      'https://try2.fit2cloud.cn/api/application/embed?protocol=https&host=try2.fit2cloud.cn&token=1555b0e647572a4d'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  } catch (error) {
    console.error('请求错误:', error)
  }
})
</script>

<style scoped></style>
