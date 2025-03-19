<template>
  <view>
    <up-popup round="20rpx" :show="show" mode="bottom" @close="close" @open="open">
      <view class="h-40vh p-30rpx">
        <view class="flex gap-30rpx">
          <up-image :src="item.foodImageUrl" width="200rpx" height="200rpx" />

          <view class="info flex flex-col gap-10rpx">
            <view class="title text-32rpx font-500">{{ item.customFoodName || item.foodName }}</view>
            <view class="stack text-28rpx text-#6B7280">
              <text>库存: </text>
              <text>{{ item.quantity }}</text>
              <text>{{ item.unit }}</text>
            </view>
            <view class="number text-28rpx text-#6B7280">
              <text>规格: </text>
              <text>{{ item.unit }}/份</text>
            </view>
            <view class="date text-28rpx text-#6B7280">
              <text>上次盘点: </text>
              <text>{{ item.lastUsedDate }}</text>
            </view>
            <view class="expire text-28rpx text-#F87171">
              <text>到期时间: </text>
              <text>{{ item.expirationDate }}</text>
            </view>
          </view>
        </view>

        <view class="center gap-10rpx">
          <view class="text-28rpx text-#6B7280">
            <text>数量: </text>
          </view>
          <up-number-box v-model="num" :decimal-length="1" :step="0.5" :min="0">
            <template #minus>
              <view class="minus">
                <uni-icons type="minus" color="" size="24" />
              </view>
            </template>
            <template #input>
              <text style="width: 50px; text-align: center" class="input">{{ num }}</text>
            </template>
            <template #plus>
              <view class="plus">
                <uni-icons type="plus" size="24" />
              </view>
            </template>
          </up-number-box>
        </view>
        <button v-if="type === 'add'" class="mt-20rpx bg-#5DBE8A text-white" @click="handleConfirm">确认</button>
        <button v-if="type === 'remove'" class="mt-20rpx bg-amber text-white" @click="handleOut">出库</button>
      </view>
    </up-popup>
  </view>
</template>

<script setup lang="ts">
import type { HomeIndex } from '@/types/component'
import { onMounted, ref } from 'vue'

interface Props {
  show: boolean
  item: HomeIndex.Stack.StackItem
  type: 'add' | 'remove'
}
const props = defineProps<Props>()

const num = ref(0)

const emit = defineEmits(['close', 'open', 'comform', 'cancle'])

const handleConfirm = () => {
  emit('comform', props.item, num.value)
}
const handleOut = () => {
  emit('cancle', props.item, num.value)
}
const open = () => {
  emit('open')
}
const close = () => {
  emit('close')
}

onMounted(() => {
  num.value = props.type === 'add' ? 1 : props.item.quantity
})
</script>

<style lang="scss" scoped></style>
