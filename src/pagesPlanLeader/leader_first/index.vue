<template>
  <CustomNavBar title="启动健康焕新计划" :step="1" :totalStep="4" />
  <view class="">
    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">你的目标是什么？</text>
        <text class="text-24rpx text-0">选择你的主要目标，我们会为你定制专属计划</text>
      </view>

      <view class="containt flex flex-col gap-22rpx mt-20rpx">
        <PlanLeaderCard
          :class="{ active: activeIndex == index }"
          @click="activeIndex = index"
          class="transition-300"
          v-for="(item, index) in options"
          :key="index"
          :title="item.title"
          :subTitle="item.subTitle"
          :icon="item.icon"
        />
      </view>
    </view>
    <NextButton url="leader_two" @onNext="onNext" />
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
import { addOrUpdatePlanAPI } from '@/services/user/userBaseModule'

import { ref } from 'vue'
import Utils from '@/utils'

const activeIndex = ref(-1)

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

// 点击下一步时先将选择的数据发送至 API，再跳转页面
const onNext = async () => {
  if (activeIndex.value === -1) {
    // 未选择目标时可以提示用户选择
    console.warn('请先选择你的目标')
    return
  }
  const selectedPlan = options[activeIndex.value]
  try {
    // 根据后端接口要求构造请求参数，这里假设传递目标标题和描述
    await addOrUpdatePlanAPI({
      goalCategory: selectedPlan.title,
    })
    Utils.navigateTo(`/pagesPlanLeader/leader_two/index`)
  } catch (error) {
    console.error('发送计划数据失败：', error)
    // 根据需要添加错误提示或重试逻辑
  }
}
</script>

<style scoped>
page {
  background: #fff;
}

.active {
  box-shadow: 0 0 20rpx 4rpx #5dbe8a;
}
</style>
