<template>
  <view class="upload">
    <uni-file-picker
      v-model="fileData"
      :file-mediatype="props.type"
      mode="grid"
      :limit="1"
      @select="handleSelect"
      @success="handleSuccess"
      @fail="handleFail"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

interface Props {
  type: 'image' | 'video'
}

// 设置默认属性，默认为 image
const props = withDefaults(defineProps<Props>(), {
  type: 'image',
})

// 定义自定义事件，将返回结果传递给父组件
const emit = defineEmits(['msg'])

// 存储文件选择数据
const fileData = ref<UniHelper.UniFilePickerOnSelectEvent>({} as UniHelper.UniFilePickerOnSelectEvent)

/**
 * 选择文件后，手动构造 multipart/form-data 请求体，并使用 axios 发起请求
 */
const handleSelect = async (e: UniHelper.UniFilePickerOnSelectEvent) => {
  const fileItem = e.tempFiles[0]
  // fileItem.file 为标准 File 对象
  const file: File = fileItem.file
  console.log('选中的文件对象：', file)

  // 自定义边界字符串，确保不会与文件内容冲突
  const boundary = '----WebKitFormBoundary' + Date.now().toString(16)
  const CRLF = '\r\n'
  const encoder = new TextEncoder()

  // 附加的文本字段
  const extraFields = {
    name: fileItem.name,
    size: fileItem.size.toString(),
    type: fileItem.fileType,
  }

  // 构造每个文本字段的 multipart 部分
  const fieldParts: Uint8Array[] = []
  for (const [key, value] of Object.entries(extraFields)) {
    const partStr =
      `--${boundary}${CRLF}` + `Content-Disposition: form-data; name="${key}"${CRLF}${CRLF}` + `${value}${CRLF}`
    fieldParts.push(encoder.encode(partStr))
  }

  // 构造文件字段的头部
  const fileHeader =
    `--${boundary}${CRLF}` +
    `Content-Disposition: form-data; name="file"; filename="${file.name}"${CRLF}` +
    `Content-Type: ${file.type}${CRLF}${CRLF}`
  const fileHeaderBytes = encoder.encode(fileHeader)

  // 构造文件字段的尾部（结束标识）
  const footer = `${CRLF}--${boundary}--${CRLF}`
  const footerBytes = encoder.encode(footer)

  // 读取文件内容（ArrayBuffer 格式）
  const arrayBuffer = await file.arrayBuffer()
  const fileContentBytes = new Uint8Array(arrayBuffer)

  // 计算最终请求体的总长度
  let totalLength = 0
  fieldParts.forEach((part) => (totalLength += part.length))
  totalLength += fileHeaderBytes.length + fileContentBytes.length + footerBytes.length

  // 分配一个 Uint8Array 存放所有数据
  const combinedArray = new Uint8Array(totalLength)
  let offset = 0
  // 写入文本字段部分
  for (const part of fieldParts) {
    combinedArray.set(part, offset)
    offset += part.length
  }
  // 写入文件字段头部
  combinedArray.set(fileHeaderBytes, offset)
  offset += fileHeaderBytes.length
  // 写入文件内容
  combinedArray.set(fileContentBytes, offset)
  offset += fileContentBytes.length
  // 写入尾部
  combinedArray.set(footerBytes, offset)

  // 使用构造好的二进制数据创建 Blob 对象
  const bodyBlob = new Blob([combinedArray.buffer], { type: `multipart/form-data; boundary=${boundary}` })

  try {
    // 使用 axios 发送 POST 请求，手动设置 Content-Type 头
    const response = await axios({
      method: 'post',
      url: 'http://8.137.22.105:800/api/posts/image',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      data: bodyBlob,
    })
    console.log('上传结果：', response.data)
    emit('msg', response.data)
  } catch (err) {
    console.error('上传错误：', err)
  }
}

const handleSuccess = (e: UniHelper.UniFilePickerOnSuccessEvent) => {
  console.log('uni-file-picker 成功事件：', e)
}

const handleFail = (e: UniHelper.UniFilePickerOnFailEvent) => {
  console.error('uni-file-picker 失败事件：', e)
}
</script>

<style scoped>
.upload {
  /* 根据需要添加样式 */
}
</style>
