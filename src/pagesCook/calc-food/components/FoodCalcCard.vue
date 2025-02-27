<template>
  <view class="card shadow1 rounded-14rpx flex w-100% p-28rpx gap-28rpx bg-#fff">
    <uni-badge
      size="small"
      :text="index"
      :custom-style="{
        backgrounColor: '##5DBE8A',
        color: '#fff',
        borderRadius: '50%',
      }"
      absolute="leftTop"
      type="success"
    >
      <up-image :src="item.icon" width="168rpx" radius="14rpx" height="168rpx" mode="scaleToFill" />
    </uni-badge>
    <view class="px-22rpx items-center w-100%">
      <view class="flex flex-col w-100%">
        <view class="justify-between flex w-100%">
          <text>{{ item.title }}</text>
          <uni-icons type="trash-filled" color="" size="20" />
        </view>
        <text class="text-#333333 text-21rpx ellipsis mt-8rpx mb-20rpx">{{ item.desc }}</text>
        <text class="text-#333333 text-21rpx ellipsis">{{ item.subDesc }}</text>
      </view>
      <view class="mt-22rpx">
        <CalcNumber v-model="value" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import CalcNumber from './CalcNumber.vue'
import type { CookModule } from '@/types/component'

import { ref } from 'vue'

// 创建响应式数据
const value = ref(1)
interface Props {
  item: CookModule.FoodCalcCardItem
  index: string
}

interface Emits {
  (e: 'click', item: CookModule.FoodCardItem): void
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      id: 1,
      icon: icon1,
      title: '红烧狮子头',
      desc: '选用上等猪肉制作，口感细腻，味道浓郁',
      subDesc: '热量：450kcal | 建议 4 人食用',
    } as CookModule.FoodCalcCardItem),
})

const handleClick = () => {
  emit('click', props.item)
}
</script>

<style scoped></style>
