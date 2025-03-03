<template>
  <view class="" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <CustomNavBar title="启动健康焕新计划" :step="1" :totalStep="4" />
    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">你的目标是什么？</text>
        <text class="text-24rpx text-0">选择你的主要目标，我们会为你定制专属计划</text>
      </view>

      <view class="containt flex flex-col gap-22rpx">
        <PlanLeaderCard
          v-for="(item, index) in options"
          :key="index"
          :title="item.title"
          :subTitle="item.subTitle"
          :icon="item.icon"
        />
        <NextButton url="leader_two" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import PlanLeaderCard from '../components/PlanLeaderCard.vue'
import PicSec1 from '@/static/image/plan-leader/icon-planleader-sec-1.svg'
import PicSec2 from '@/static/image/plan-leader/icon-planleader-sec-2.svg'
import PicSec3 from '@/static/image/plan-leader/icon-planleader-sec-3.svg'
import PicSec4 from '@/static/image/plan-leader/icon-planleader-sec-4.svg'
import NextButton from '../components/NextButton.vue'
import Utils from '@/utils'

const { safeAreaInsets } = uni.getWindowInfo()
const options = [
  {
    icon: PicSec1,
    title: '减脂塑形',
    subTitle: '燃烧脂肪，塑造理想体态',
  },
  {
    icon: PicSec2,
    title: '增肌训练',
    subTitle: '提升肌肉质量，增强力量',
  },
  {
    icon: PicSec3,
    title: '增强体能',
    subTitle: '保持健康的生活方式',
  },
  {
    icon: PicSec4,
    title: '维持健康',
    subTitle: '提高耐力和心肺功能',
  },
]

const onNext = () => {
  Utils.navigateTo('/pagesPlanLeader/leader_two/index')
}
</script>

<style scoped>
page {
  background: #fff;
}
</style>
