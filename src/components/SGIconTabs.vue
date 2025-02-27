<template>
  <view class="sg-tabs">
    <view
      class="tab-bar"
      :style="{
        width: width,
        fontSize: fontSize,
        borderBottom: showBorder ? '1rpx solid #e5e5e5' : 'none',
        fontWeight: fontWeight,
        padding: padding,
      }"
    >
      <view scroll-x v-for="(tab, index) in tabs" :key="index" class="tab-item" @click="handleTabClick(index)">
        <view class="text" :class="{ active: activeTab === index }">
          <up-image lazy-load :src="tab.icon" width="112rpx" height="112rpx" />
          <text class="title mt-12rpx text-21rpx">{{ tab.title }}</text>
        </view>
      </view>
    </view>
    <view class="tab-content">
      <slot :name="`tab-${activeTab}`"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, type Tabs } from 'vue'

defineOptions({
  name: 'SGIconTabs',
})

withDefaults(
  defineProps<{
    tabs: Tabs[]
    width: string
    showBorder: boolean
    fontSize: string
    padding?: string
    fontWeight?: 'bold' | 'normal'
  }>(),
  {
    width: '100%',
    showBorder: true,
    fontSize: '28rpx',
  },
)

const activeTab = ref(0)

const handleTabClick = (index: number) => {
  console.log('点击了标签', index)
  activeTab.value = index
}
</script>

<style scoped lang="scss">
.sg-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tab-bar {
  width: 750rpx;
  display: flex;
  top: 10rpx;
  align-self: center;
  justify-content: space-between;
  color: $font-color-gray;
}

.tab-item {
  // flex: 1;
  text-align: center;
  padding: 10rpx 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    transition: 0.3s;
    border-bottom: 2rpx solid transparent;
    &.active {
      border-bottom: 2rpx solid $uni-color-success;
      color: $uni-color-success;
    }
  }
}

.tab-content {
  padding: 10rpx 0;
}
</style>
