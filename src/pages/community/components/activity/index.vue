<template>
  <SGIconTabs ref="tabRef" :tabs padding="0 50rpx" :show-border="false">
    <template #tab-0><Healthy Change /></template>
    <template #tab-1><SocialShare /></template>
    <template #tab-2><OnlineSpeach /></template>
    <template #tab-3><OfflineAcitivity /></template>
    <template #tab-4><OtherActivities /></template>
  </SGIconTabs>
</template>

<script setup lang="ts">
import { onMounted, ref, type Tabs } from 'vue'
import IconActivityTab1 from '@/static/image/community/icon-activity-tab1.svg'
import IconActivityTab2 from '@/static/image/community/icon-activity-tab2.svg'
import IconActivityTab3 from '@/static/image/community/icon-activity-tab3.svg'
import IconActivityTab4 from '@/static/image/community/icon-activity-tab4.svg'
import IconActivityTab5 from '@/static/image/community/icon-activity-tab5.svg'
import HealthyChange from './components/healthy-change/index.vue'
import OfflineAcitivity from './components/offline-acitivity/index.vue'
import OnlineSpeach from './components/online-speach/index.vue'
import OtherActivities from './components/other-activities/index.vue'
import SocialShare from './components/social-share/index.vue'
import type { SGTabsInstance } from '@/types/component'

const tabRef = ref<SGTabsInstance>()
const tabs: Tabs[] = [
  { icon: IconActivityTab1, title: '健康挑战' },
  { icon: IconActivityTab2, title: '社区分享' },
  { icon: IconActivityTab3, title: '线上讲座' },
  { icon: IconActivityTab4, title: '线下活动' },
  { icon: IconActivityTab5, title: '其他活动' },
]

onMounted(() => {
  console.log(tabRef.value)
})
</script>

<style scoped></style>
