<template>
  <view class="card shadow1 rounded-0_20rpx_20rpx-0 flex w-100%">
    <up-image
      :src="item.foodUrl"
      width="168rpx"
      radius="20rpx 0  0 20rpx"
      height="168rpx"
      mode="scaleToFill"
    ></up-image>
    <view class="flex justify-between gap-8rpx px-22rpx items-center w-100%">
      <view class="flex flex-col gap-8rpx">
        <text>{{ item.title }}</text>
        <text class="text-#333333 text-21rpx ellipsis">热量 {{ item.kcal }}kcal</text>
      </view>
      <view>
        <button class="bg-#5DBE8A text-#fff" @click="handleClick" size="mini">选择</button>
      </view>
    </view>

    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog
        type="success"
        cancelText="取消"
        confirmText="确定"
        :title="item.title"
        @confirm="dialogConfirm!"
        @close="dialogClose"
      >
        <view class="flex justify-between w-100% gap-30rpx">
          <view class="iamg">
            <up-image :src="item.foodUrl" width="168rpx" height="168rpx" radius="20rpx" />
          </view>
          <view class="flex-col flex w-100%">
            <view>
              <text>份数:</text>
              <up-number-box v-model="item.num!">
                <template #minus>
                  <view class="minus">
                    <uni-icons type="minus" color="" size="24" />
                  </view>
                </template>
                <template #input>
                  <text style="width: 50px; text-align: center" class="input">{{ item.num }}</text>
                </template>
                <template #plus>
                  <view class="plus">
                    <uni-icons type="plus" size="24" />
                  </view>
                </template>
              </up-number-box>
            </view>
            <view class="flex text-24rpx">
              <text>热量/份:</text>
              <text>{{ item.kcal }} kcal</text>
            </view>
          </view>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import type { CookModule, SGPopupDialogPlusInstance } from '@/types/component'
import { ref } from 'vue'
interface Props {
  item: CookModule.FoodCardItem
  hot: number
}

interface Emits {
  (e: 'click', item: CookModule.FoodCardItem): void
}

const alertDialog = ref<SGPopupDialogPlusInstance>()
const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      id: 1,
      icon: icon1,
      title: '红烧狮子头',
      desc: '经典淮扬名菜，肉质鲜嫩',
      foodUrl: icon1,
      num: 1,
      kcal: 0,
      ingredients: ['土豆', '牛肉', '小葱'], // 示例食材数据
    } as CookModule.FoodCardItem),
  hot: 200,
})
const dialogConfirm = () => {
  const item = props.item
  emit('click', item)
}

const goToDetail = () => {
  uni.navigateTo({
    url: '/pages/dietDetails/dietDetails',
  })
}

const dialogClose = () => {
  alertDialog.value?.close()
}

const handleClick = () => {
  alertDialog.value?.open()
}
</script>

<style scoped></style>
