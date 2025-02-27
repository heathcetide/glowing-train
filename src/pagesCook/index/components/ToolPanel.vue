<template>
  <uni-row :gutter="28" class="flex flex-wrap mb-38rpx">
    <uni-col :span="8" v-for="(item, index) in panels" :key="index" class="mb-28rpx">
      <view class="col gap-6rpx bg-#fff size-212.66rpx shadow1 rounded-20rpx">
        <image :src="item.icon" mode="scaleToFill" class="size-42rpx" />
        <text class="text-24.5rpx text-#333333">{{ item.text }}</text>
        <text class="text-24.5rpx text-#333333">{{ item.state }}</text>
      </view>
    </uni-col>
  </uni-row>
</template>

<script setup lang="ts">
import IconTime2 from '@/static/image/cook/icon-time2.svg'
import IconTAi from '@/static/image/cook/icon-ai.svg'
import IconList from '@/static/image/cook/icon-list.svg'
import IconLove from '@/static/image/cook/icon-love.svg'
import IconMore from '@/static/image/cook/icon-more.svg'
import IconTemp from '@/static/image/cook/icon-temp.svg'

const panels = [
  {
    icon: IconTime2,
    text: '计时器',
    state: '未开始',
  },
  {
    icon: IconTemp,
    text: '温度',
    state: '26°C',
  },

  {
    icon: IconTAi,
    text: '智能助手',
  },
  {
    icon: IconList,
    text: '购物清单',
    state: '4项',
  },
  {
    icon: IconLove,
    text: '收藏',
  },
  {
    icon: IconMore,
    text: '更多',
  },
]
</script>
