<template>
  <view class="upload p-28rpx bg-white">
    <up-upload
      :fileList="fileList1"
      @afterRead="afterRead"
      @delete="deletePic"
      name="1"
      multiple
      :maxCount="9"
      show-upload-list
    >
      <template #default>
        <view class="size-203.31rpx center borderDashed rounded-2xl">
          <uni-icons type="upload" color="#F5F5f5" size="24" />
        </view>
      </template>
    </up-upload>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileList1 = ref<any[]>([]) // 删除图片
const deletePic = (event: any) => {
  fileList1.value.splice(event.index, 1)
}

// 新增图片
const afterRead = async (event: any) => {
  // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  let lists = [].concat(event)
  let fileListLen = fileList1.value.length
  lists.map((item: object) => {
    fileList1.value.push({
      ...item,
      status: 'uploading',
      message: '上传中',
    })
  })
  for (let i = 0; i < lists.length; i++) {
    const result = await uploadFilePromise(lists[i].url)
    let item = fileList1.value[fileListLen]
    fileList1.value.splice(fileListLen, 1, {
      ...item,
      status: 'success',
      message: '',
      url: result,
    })
    fileListLen++
  }
}

const uploadFilePromise = (url: any) => {}
</script>

<style scoped></style>
