<template>
  <!-- 今日运动计划 -->
  <view class="exercise-plan">
    <view class="flex justify-between items-center mb-16rpx">
      <text class="text-31.5rpx font-medium">今日运动计划</text>
      <view class="text-0 fb mr-1">
        <uni-icons type="right" color="#9CA3AF" size="15" />
      </view>
    </view>
    <template v-for="(item, index) in list" :key="index">
      <view class="exercise-card bg-white rounded-lg p-16rpx mb-16rpx shadow-sm">
        <view class="flex items-center">
          <image :src="item.icon" class="w-80rpx h-80rpx rounded" />
          <view class="ml-16rpx flex-1">
            <view class="flex justify-between">
              <text class="font-medium">{{ item.title }}</text>
              <text class="text-#5DBE8A fb">{{ item.time }}</text>
            </view>
            <text class="fb text-#6B7280">{{ item.desc }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import Yujia from '@image/icon-yujia.svg'
import { onMounted, ref } from 'vue'

interface DataInter {
  exercises: string[]
}
// 定义接收的 prop 类型
const props = defineProps<DataInter>()

const list = ref([
  { icon: Yujia, title: '', time: '20分钟', desc: '提升灵活性和平衡感' },
  { icon: Yujia, title: '', time: '30分钟', desc: '哑铃训练 + 核心力量' },
  { icon: Yujia, title: '晨间瑜伽', time: '20分钟', desc: '提升灵活性和平衡感' },
])

onMounted(() => {
  console.log('sss', props.exercises)
  props.exercises.forEach((item, index) => {
    list.value[index].title = item.slice(0, -4)
    // list.value[index].desc = item.slice(-4)
    list.value[index].time = item.slice(-4)
  })
})
</script>

<style scoped></style>
