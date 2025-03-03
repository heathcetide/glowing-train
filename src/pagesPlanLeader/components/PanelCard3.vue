<template>
  <LeaderCard :title="title">
    <template #default>
      <uni-row :gutter="20">
        <uni-col
          :span="12"
          v-for="(item, index) in list"
          :key="item.value"
          class="mb-20rpx"
          @click="handleClick(index)"
        >
          <view class="border2">
            <view
              v-if="activeIndex.includes(index)"
              class="flex gap-10rpx w-100% bg-emerald text-#fff rounded-8rpx text-24.5rpx px-28rpx py-21rpx"
            >
              <text class="text-40rpx">{{ item.icon }}</text>
              <text>{{ item.value }}</text>
            </view>
            <view v-else class="flex gap-10rpx w-100% bg-white rounded-8rpx text-24.5rpx px-28rpx py-21rpx">
              <text class="text-40rpx">{{ item.icon }}</text>
              <text>{{ item.value }}</text>
            </view>
          </view>
        </uni-col>
      </uni-row>
    </template>
  </LeaderCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LeaderCard from './LeaderCard.vue'

interface prop {
  title: string
  lists?: { icon: string; value: string }[]
}

const props = defineProps<prop>()

const likes = [
  { icon: '🌶', value: '偏辣' },
  { icon: '🍋', value: '清淡' },
  { icon: '🍬', value: '偏甜' },
  { icon: '🧂', value: '重口味' },
]
const list = computed(() => {
  return props.lists || likes
})

const activeIndex = ref<number[]>([0])

const emit = defineEmits(['taste'])

const handleClick = (index: number) => {
  if (activeIndex.value.includes(index)) {
    activeIndex.value = activeIndex.value.filter((item) => item !== index)
  } else {
    activeIndex.value.push(index)
  }
}
</script>

<style scoped></style>
