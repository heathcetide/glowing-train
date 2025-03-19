<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CookNavBar title="烹饪完成" />
    <view class="px-28rpx">
      <up-line-progress percentage="100" activeColor="#5DBE8A" :height="5" :show-text="false" />

      <view class="img mt-32rpx pos-relative">
        <up-image :src="chosedDiet.image" width="100%" height="448rpx" mode="aspectFit" />
        <view class="pos-absolute pos-top--10rpx center pos-right-0rpx bg-#5DBE8A rounded-full w-174.56rpx h-50.75rpx">
          <uni-icons type="medal" color="#fff" size="20" />
          <text class="text-24.5rpx text-#fff">烹饪达人 </text>
        </view>
      </view>

      <view class="col gap-10rpx my-22rpx">
        <text class="text-35rpx font-700">{{ chosedDiet.title }}</text>
        <text>完美完成！这道菜看起来棒极了</text>
      </view>

      <view class="col bg-#fff p-24rpx rounded-14rpx">
        <text class="text-#333333">为这次烹饪打分</text>
        <uni-rate v-model="rateValue" />
      </view>
      <view class="col bg-#fff p-28rpx rounded-14rpx shadow1 my-22rpx">
        <view class="flex justify-start w-100%">
          <text class="text-31.5rpx">营养信息</text>
        </view>
        <view class="flex justify-around mt-20rpx w-100%">
          <view v-for="item in list" :key="item.name" class="flex flex-col gap-8rpx items-center">
            <text>{{ item.name }}</text>
            <text>{{ item.value }}</text>
          </view>
        </view>
      </view>

      <view class="flex gap-22rpx w-100%">
        <button class="flex-1 text-#fff bg-#5DBE8A center gap-8rpx" @click="onShare()">
          <image class="size-24.5rpx" :src="IconShare" mode="scaleToFill" />
          分享美食
        </button>
        <button class="flex-1 text-#5DBE8A bg-#fff center gap-8rpx">
          <image class="size-24.5rpx" :src="IconSave" mode="scaleToFill" />
          收藏菜谱
        </button>
      </view>

      <view class="mt-28rpx">
        <button @click="onTakeNote" class="flex-1 mb-20rpx bg-#fff items-center">
          <image :src="IconDielt" mode="scaleToFill" class="size-24.5rpx" />
          一键记录到今日饮食
        </button>
        <button class="flex-1 text-#fff bg-#5DBE8A items-center" @click="goTurnMain()">
          <uni-icons type="arrow-right" color="#fff" size="20" />
          {{ btnInfo }}
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CookNavBar from '../common/CookNavBar.vue'
import Pic from '@/static/image/cook/cook-success-pic.svg'
import IconShare from '@/static/image/cook/icon-share.svg'
import IconSave from '@/static/image/cook/icon-save.svg'
import IconDielt from '@/static/image//community/icon-diet.svg'
import { computed, ref } from 'vue'
import Utils from '@/utils'
import useCookStore from '@/stores/modules/cook'
const { safeAreaInsets } = uni.getWindowInfo()

const { chosedDietList } = useCookStore()
const chosedDiet = chosedDietList[0]
const rateValue = ref(0)
const list = [
  {
    name: '热量',
    value: chosedDiet.kcal + 'kcal',
  },
  {
    name: '蛋白质',
    value: '28 g',
  },
  {
    name: '脂肪',
    value: '16 g',
  },
]

const btnInfo = computed(() => {
  return chosedDietList.length > 1 ? '下一道菜' : '烹饪完成'
})

const onTakeNote = () => {
  console.log(chosedDiet)

  console.log('点击了一键记录')
}
const onShare = () => {
  console.log('点击了分享')

  Utils.navigateTo('/pages/upload/upload')
}
const goTurnMain = () => {
  useCookStore().deleteDiet(chosedDietList[0].id)

  if (chosedDietList.length > 1) {
    Utils.redirectTo('/pagesCook/calc-food/index')
    return
  }
  uni.switchTab({
    url: '/pages/community/community', // 这里改成 TabBar 页面路径
  })
}
</script>

<style scoped></style>
