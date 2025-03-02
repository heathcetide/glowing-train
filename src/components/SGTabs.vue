<template>
  <view class="sg-tabs">
    <view
      class="tab-bar h-60rpx flex items-center px-30rpx py-10rpx"
      :style="{
        width: width,
        fontSize: fontSize,
        borderBottom: showBorder ? '1rpx solid #e5e5e5' : 'none',
        fontWeight: fontWeight,
        padding: padding,
      }"
    >
      <slot name="prevIcon"></slot>
      <view v-for="(tab, index) in tabs" :key="index" class="tab-item" @click="handleTabClick(index, tab)">
        <view class="text mx-5rpx" :class="{ active: activeTab === index }" :style="{ padding: padding }">
          <slot name="tabs" :tab="tab" :index="index" :isActive="activeTab === index ? true : false"></slot>
        </view>
      </view>
      <slot name="nextIcon"></slot>
    </view>
    <view class="tab-content">
      <slot :name="`tab-${activeTab}`"></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
import useChangeStore from '@/stores/modules/change'
const changeStore = useChangeStore()

const props = withDefaults(
  defineProps<{
    tabs: string[]
    width: string
    showBorder: boolean
    fontSize: string
    padding?: string
    showBorderButtom?: boolean
    fontWeight?: 'bold' | 'normal'
  }>(),
  {
    width: '100%',
    showBorder: true,
    fontSize: '28rpx',
    showBorderButtom: true,
    // fontWeight: 'bold',
  },
)

const activeTab = changeStore.getActiveIndex()
const tabTab = changeStore.tabType
const handleTabClick = (index: number, tab: string) => {
  const tabs = ['食谱榜单', '食谱榜单', '工具榜单']

  if (tabs.includes(tab)) {
    console.log('触发了', tab)

    changeStore.changeTabType('sub')
    setTimeout(() => {
      changeStore.changeTab(index)
    }, 1)
    return
  }
  changeStore.changeTabType('main')
  changeStore.changeTab(index)
}
</script>

<style scoped lang="scss">
.sg-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tab-bar {
  display: flex;

  top: 10rpx;
  align-self: center;
  justify-content: space-between;
  color: $font-color-gray;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 10rpx 0;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    padding: 10rpx 24rpx;
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
