<template>
  <view class="containt mt40rpx pos-fixed pos-bottom-0 w-100% px-28rpx mb-30rpx">
    <view class="flex-row flex justify-center w-100% text-21rpx text-0 mb-30rpx">
      <text>你可以随时在设置中修改目标</text>
    </view>
    <button class="bg-#5DBE8A text-#fff w-100%" @click="onNext">
      {{ title }} <uni-icons type="arrow-right" color="#fff" size="24" />
    </button>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'

interface Props {
  /** 下一页 跳转路径 */
  url: string
  title: string
}

const emit = defineEmits(['onNext'])
const props = withDefaults(defineProps<Props>(), {
  url: '',
  title: '下一步',
})

const onNext = () => {
  emit('onNext')

  // Utils.navigateTo(`/pagesPlanLeader/${props.url}/index`)
}
</script>

<style scoped></style>
