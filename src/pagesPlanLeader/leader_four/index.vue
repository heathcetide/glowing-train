<template>
  <view class="" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CustomNavBar title="启动健康焕新计划" :step="4" :totalStep="4" :activeIndex="3" />

    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">你的生活习惯是怎样的？ </text>
        <text class="text-24rpx text-0">我们会根据你的生活习惯，为你提供全方位的健康管理建议。</text>
      </view>

      <view class="main flex-col flex w-100% gap49rpx mt40rpx">
        <!-- 作息习惯 -->
        <LeaderCard title="作息习惯">
          <template #default>
            <view class="flex flex-col gap-21rpx w-100%">
              <view
                v-for="(item, index) in list"
                :key="item.title"
                :class="{ active: activeHabiteIndex === index }"
                class="flex gap-20rpx bg-#fff w-100% p-23rpx rounded-16rpx transition-300"
                @click="handleChoseHabite(item, index)"
              >
                <view class="center">
                  <image :src="item.icon" class="size-40rpx"></image>
                </view>
                <view>
                  <view class="title text-black" :class="{ txColor: activeHabiteIndex === index }">{{
                    item.title
                  }}</view>
                  <view class="title fb text-0" :class="{ txColor: activeHabiteIndex === index }">{{ item.desc }}</view>
                </view>
              </view>
            </view>
          </template>
        </LeaderCard>
        <!-- 压力水平 -->
        <LeaderCard title="压力水平">
          <template #default>
            <view class="flex flex-col gap-21rpx w-100%">
              <view
                v-for="(item, index) in stress"
                :key="item.title"
                :class="{ active: activeStressIndex === index }"
                class="flex gap-20rpx bg-#fff w-100% p-23rpx rounded-16rpx transition-300"
                @click="handleChoseStress(item, index)"
              >
                <view class="center">
                  <image :src="item.icon" class="w-35rpx h-49rpx"></image>
                </view>
                <view>
                  <view class="title text-black" :class="{ txColor: activeStressIndex === index }">{{
                    item.title
                  }}</view>
                  <view class="title fb text-0" :class="{ txColor: activeStressIndex === index }">{{ item.desc }}</view>
                </view>
              </view>
            </view>
          </template>
        </LeaderCard>
      </view>
    </view>

    <NextButton url="leader_five" />
  </view>
</template>

<script lang="ts" setup>
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import LeaderCard from '../components/LeaderCard.vue'
import NextButton from '../components/NextButton.vue'
import IconSemil from '@image/plan-leader/icon-semil.svg'
import IconNormal from '@image/plan-leader/icon-normal.svg'
import IconUpset from '@image/plan-leader/icon-upset.svg'
import IconRegular from '@image/plan-leader/icon-regular.svg'
import IconFrequntly from '@image/plan-leader/icon-frequntly.svg'
import IconSometime from '@image/plan-leader/icon-sometime.svg'
import { ref } from 'vue'

const { safeAreaInsets } = uni.getWindowInfo()
const activeHabiteIndex = ref(0)
const activeStressIndex = ref(0)
const list = [
  { icon: IconRegular, title: '规律作息', desc: '23:00 前入睡' },
  { icon: IconSometime, title: '偶尔熬夜', desc: '23:30 - 01:00' },
  { icon: IconFrequntly, title: '经常熬夜', desc: '01:00+' },
]
const stress = [
  { icon: IconSemil, title: '低压力', desc: '生活节奏较轻松' },
  { icon: IconNormal, title: '中等压力', desc: '偶尔加班、学习紧张' },
  { icon: IconUpset, title: '高压力', desc: '工作学习繁忙、焦虑' },
]

const handleChoseStress = (item: any, index: number) => {
  activeStressIndex.value = index
  console.log(item)
}
const handleChoseHabite = (item: any, index: number) => {
  activeHabiteIndex.value = index
  console.log(item)
}
</script>

<style scoped>
page {
  background: #fff;
}

.active {
  background-color: #5dbe8a;
}

.txColor {
  color: #fff;
}
</style>
