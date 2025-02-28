<template>
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
            <CalcNumber v-model="value" />
          </view>
          <view class="flex">
            <text>热量:</text>
            <text>{{ hotCounter }}</text>
          </view>
        </view>
      </view>
    </uni-popup-dialog>
  </uni-popup>
</template>

<script setup lang="ts">
import CalcNumber from '@/pagesCook/calc-food/components/CalcNumber.vue'
import type { CookModule } from '@/types/component'
import { computed, ref } from 'vue'

const alertDialog = ref()
const value = defineModel('value', { type: Number, default: 1 })
interface Props {
  /**菜谱信息 */
  item: CookModule.FoodCardItem
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'confirm'): void
}>()

const hotCounter = computed(() => {
  return props.item.hot * (value.value as number)
})
const dialogConfirm = () => {
  emits('confirm')
  alertDialog.value.close()
}

const dialogClose = () => {
  alertDialog.value.close()
}

defineExpose({
  open() {
    alertDialog.value.open()
  },
  close() {
    alertDialog.value.close()
  },
  hotCounter,
  value,
})
</script>

<style scoped></style>
