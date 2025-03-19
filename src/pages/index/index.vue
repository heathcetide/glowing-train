<template>
  <view class="wrap" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="container">
      <SGTabs :tabs="tabs" fontWeight="bold">
        <template #tab-0><Recommend /> </template>
        <template #tab-1><Diet /> </template>
        <template #tab-2><Plan /> </template>
        <template #tabs="{ tab }">
          <view class="tab">
            <text>{{ tab }}</text>
          </view>
        </template>
      </SGTabs>

      <up-float-button backgroundColor="#5DBE8A" :isMenu="false" bottom="100rpx" @click="goToChoose">
        <template #default>
          <view class="text-60rpx text-center flex items-center justify-center">+</view>
        </template>
      </up-float-button>
    </view>

    <SGPoup v-model:show="show" ref="popup">
      <template #default>
        <view class="bg-#F5F5F5 rounded-30rpx p-10rpx">
          <view class="center text-40rpx text-0 py-20rpx">
            <text>坚持记录，迈向更健康的自己！</text>
          </view>
          <view class="flex flex-wrap justify-between gap-10rpx">
            <view v-for="item in list" :key="item.title" class="mb-14rpx w48%">
              <PoupCard
                @click="handleClick(item.url)"
                :image="item.image"
                :title="item.title"
                :icon="item.icon"
                :subTitle="item.subTitle"
              />
            </view>
            <uni-row class="w-100%">
              <view class="p-42rpx flex justify-between bg-#fff" @click="goToAiService">
                <view class="image size-84rpx rounded-full bg-#ECFDF5">
                  <image :src="icon5" class="size-84rpx" mode="scaleToFill" />
                </view>
                <view class="flex flex-col">
                  <text>AI营养助手</text>
                  <text>智能记录并分析饮食建议</text>
                </view>
                <view class="w-56rpx">
                  <uni-icons type="mic-filled" color="#5DBE8A" size="21" />
                </view>
              </view>
            </uni-row>
          </view>
        </view>
      </template>
    </SGPoup>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Recommend from './components/recommend/index.vue'

import Plan from './components/plan/index.vue'
import Diet from './components/diet/index.vue'
import PoupCard from './components/PoupCard.vue'
import image1 from '@/static/image/home/image-1.svg'

import image2 from '@/static/image/home/icon.svg'
import image3 from '@/static/image/home/image-3.svg'
import image4 from '@/static/image/home/image-4.svg'
import icon1 from '@/static/image/home/icon1.svg'
import icon2 from '@/static/image/home/icon2.svg'
import icon3 from '@/static/image/home/icon3.svg'
import icon4 from '@/static/image/home/icon4.svg'
import icon5 from '@/static/image/home/icon-ai.svg'
import Utils from '@/utils'

import useChangeStore from '@/stores/modules/change'

const popup = ref()
const changeStore = useChangeStore()
const { safeAreaInsets } = uni.getWindowInfo()

const list = [
  {
    title: '饮食记录',
    image: image1,
    icon: icon1,
    subTitle: '已记录 3 餐',
    url: '/pages/note/note',
  },
  {
    title: '做饭模式',
    image: image2,
    icon: icon2,
    subTitle: '今日运动 45 分钟',
    url: '/pagesCook/index/index',
  },
  {
    title: '食材库存',
    image: image3,
    icon: icon3,
    subTitle: '库存 15 种食材',
    url: '/pages/add-food/index',
  },
  {
    title: '社区分享',
    image: image4,
    icon: icon4,
    subTitle: '已分享 8 条动态',
    url: '/pages/upload/upload',
  },
]

// 创建响应式数据
const show = ref(false)

const tabs = ref(['推荐', '饮食', '计划'])

const goToAiService = () => {
  changeStore.changeTabType('main')
  changeStore.changeTab(3)
  popup.value.close()
  setTimeout(() => {
    Utils.switchTab('/pages/community/community')
  }, 500)
}
const handleClick = (url: string) => {
  // console.log(props.url)
  console.log('sss')
  popup.value.close()
  if (url) {
    Utils.navigateTo(url)
  }
}
const goToChoose = () => {
  popup.value.open()
}
</script>
<style lang="scss" scoped>
.notice-bar {
  height: 80rpx;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 15.7rpx;

  .head {
    width: 100%;
    padding: 0 0 26rpx;
  }
}
</style>
