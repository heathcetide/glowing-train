<template>
  <view class="" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CustomNavBar title="启动健康焕新计划" :step="3" :totalStep="4" :activeIndex="2" />

    <view class="p-24rpx">
      <view class="goal w-100% col gap-24rpx">
        <text class="text-48rpx font-700">你的运动习惯是怎样的？ </text>
        <text class="text-24rpx text-0">我们会根据你的运动习惯，为你提供合适的能量补充建议。</text>
      </view>

      <view class="main flex-col flex w-100% gap24rpx mt40rpx">
        <!-- 饮食风格（可多选） -->
        <LeaderCard title="运动频率">
          <template #default>
            <view class="flex flex-col gap-20rpx w-100%">
              <view v-for="item in list" :key="item.title" class="flex gap-20rpx bg-#fff w-100% p-23rpx rounded-16rpx">
                <text class="text-40rpx">{{ item.icon }}</text>
                <view>
                  <view class="title fb text-black">{{ item.title }}</view>
                  <view class="title text-21rpx text-0">{{ item.desc }}</view>
                </view>
              </view>
            </view>
          </template>
        </LeaderCard>
        <!-- 口味偏好（可多选） -->
        <PanelCard3 @taste="handleTaste" title="口味偏好（可多选）" :lists="exeTypes" />
      </view>
    </view>

    <NextButton url="leader_four" />
  </view>
</template>

<script lang="ts" setup>
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import LeaderCard from '../components/LeaderCard.vue'
import NextButton from '../components/NextButton.vue'
import PanelCard3 from '../components/PanelCard3.vue'

const { safeAreaInsets } = uni.getWindowInfo()

const list = [
  { icon: '🚶', title: '几乎不运动', desc: '久坐党，运动量极低' },
  { icon: '🚶', title: '偶尔运动', desc: '一周 1-2 次轻量运动，如散步、瑜伽' },
  { icon: '🏋️', title: '规律运动', desc: '一周 3-5 次中等强度运动，如跑步、健身房' },
  { icon: '🏃‍♀️', title: '高强度运动', desc: '一周 6 次以上，高强度训练，如 HIIT、马拉松' },
]

const exeTypes = [
  { icon: '🏃‍♂️', value: '有氧运动' },
  { icon: '🏋️', value: '力量训练' },
  { icon: '🧘', value: '瑜伽/拉伸' },
  { icon: '🏀', value: '球类运动' },
  { icon: '🚴‍♂️', value: '户外运动' },
  { icon: '🎯', value: '其他运动' },
]
const handleTaste = (item: string) => {
  console.log('@', item)
}
</script>

<style scoped>
page {
  background: #fff;
}
</style>
