<template>
  <view class="pos-fixed center gap-10rpx h-120rpx pos-bottom-0 bg-#fff input w-100%">
    <view class="w-70%">
      <uni-easyinput
        :maxlength="100"
        type="text"
        clearable
        v-model="input"
        @confirm="handleConfirm"
        placeholder="请输入评论"
        class="rounded-full"
        confirm-type="done"
      />
    </view>
    <view class="flex gap-10rpx">
      <view @click="handleLike">
        <uni-icons type="heart-filled" color="red" size="20" v-if="isLike" />
        <uni-icons type="heart-filled" color="#6B7280" size="20" v-else />
        <text>{{ likenum }}</text>
      </view>
      <view @click="handleSave">
        <uni-icons type="star-filled" color="yellow" size="20" v-show="isSave" />
        <uni-icons type="star-filled" color="#6B7280 " size="20" v-show="!isSave" />
        <text>{{ savenum }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Utils from '@/utils'
import { ref } from 'vue'

interface Props {
  likeNum: number
  saveNum: number
}
const props = withDefaults(defineProps<Props>(), {
  likeNum: 20,
  saveNum: 31,
})
const input = ref()
const likenum = ref(props.likeNum)
const savenum = ref(props.saveNum)
const comment = defineModel<string>('value', { type: String, default: '' })
const isLike = defineModel<boolean>('like', { type: Boolean, default: false })
const isSave = defineModel<boolean>('save', { type: Boolean, default: false })
const handleConfirm = (e: UniHelper.UniEasyinputValue) => {
  comment.value = e as string
  input.value = ''
  console.log('ee', e)
  // comment.value = ''
}

const handleLike = () => {
  if (isLike.value) {
    Utils.showToast('取消点赞')
    isLike.value = false
    likenum.value--
    return
  }
  isLike.value = true
  likenum.value++
  Utils.showToast('点赞成功')
}
const handleSave = () => {
  if (isSave.value) {
    Utils.showToast('取消收藏成功')
    isSave.value = false
    savenum.value--
    return
  }
  Utils.showToast('收藏成功')
  isSave.value = true
  savenum.value++
  console.log('handleSave')
}
</script>

<style scoped></style>
