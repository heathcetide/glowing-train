<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CookNavBar title="菜品选择" />
    <scroll-view scroll-y class="scroll-view">
      <view class="p-28rpx col gap-28rpx w-100%" ref="dragListRef">
        <view v-for="(item, index) in chosedDietList" :key="item.id" class="w-100%">
          <view
            ref="dragItem"
            :draggable="true"
            :class="{ dragging: dragStartIndex === index }"
            @touchstart="handleDragStart($event, index)"
            @touchmove="handleDragMove($event, index)"
            @touchend="handleDragEnd"
            :id="item.id"
            :style="{
              transform: dragStartIndex === index ? `translateY(${currentY - startY}px)` : '',
              transition: dragStartIndex === index ? 'none' : 'transform 0.3s ease',
              zIndex: dragStartIndex === index ? 999 : 1,
            }"
          >
            <FoodCalcCard :index="index + 1 + ''" :item="item" />
          </view>
        </view>
        <!-- <view class="h-60% w-100% bg-fuchsia">
          <SGDraggable>
            <template #content>
              <view> sssadds </view>
            </template>
          </SGDraggable>
        </view> -->
        <NutritionPanel />
      </view>
    </scroll-view>
    <view class="btns bg-white pos-fixed pos-bottom-0 w-100% p-28rpx flex gap-28rpx text-28rpx">
      <button class="bg-#F5F5F5 flex-1 text-#333333" @click="onBack">继续选择</button>
      <button class="bg-#5DBE8A flex-1 text-white" @click="onStart">确认并开始</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import Utils from '@/utils'
import FoodCalcCard from './components/FoodCalcCard.vue'
import NutritionPanel from './components/NutritionPanel.vue'
import CookNavBar from '../common/CookNavBar.vue'

import useCookStore from '@/stores/modules/cook'
import { storeToRefs } from 'pinia'

const dragListRef = ref()

const { chosedDietList } = storeToRefs(useCookStore())
const { safeAreaInsets } = uni.getWindowInfo()

const onBack = () => {
  Utils.navigateBack()
}

// 记录拖拽的起始位置和偏移量
let dragStartIndex = ref(-1)
let startY = ref(0)
let currentY = ref(0)
let dragHeight = ref(158) // 存储拖拽组件的高度

const dragItem = ref<HTMLElement[]>([]) // 明确类型为 HTMLElement 数组

const getHeight = (index: number) => {
  if (dragItem.value && dragItem.value[index]) {
    console.log('组件高度:', dragItem.value)

    const height = dragItem.value[index].clientHeight
    console.log('组件高度:', height)
    return height
  }
  return 0
}

const handleDragStart = (event: TouchEvent, index: number) => {
  if (!event.touches || event.touches.length === 0) return // 检查触摸点是否存在
  console.log('开始拖拽', index)
  dragStartIndex.value = index
  startY.value = event.touches[0].clientY
  currentY.value = startY.value
}

const handleDragMove = (event: TouchEvent, index: number) => {
  if (dragStartIndex.value === -1) return
  if (!event.touches || event.touches.length === 0) return // 检查触摸点是否存在

  event.preventDefault()
  currentY.value = event.touches[0].clientY

  const moveY = currentY.value - startY.value
  console.log('移动距离', moveY / dragHeight.value)

  // 计算目标位置
  const dropIndex = (Math.round(moveY / dragHeight.value) % chosedDietList.value.length) + dragStartIndex.value
  console.log('目标位置', dropIndex)

  if (dropIndex !== index && dropIndex >= 0 && dropIndex < chosedDietList.value.length) {
    handleDrop(dropIndex)
  }
}

const handleDrop = (dropIndex: number) => {
  if (dragStartIndex.value === dropIndex || dropIndex < 0 || dropIndex >= chosedDietList.value.length) return

  console.log('开始拖拽', dragStartIndex.value, '目标位置', dropIndex)

  // 获取拖拽项
  const dragItem = chosedDietList.value[dragStartIndex.value]
  // 创建新数组
  const newList = [...chosedDietList.value]
  // 删除拖拽项
  newList.splice(dragStartIndex.value, 1)
  // 在目标位置插入
  newList.splice(dropIndex, 0, dragItem)
  // 更新列表
  chosedDietList.value = newList
  dragStartIndex.value = dropIndex
}

const handleDragEnd = () => {
  console.log('结束拖拽')
  dragStartIndex.value = -1
}

onMounted(() => {
  // console.log('@@@', dragItem.value!.clientHeight)
})

const onStart = () => {
  Utils.navigateTo('/pagesCook/prepare/index')
}
</script>

<style scoped>
.dragging {
  opacity: 0.5;
  transition: transform 0.3s ease;
}

.scroll-view {
  height: calc(100vh - 300rpx);
}
</style>
