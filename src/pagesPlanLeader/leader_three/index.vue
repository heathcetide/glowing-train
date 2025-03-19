<template>
  <view class="">
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
              <view
                v-for="(item, index) in list"
                :key="item.title"
                :class="{ active: activeIndex === index }"
                @click="activeIndex = index"
                class="flex gap-20rpx bg-#fff w-100% p-23rpx rounded-16rpx transition-300"
              >
                <text class="text-40rpx">{{ item.icon }}</text>
                <view>
                  <view class="title fb text-black" :class="{ activeColor: activeIndex === index }">{{
                    item.title
                  }}</view>
                  <view class="title text-21rpx text-0" :class="{ activeColor: activeIndex === index }">{{
                    item.desc
                  }}</view>
                </view>
              </view>
            </view>
          </template>
        </LeaderCard>
        <!-- 口味偏好（可多选） -->
        <PanelCard3 @taste="handleTaste" title="运动类型（可多选）" :lists="exeTypes" />
      </view>
    </view>

    <NextButton url="leader_four" @onNext="onNext" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CustomNavBar from '../../pages/resign/components/CustomNavBar.vue'
import LeaderCard from '../components/LeaderCard.vue'
import NextButton from '../components/NextButton.vue'
import PanelCard3 from '../components/PanelCard3.vue'
import { getUserHealthDataAdd } from '@/services/user/userBaseModule'
import Utils from '@/utils'

const forms = ref<{
  activityLevel: number
  activityType: string[]
}>({
  activityLevel: 1,
  activityType: [],
})

const activeIndex = ref(-1)
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
  if (forms.value.activityType.includes(item)) {
    forms.value.activityType = forms.value.activityType.filter((i) => i !== item)
  } else {
    forms.value.activityType.push(item)
  }
}

const onNext = async () => {
  forms.value.activityLevel = activeIndex.value + 1
  const res = await getUserHealthDataAdd(forms.value)
  if (res.code === 200) {
    Utils.navigateTo('/pagesPlanLeader/leader_four/index')
  }
  // console.log(res.data)
}
</script>

<style scoped>
page {
  background: #fff;
}

.active {
  background-color: #5dbe8a;
}
.activeColor {
  color: #fff;
}
</style>
