<template>
  <view class="p-28rpx w-100% shadow1 bg-white rounded-14rpx">
    <view class="item w-100% flex flex-col gap-20rpx">
      <view class="flex justify-between" v-for="item in list" :key="item.title">
        <text class="text-#333333">{{ item.title }}</text>
        <view class="flex gap-8rpx">
          <text>{{ item.value }}</text>
          <text>{{ item.op }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import useCookStore from '@/stores/modules/cook'
const cookStore = useCookStore()
const { totalHot, totalNum } = storeToRefs(cookStore)

const list = ref([
  { title: '总计菜品', value: totalNum, op: '道' },
  { title: '总热量', value: totalHot, op: 'kcal' },
  { title: '蛋白质', value: 49, op: 'g' },
  { title: '碳水化合物', value: 62, op: 'g' },
  { title: '脂肪', value: 86, op: 'g' },
])
</script>

<style scoped></style>
