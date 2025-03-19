<template>
  <!--  <view class="item py-22rpx shadow1 px-24rpx flex justify-between items-center bg-white">
    <view class="desc flex flex-col flex-1 pl-15rpx">
      <text class="title">{{ title }}</text>
      <text class="">{{ num }}</text>
    </view>
    <view>
      <up-checkbox-group>
        <checkbox
          active-color="#5DBE8A"
          :icon-size="5"
          icon-color="#5DBE8A"
          :checked="isChecked"
          @change="handleChecked"
        >
          <template #icon>
            <uni-icons v-if="isChecked" type="checkmarkempty" color="#f00" size="10" />
          </template>
        </checkbox>
      </up-checkbox-group>
    </view>
  </view> -->
  <view class=""> ssad </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// 定义一个 foodList 存储食物列表

const isChecked = ref(false)
const handleChecked = () => {
  isChecked.value = true
}
interface Props {
  index: string
  icon: string
  title: string
  num?: string
}
const props = defineProps<Props>()
</script>

<style scoped></style>
