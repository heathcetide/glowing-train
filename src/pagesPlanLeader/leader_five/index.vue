<template>
  <view class="" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CustomNavBar title="启动健康焕新计划" :step="4" :totalStep="4" :activeIndex="3" />

    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">恭喜，用户！</text>
        <view class="col">
          <text class="text-24rpx text-0"> 您的定制化健康计划已就绪</text>
          <text class="text-24rpx text-0"> 从饮食到作息，一步步轻松改善生活！</text>
        </view>
      </view>
    </view>

    <view class="main-contain p-x28rpx">
      <uni-list :border="false" class="flex-col-nocenter gap-20rpx">
        <uni-list-item
          link="navigateTo"
          class="shadow1 rounded-16rpx"
          :title="item.title"
          :note="item.desc"
          v-for="item in list"
          :key="item.title"
        >
          <template #header>
            <view class="mr-20rpx center">
              <image :src="item.icon" class="size-52.5rpx" mode="scaleToFill" />
            </view>
          </template>
        </uni-list-item>
      </uni-list>
    </view>

    <!-- 底部 -->
    <view class="containt mt40rpx pos-fixed pos-bottom-0 w-100% px-28rpx mb-30rpx flex-col-nocenter gap20rpx">
      <button class="bg-#5DBE8A text-#fff w-100%" @click="onNext">
        开始使用计划 <uni-icons type="arrow-right" color="#fff" size="24" />
      </button>
      <button class="bg-#F5F5F5 text-0 w-100%" @click="onBack">
        <uni-icons type="arrow-left" size="24" /> 重新调整计划
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import IconCorret from '@image/plan-leader/icon-corret.svg'
import IconRun from '@image/plan-leader/icon-run.svg'
import IconDate from '@image/plan-leader/icon-date.svg'
import IconZhong from '@image/plan-leader/icon-zhong.svg'
import IconTool from '@image/plan-leader/icon-tool.svg'
const { safeAreaInsets } = uni.getWindowInfo()

const list = [
  { icon: IconRun, title: '每日运动时长', desc: '45分钟（中等强度)' },
  { icon: IconTool, title: '每日热量摄入', desc: '1800 kcal (均衡饮食)' },
  { icon: IconCorret, title: '每周饮食建议', desc: '高蛋白／低碳水/轻食' },
  { icon: IconZhong, title: '每周运动安排', desc: '4天有氧+2天力量训练' },
  { icon: IconDate, title: '目标达成时间', desc: '预计3个月' },
]
const onNext = () => {}
const onBack = () => {}
</script>

<style scoped>
page {
  background: #fff;
}
</style>
