<template>
  <view class="card shadow1 rounded-20rpx">
    <up-image :src="item.icon" width="100%" radius="20rpx 20rpx 0 0" height="224rpx" mode="scaleToFill"></up-image>
    <view class="flex flex-col gap-8rpx p-22rpx">
      <text>{{ item.title }}</text>
      <text class="text-#333333 text-21rpx ellipsis">{{ item.desc }}</text>
      <button class="bg-#5DBE8A w-100% text-#fff" @click="handleClick">选择</button>
    </view>
    <SGPopupDialog
      ref="alertDialog"
      @confirm="handleConfirm"
      :hot="hot"
      :item="{ icon: item.icon, title: item.title }"
    />
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import type { CookModule, SGPopupDialogPlusInstance } from '@/types/component'
import { inject, ref } from 'vue'
interface Props {
  item: CookModule.FoodCardItem
  hot: number
}
const handleSelect = inject('handleSelect') as (a: number, b: number) => void

const alertDialog = ref<SGPopupDialogPlusInstance>()
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
