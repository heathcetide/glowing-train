<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CookNavBar title="烹饪准备" />
    <view class="px-28rpx h-1200rpx">
      <up-line-progress percentage="30" activeColor="#5DBE8A" :height="5" :show-text="false"></up-line-progress>
      <scroll-view scroll-y>
        <!-- 食材准备 -->
        <view>
          <view class="text-31.5rpx font-600 mb-28rpx">食材准备</view>
          <view class="content flex flex-col gap-20rpx" v-for="(item, index) in foodList" :key="item.id">
            <PrepareCard :index="index + ''" :num="300" :icon="IconMet" />
          </view>
        </view>

        <!-- 工具准备
        <view class="mt-42rpx">
          <view class="text-31.5rpx font-600 mb-28rpx">工具准备</view>
          <view class="content flex flex-col gap-20rpx">
            <PrepareCard title="炒锅" :icon="iconTool" />
            <PrepareCard title="炒锅" :icon="iconTool" />
            <PrepareCard title="炒锅" :icon="iconTool" />
            <PrepareCard title="炒锅" :icon="iconTool" />
          </view>
        </view> -->
      </scroll-view>

      <view class="p-15rpx flex w-100% mt-20rpx jsustify-between items-center bg-white shadow1">
        <view class="title flex-1 gap10rpx center gap-10rpx">
          <image class="size-28rpx" :src="IconTime" mode="scaleToFill" />
          <text>预计时间: 30分钟</text>
        </view>
        <view class="scores flex-1 justify-end flex">
          <uni-rate v-model="rateValue" disabled-color="#FFCA3E" disabled />
        </view>
      </view>
      <view class="w-100% mt-42rpx">
        <button class="bg-#5DBE8A text-#FFFFFF w-100%" @click="handleStartCook">开始烹饪</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CookNavBar from '../common/CookNavBar.vue'
import PrepareCard from './components/PrepareCard.vue'
import IconMet from '@/static/image/cook/met.svg'
import iconTool from '@/static/image/cook/tool.svg'
import IconTime from '@/static/image/cook/icon-time2.svg'
import Utils from '@/utils'

const rateValue = ref(3)
const { safeAreaInsets } = uni.getWindowInfo()
const handleStartCook = () => {
  Utils.navigateTo('/pagesCook/process/index')
}

// 定义一个 foodList 存储食物列表
const foodList = ref<any[]>([])

onMounted(() => {
  // 从本地存储获取推荐食物
  uni.getStorage({
    key: 'recommendedFoods',
    success: (res) => {
      if (res.data && Array.isArray(res.data)) {
        // 如果从存储中获取到推荐食物数据，赋值给 foodList
        foodList.value = res.data
      } else {
        console.log('没有找到推荐食物数据')
      }
    },
    fail: () => {
      console.log('无法获取推荐食物数据')
    },
  })
})
</script>

<style scoped></style>
