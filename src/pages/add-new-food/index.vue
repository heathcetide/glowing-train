<template>
  <view class="bg-white p-4">
    <!-- 食材图片 -->
    <view class="mb-6">
      <label class="text-xs text-gray-600">食材图片</label>
      <view class="border-2 border-dashed border-gray-300 p-8 rounded-lg mt-1 center">
        <view class="w-100%">
          <uni-file-picker
            v-model="form.imageUrl"
            fileMediatype="image"
            class="cursor-pointer"
            mode="grid"
            :auto-upload="false"
            :limit="1"
            @select="onSelect"
            @progress="onProgress"
            @success="onSuccess"
            @fail="onFail"
          />
          <span class="text-sm text-gray-500">点击上传图片</span>
        </view>
      </view>
    </view>

    <!-- 食材名称 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">食材名称 <text class="text-red-500">*</text></label>
      <input
        v-model="form.name"
        type="text"
        placeholder="请输入食材名称（如：蓝莓、牛油果）"
        class="w-full border border-gray-300 p-2 rounded-md mt-1"
      />
    </view>

    <!-- 食材分类 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">食材分类 <text class="text-red-500">*</text></label>
      <select v-model="form.category" class="w-full border border-gray-300 p-2 rounded-md mt-1 appearance-none">
        <option value="" disabled>请选择分类</option>
        <option v-for="option in categories" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </view>

    <!-- 计量单位 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">计量单位 <text class="text-red-500">*</text></label>
      <select v-model="form.unit" class="w-full border border-gray-300 p-2 rounded-md mt-1 appearance-none">
        <option value="" disabled>请选择单位</option>
        <option v-for="option in units" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </view>

    <!-- 数量 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">数量 <text class="text-red-500">*</text></label>
      <view class="flex border border-gray-300 rounded-md mt-1 border center">
        <button class="text-lg px-3 py-1 border-r border-gray-300" @click="decrement">-</button>
        <input v-model="form.quantity" type="number" class="w-full text-center p-2rpx" />
        <button class="text-lg px-3 py-1 border-l border-gray-300" @click="increment">+</button>
      </view>
    </view>

    <!-- 存储方式 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">存储方式 <text class="text-red-500">*</text></label>
      <view class="flex space-x-2 mt-1">
        <button
          v-for="option in storageOptions"
          :key="option.value"
          :class="[
            'flex-1 px-4 py-2 rounded-md',
            form.storageMethod === option.value ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700',
          ]"
          @click="form.storageMethod = option.value"
        >
          {{ option.label }}
        </button>
      </view>
    </view>

    <!-- 保质期 -->
    <view class="mb-4">
      <label class="text-xs text-gray-600">保质期</label>
      <view class="flex items-center border border-gray-300 rounded-md mt-1">
        <uni-datetime-picker v-model="form.expiryDate" @change="handleSaveDate" type="datetimerange" />
        <!-- <img src="/static/icons/calendar.png" class="w-4 h-4 mx-2" /> -->
      </view>
    </view>

    <!-- 备注信息 -->
    <view class="mb-6">
      <label class="text-xs text-gray-600">备注信息</label>
      <textarea
        v-model="form.remark"
        placeholder="添加备注信息（选填，最多50字）"
        :maxlength="100"
        :show-confirm-bar="true"
        :style="{
          padding: ' 10px',
        }"
        class="w-90% border border-gray-300 b-solid p-2rpx rounded-md mt-1"
      ></textarea>
    </view>

    <!-- 操作按钮 -->
    <view class="flex space-x-2">
      <button class="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md" @click="resetForm">取消</button>
      <button class="flex-1 bg-green-500 text-white px-4 py-2 rounded-md" @click="submitForm">保存</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'
import { ref } from 'vue'

// 表单数据
const form = ref({
  name: '',
  category: '',
  unit: '',
  quantity: 1,
  storageMethod: '',
  imageUrl: '',
  expiryDate: '',
  remark: '',
})

// 食材分类选项
const categories = ref([
  { value: 'fruit', label: '水果' },
  { value: 'veggie', label: '蔬菜' },
  { value: 'meat', label: '肉类' },
  { value: 'seafood', label: '海鲜' },
  { value: 'condiment', label: '调味料' },
])

// 计量单位选项
const units = ref([
  { value: 'kg', label: '千克' },
  { value: 'g', label: '克' },
  { value: 'piece', label: '个' },
])

// 存储方式选项
const storageOptions = ref([
  { value: 'cold', label: '冷藏' },
  { value: 'frozen', label: '冷冻' },
  { value: 'room', label: '常温' },
])

// 上传图片
const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.imageUrl = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const handleSaveDate = (e: UniHelper.UniDatetimePickerValue) => {
  // form.value.expiryDate = e
  console.log(e)
}
// 数量减少
const decrement = () => {
  if (form.value.quantity > 1) form.value.quantity--
}

// 数量增加
const increment = () => {
  form.value.quantity++
}

// 提交表单
const submitForm = () => {
  console.log('表单提交数据:', form.value)
  alert('表单提交成功')
  // Utils.navigateTo()
}

// 重置表单
const resetForm = () => {
  form.value = {
    name: '',
    category: '',
    unit: '',
    quantity: 1,
    storageMethod: '',
    imageUrl: '',
    expiryDate: '',
    remark: '',
  }
}

const imageValue = ref('')
const onSelect = (e: UniHelper.UniFilePickerOnSelectEvent) => {
  console.log('Selected files:', e)
}

const onProgress = (e: UniHelper.UniFilePickerOnProgressEvent) => {
  console.log('Upload progress:', e)
}
const onSuccess = (e: UniHelper.UniFilePickerOnSuccessEvent) => {
  console.log('Upload success:', e)
}
const onFail = (e: UniHelper.UniFilePickerOnFailEvent) => {}
</script>

<style scoped></style>
