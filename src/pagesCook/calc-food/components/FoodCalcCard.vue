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
      <up-image :src="item.image" width="168rpx" radius="14rpx" height="168rpx" mode="scaleToFill" />
    </uni-badge>
    <view class="px-22rpx items-center w-100%">
      <view class="flex flex-col w-100%">
        <view class="justify-between flex w-100%">
          <text>{{ item.title }}</text>
          <uni-icons type="trash-filled" color="" @click="handleDelete" size="20" />
        </view>
        <text class="text-#333333 text-21rpx ellipsis mt-8rpx mb-20rpx">预估时间: {{ item.duration }}</text>
        <view class="ingredients">
          <view class="ingredient-tag">
            {{ item.level }}
          </view>
        </view>
      </view>
      <view class="mt-22rpx">
        <up-number-box v-model="item.num!">
          <template #minus>
            <view class="minus">
              <uni-icons type="minus" color="" size="24" />
            </view>
          </template>
          <template #input>
            <text style="width: 50px; text-align: center" class="input">{{ item.num }}</text>
          </template>
          <template #plus>
            <view class="plus">
              <uni-icons type="plus" size="24" />
            </view>
          </template>
        </up-number-box>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { CookModule } from '@/types/component'
import useCookStore from '@/stores/modules/cook'

import { onMounted, ref } from 'vue'
import Utils from '@/utils'

const useCook = useCookStore()

// 创建响应式数据
const value = ref(1)
interface Props {
  index: string
  item: CookModule.FoodCardItem
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

const handleDelete = () => {
  Utils.showModal({
    title: '确定要删除这个菜品吗?',
    content: '',
    cancel: () => {},
    confirm: () => {
      useCook.deleteDiet(props.item.id)
      Utils.showToast('删除成功')
    },
  })
}
</script>

<style scoped></style>
