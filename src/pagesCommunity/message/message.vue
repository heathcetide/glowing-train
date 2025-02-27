<template>
  <van-tabs
    :active="active"
    @change="onChange"
    animated
    type="card"
    title-inactive-color="#4B5563"
    title-active-color="#16A34A"
    color="#F0FDF4  "
    tab-active-class="active"
  >
    <van-tab title="全部通知" :style="{ padding: '10rpx 28rpx' }">
      <Warning />
      <MessageList />
    </van-tab>
    <van-tab title="计划提醒">评分表</van-tab>
    <van-tab title="健康建议">附近</van-tab>
    <van-tab title="库存提醒">健康问答</van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import Warning from './components/Warning.vue'
import MessageList from './components/MessageList.vue'
import { ref } from 'vue'

const active = ref(0)

const onChange = (val: any) => {
  active.value = val.detail.index
}
</script>
<style lang="scss" scoped></style>
