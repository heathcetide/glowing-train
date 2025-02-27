<template>
  <LeaderCard title="饮食风格（可多选）">
    <template #default>
      <uni-row :gutter="20">
        <uni-col
          :span="12"
          v-for="(item, index) in hibits"
          :key="item.value"
          class="mb-20rpx"
          @click="activeIndex = index"
        >
          <view
            v-if="activeIndex === index"
            class="flex gap-10rpx w-100% bg-emerald rounded-8rpx text-24.5rpx px-28rpx py-21rpx"
          >
            <image class="size-20rpx" :src="item.icon" mode="scaleToFill" />
            <text>{{ item.value }}</text>
          </view>
          <view v-else class="flex gap-10rpx w-100% bg-amber rounded-8rpx text-24.5rpx px-28rpx py-21rpx">
            <image class="size-20rpx" :src="item.icon" mode="scaleToFill" />
            <text>{{ item.value }}</text>
          </view>
        </uni-col>
      </uni-row>
    </template>
  </LeaderCard>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import LeaderCard from './LeaderCard.vue'

const emit = defineEmits(['style'])
const activeIndex = ref(0)
const hibits = [
  { icon: '@/static/image/plan-leader/1.png', value: '均衡饮食' },
  { icon: '@/static/image/plan-leader/🥗.svg', value: '低碳水饮食' },
  { icon: '@/static/image/plan-leader/🥦.svg', value: '素食' },
  { icon: '@/static/image/plan-leader/🍖.svg', value: '高蛋白饮食' },
  { icon: '@/static/image/plan-leader/🍔.svg', value: '无特定要求' },
]

watch(activeIndex, (newValue) => {
  emit('style', hibits[newValue].value)
})
</script>

<style scoped></style>
