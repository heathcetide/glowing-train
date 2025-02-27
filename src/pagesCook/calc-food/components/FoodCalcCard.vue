<template>
  <view class="card shadow1 rounded-14rpx flex w-100% p-28rpx gap-28rpx bg-#fff">
    <uni-badge
      size="small"
      :text="index"
      :custom-style="{
        backgrounColor: '##5DBE8A',
        color: '#fff',
        borderRadius: '50%',
      }"
      absolute="leftTop"
      type="success"
    >
      <up-image :src="item.foodUrl" width="168rpx" radius="14rpx" height="168rpx" mode="scaleToFill" />
    </uni-badge>
    <view class="px-22rpx items-center w-100%">
      <view class="flex flex-col w-100%">
        <view class="justify-between flex w-100%">
          <text>{{ item.name }}</text>
          <uni-icons type="trash-filled" color="" size="20" />
        </view>
        <text class="text-#333333 text-21rpx ellipsis mt-8rpx mb-20rpx">热量 {{ item.kcal }}</text>
        <view class="ingredients">
          <view v-for="(ingredient, index) in item.ingredients" :key="index" class="ingredient-tag">
            {{ ingredient }}
          </view>
        </view>
      </view>
      <view class="mt-22rpx">
        <CalcNumber v-model="value" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import CalcNumber from './CalcNumber.vue'
import type { CookModule } from '@/types/component'

import { ref, onMounted, computed } from 'vue'

// 创建响应式数据
const value = ref(1)
interface Props {
  index: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'click', item: CookModule.FoodCardItem): void
}

// 定义一个 foodList 存储食物列表
const foodList = ref<any[]>([])

onMounted(() => {
  // 从本地存储获取推荐食物
  uni.getStorage({
    key: 'recommendedFoods',
    success: (res) => {
      if (res.data && Array.isArray(res.data)) {
        // 如果从存储中获取到推荐食物数据，赋值给 foodList
        foodList.value = res.data
      } else {
        console.log('没有找到推荐食物数据')
      }
    },
    fail: () => {
      console.log('无法获取推荐食物数据')
    },
  })
})

const emit = defineEmits<Emits>()

// 根据传递的 index 获取 foodList 中的对应项
const item = computed(() => {
  return foodList.value[props.index] || {} // 根据 index 从 foodList 中获取对应的项
})
</script>

<style scoped></style>
