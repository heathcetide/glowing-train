<template>
  <view class="card shadow1 rounded-20rpx">
    <up-image :src="item.icon" width="100%" radius="20rpx 20rpx 0 0" height="224rpx" mode="scaleToFill"></up-image>
    <view class="flex flex-col gap-8rpx p-22rpx">
      <text>{{ item.title }}</text>
      <text class="text-#333333 text-21rpx ellipsis">{{ item.desc }}</text>
      <button class="bg-#5DBE8A w-100% text-#fff" @click="handleClick">选择</button>
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
            <up-image :src="item.icon" width="168rpx" height="168rpx" radius="20rpx" />
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
              <text>{{ item.hot }} kcal</text>
            </view>
          </view>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup lang="ts">
import icon1 from '@/static/image/cook/food-pic1.svg'
import type { CookModule } from '@/types/component'
import { computed, ref } from 'vue'
interface Props {
  item: CookModule.FoodCardItem
}

const alertDialog = ref()
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
      hot: 0,
    } as CookModule.FoodCardItem),
})

const hotCounter = computed(() => {
  return props.item.hot! * props.item.num!
})

const dialogConfirm = () => {
  const item = props.item
  emit('click', item)
}

const dialogClose = () => {
  alertDialog.value?.close()
}

const handleClick = () => {
  alertDialog.value?.open()
}
</script>

<style scoped></style>
