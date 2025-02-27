<template>
  <view class="card shadow1 rounded-20rpx">
    <up-image :src="item.foodUrl" width="100%" radius="20rpx 20rpx 0 0" height="224rpx" mode="scaleToFill"></up-image>
    <view class="flex flex-col gap-8rpx p-22rpx">
      <text>{{ item.name }}</text>
      <text class="text-#333333 text-21rpx ellipsis">热量 {{ item.kcal }}</text>

      <view class="ingredients">
        <view v-for="(ingredient, index) in item.ingredients.slice(0, 3)" :key="index" class="ingredient-tag">
          {{ ingredient }}
        </view>
      </view>
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
      ingredients: ['土豆', '牛肉', '小葱'], // 示例食材数据
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

<style scoped>
.ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 8rpx;
  margin-top: 10rpx;
}

.ingredient-tag {
  background-color: #f0f0f0;
  border-radius: 12rpx;
  padding: 6rpx 12rpx;
  font-size: 18rpx;
  color: #333;
  text-align: center;
}
</style>
