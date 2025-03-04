<template>
  <view class="upload p-28rpx bg-white">
    <uni-file-picker
      v-model="imageList"
      :file-mediatype="type"
      mode="grid"
      :limit="9"
      @select="handleSelect"
      @success="handleSuccess"
      @fail="handleFail"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  // Define props here
  type: 'image' | 'video'
}
const imageList = ref<string[]>([])

withDefaults(defineProps<Props>(), {
  type: 'image',
})
const handleSelect = (e: UniHelper.UniFilePickerOnSelectEvent) => {
  console.log('Selected files:', e.tempFiles)
}

const handleSuccess = (e: UniHelper.UniFilePickerOnSuccessEvent) => {
  console.log('Upload success:', e)
  // 这里可以处理上传成功后的逻辑，比如更新图片列表
  imageList.value = e.tempFiles.map((file: UniHelper.UniFilePickerCallbackFile) => file.url)
}

const handleFail = (e: UniHelper.UniFilePickerOnFailEvent) => {
  console.log('Upload failed:', e)
  // 这里可以处理上传失败后的逻辑
}
</script>

<style scoped></style>
