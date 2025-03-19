<template>
  <!-- 今日饮食计划 -->
  <view class="meal-plan mb-32rpx">
    <view class="flex justify-between items-center mb-16rpx">
      <text class="text-31.5rpx font-medium">今日饮食计划</text>
      <view class="text-0 fb mr-1">
        <up-tag bg-color="#5DBE8A" border-color="#5DBE8A" @click="onModify">修改计划</up-tag>
        <uni-icons type="right" color="#9CA3AF" size="15" />
      </view>
    </view>

    <template v-for="(item, index) in dielt" :key="index">
      <view class="meal-card bg-white rounded-lg p-16rpx mb-16rpx shadow-sm">
        <view class="flex items-center">
          <image :src="item.image" class="size-112rpx rounded" />
          <view class="ml-16rpx flex-1">
            <view class="flex justify-between">
              <text class="font-medium">{{ item.title }}</text>
              <text class="text-#6B7280 fb">{{ item.time }}</text>
            </view>
            <text class="text-#6B7280 fb block">{{ item.food }}</text>
            <text class="fb text-#6B7280">{{ item.kcal }}</text>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>

<script setup lang="ts">
import zhao from '@/static/plan/icon-zhao.svg'
import zhonwu from '@/static/plan/icon-zhonwu.svg'
import wan from '@/static/plan/icon-wan.svg'
import { defineProps, ref, computed, watchEffect, onMounted } from 'vue'

interface DataInter {
  planContent: string
  meals: string[]
  id?: number
}
// 定义接收的 prop 类型
const props = defineProps<{ data: DataInter }>()

const dielt = ref<any[]>([])

onMounted(() => {
  const list = ref([
    { title: '早餐', time: '07:30', food: '全麦面包 + 牛奶 + 水煮蛋', kcal: '320卡路里', image: zhao },
    { title: '午餐', time: '12:00', food: '糙米饭 + 鸡胸肉 + 西兰花', kcal: '3 道菜 | 450 卡路里', image: zhonwu },
    { title: '晚餐', time: '18:30', food: '三文鱼沙拉 + 藜麦', kcal: '2 道菜 | 380 卡路里', image: wan },
  ])

  console.log('props.data.meals', props.data.meals)

  props.data.meals.forEach((item, index) => {
    list.value[index].food = item.split(':')[1]
  })
  dielt.value = list.value
})

const onModify = () => {
  uni.navigateTo({
    url: '/pages/note/edit?id=' + props.data.id,
  })
}
</script>

<style scoped></style>
