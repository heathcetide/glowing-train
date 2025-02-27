<template>
  <LeaderCard title="口味偏好（可多选）">
    <template #default>
      <uni-row :gutter="20">
        <uni-col
          :span="12"
          v-for="(item, index) in likes"
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

const activeIndex = ref(0)
const likes = [
  { icon: '@/static/image/plan-leader/1.png', value: '偏辣' },
  { icon: '@/static/image/plan-leader/🥗.svg', value: '清淡' },
  { icon: '@/static/image/plan-leader/🥦.svg', value: '偏甜' },
  { icon: '@/static/image/plan-leader/🍖.svg', value: '重口味' },
]

const emit = defineEmits(['taste'])
watch(activeIndex, (newValue) => {
  emit('taste', likes[newValue].value)
})
</script>

<style scoped></style>
