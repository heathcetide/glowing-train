<template>
  <LeaderCard title="饮食风格（可多选）">
    <template #default>
      <uni-row :gutter="20">
        <uni-col
          :span="12"
          v-for="(item, index) in hibits"
          :key="item.value"
          class="mb-20rpx"
          @click="hanleClick(index)"
        >
          <view
            v-if="activeIndex.includes(index)"
            class="flex gap-10rpx w-100% bg-emerald text-#fff rounded-8rpx border2 text-24.5rpx px-28rpx py-21rpx"
          >
            <text class="text-40rpx">{{ item.icon }}</text>
            <text>{{ item.value }}</text>
          </view>
          <view v-else class="flex gap-10rpx w-100% bg-#fff border2 rounded-8rpx text-24.5rpx px-28rpx py-21rpx">
            <text class="text-40rpx">{{ item.icon }}</text>
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
const activeIndex = ref<number[]>([0])
const hibits = [
  { icon: '🍚', value: '均衡饮食' },
  { icon: '🥗', value: '低碳水饮食' },
  { icon: '🥦', value: '素食' },
  { icon: '🍖', value: '高蛋白饮食' },
  { icon: '🍔', value: '无特定要求' },
]

const hanleClick = (index: number) => {
  if (activeIndex.value.includes(index)) {
    activeIndex.value = activeIndex.value.filter((item) => item !== index)
  } else {
    activeIndex.value.push(index)
  }
}
</script>

<style scoped></style>
