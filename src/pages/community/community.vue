<template>
  <view class="wrap">
    <SGTabs :tabs>
      <template #prevIcon><uni-icons type="list" color="#4B5563" size="24" /> </template>
      <template #nextIcon> <uni-icons type="search" color="#4B5563" size="24" @click="goToSearch" /></template>
      <template #tab-0><Savor /> </template>
      <template #tab-1> <RankingList /> </template>
      <template #tab-2><Activity /> </template>
      <template #tab-3><Answer /> </template>
      <template #tabs="{ tab }">
        <view>{{ tab }}</view>
      </template>
    </SGTabs>
  </view>
</template>

<script setup lang="ts">
import Savor from './components/savor/index.vue'
import Answer from './components/answer/index.vue'
import RankingList from './components/ranking-list/index.vue'
import Activity from './components/activity/index.vue'
import { ref } from 'vue'

const tabs = ref<string[]>(['寻味', '榜单', '活动', '问答'])

const goToSearch = () => {
  uni.navigateTo({
    url: '/pages/search/search',
  })
}

// #ifdef MP-WEIXIN
const observer: UniApp.IntersectionObserver = uni.createIntersectionObserver(this, {
  thresholds: [0.5],
  observeAll: true,
})

observer.observe('.waterfall', (res) => {
  console.log('目标元素进入视口', res)
})
// #endif
</script>
