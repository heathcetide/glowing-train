<template>
  <LeaderCard title="每日用餐次数">
    <template #default>
      <view
        v-for="(item, index) in eatFoodTimes"
        :key="item"
        class="flex-1 items-center"
        @click="defaultEatTime = index"
      >
        <view v-if="index == defaultEatTime">
          <view class="border-2rpx b-#5DBE8A b-solid p-24rpx text-#5DBE8A center bg-#5DBE8A10">
            {{ item }}
          </view>
        </view>
        <view v-else class="border-2rpx b-#E5E5E5 b-solid p-24rpx center">
          {{ item }}
        </view>
      </view>
    </template>
  </LeaderCard>
</template>

<script setup lang="ts">
import LeaderCard from './LeaderCard.vue'
import { ref, watch } from 'vue'

const defaultEatTime = ref(1)
const eatFoodTimes = ['2 餐', '3 餐', '4 餐+']

const emit = defineEmits(['count'])
watch(defaultEatTime, () => {
  emit('count', eatFoodTimes[defaultEatTime.value])
})
</script>

<style scoped></style>
