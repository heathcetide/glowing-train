<template>
  <view class="item py-22rpx shadow1 px-24rpx flex justify-between items-center bg-white">
    <image :src="icon" class="size-112rpx" mode="scaleToFill" />
    <view class="desc flex flex-col flex-1 pl-15rpx">
      <text class="title">{{ title }}</text>
      <text class="" v-if="num">{{ num }}g</text>
    </view>
    <view>
      <up-checkbox-group>
        <up-checkbox
          active-color="#5DBE8A"
          :icon-size="5"
          icon-color="#5DBE8A"
          :checked="isChecked"
          @click="handleChecked"
        >
          <template #icon>
            <uni-icons v-show="isChecked" type="checkmarkempty" color="#f00" size="10" />
          </template>
        </up-checkbox>
      </up-checkbox-group>
    </view>
  </view>
</template>

<script setup lang="ts">
import IconMet from '@/static/image/cook/met.svg'

import { ref, onMounted, computed } from 'vue'

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

const isChecked = ref(false)
const handleChecked = () => {
  isChecked.value = true
}
interface Props {
  index: string
  icon: string
  title: string
  num?: number
}
const props = defineProps<Props>()
// 根据传递的 index 获取 foodList 中的对应项
// const item = computed(() => {
//   return foodList.value[Number(props.index)] || {} // 根据 index 从 foodList 中获取对应的项
// })
</script>

<style scoped></style>
