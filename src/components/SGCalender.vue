<template>
  <view class="wrap w-100% bg-#fff">
    <view class="center">
      <view class="title w-260rpx text-#ADA4A5 text-20rpx juslr items-center">
        <uni-icons type="left" color="" size="15" @click="handleMutedDay" />
        <text @click="handleClick">{{ value1 }}</text>
        <uni-icons type="right" color="" size="15" @click="handleAddDay" />
      </view>
    </view>
    <view class="juslr text-24.5rpx">
      <view v-for="item in data" :key="item.week">
        <view class="item col">
          <text>{{ item.week }}</text>
          <view class="rounded-full size-50rpx center" :class="{ 'bg-#5DBE8A text-#fff': item.date == getActiveDay }">{{
            item.date
          }}</view>
        </view>
      </view>
    </view>

    <up-calendar
      :show="show"
      :closeOnClickOverlay="true"
      :value="value1"
      :default-date="dayjs(Date.now()).format('YYYY-MM-DD')"
      :monthNum="12"
      @confirm="handleConfirm"
      :showLunar="true"
      @close="handleClose"
    >
    </up-calendar>
  </view>
</template>

<script setup lang="ts">
import { DateTools } from '@/utils/tool'
import dayjs from 'dayjs'
import { computed, ref } from 'vue'

const show = ref(false)
const value1 = ref(dayjs(Date.now()).format('YYYY-MM-DD'))
const data = computed(() => {
  return DateTools.getWeekDates(value1.value)
})
const getActiveDay = computed(() => {
  return new Date(value1.value).getDate() + ''
})

const handleAddDay = () => {
  value1.value = dayjs(value1.value).add(1, 'day').format('YYYY-MM-DD')
}
const handleMutedDay = () => {
  value1.value = dayjs(value1.value).add(-1, 'day').format('YYYY-MM-DD')
}
const handleClose = () => {
  show.value = false
}
const handleClick = () => {
  show.value = true
}

const handleConfirm = (e: any) => {
  console.log(e[0])

  value1.value = e[0]
  show.value = false
}
const change = (e: any) => {
  console.log(e[0])

  value1.value = e[0]
  show.value = false
}
</script>

<style scoped></style>
