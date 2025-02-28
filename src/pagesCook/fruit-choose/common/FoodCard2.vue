<template>
  <view class="card shadow1 rounded-0_20rpx_20rpx-0 flex w-100%">
    <up-image :src="item.icon" width="168rpx" radius="20rpx 0  0 20rpx" height="168rpx" mode="scaleToFill"></up-image>
    <view class="flex justify-between gap-8rpx px-22rpx items-center w-100%">
      <view class="flex flex-col gap-8rpx">
        <text>{{ item.title }}</text>
        <text class="text-#333333 text-21rpx ellipsis">{{ item.desc }}</text>
      </view>
      <view>
        <button class="bg-#5DBE8A text-#fff" @click="handleClick" size="mini">选择</button>
      </view>
    </view>
    <SGPopupDialog ref="alertDialog" @confirm="handleConfirm" :hot="hot" :item="item" />
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import type { CookModule, SGPopupDialogPlusInstance } from '@/types/component'
import { ref, inject } from 'vue'
interface Props {
  item: CookModule.FoodCardItem
  hot: number
}

interface Emits {
  (e: 'click', item: CookModule.FoodCardItem): void
}
const handleSelect = inject('handleSelect') as (a: number, b: number) => void
const alertDialog = ref<SGPopupDialogPlusInstance>()
const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      id: 1,
      icon: icon1,
      title: '红烧狮子头',
      desc: '经典淮扬名菜，肉质鲜嫩',
    } as CookModule.FoodCardItem),
  hot: 200,
})

const handleClick = () => {
  alertDialog.value?.open()
}
const handleConfirm = () => {
  handleSelect(alertDialog.value?.value!, alertDialog.value?.hotCounter!)
  emit('click', props.item)
}
</script>

<style scoped></style>
