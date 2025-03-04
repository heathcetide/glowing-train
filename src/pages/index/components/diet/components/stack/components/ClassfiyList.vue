<template>
  <view class="wrap h-1100rpx mt-8rpx">
    <SGCateTab class="cate-tab" :tabList="tabList" tabKeyName="title" itemKeyName="title">
      <template #tabItem="{ item }">
        <view class="">{{ item.title }}</view>
      </template>
      <template #pageItem="{ pageItem }">
        <view class="w-full flex gap-20rpx py-22rpx border-b-#E5E7EB border-b-2rpx border-b-solid">
          <up-image :src="pageItem.cover" width="168rpx" height="168rpx" @click="goToDetial"></up-image>
          <view class="info flex flex-col gap-6rpx">
            <view class="title-group text-24.5rpx gap-10rpx flex justify-between">
              <text class="name">{{ pageItem.title }}</text>
              <text class="num text-#6B7280">{{ pageItem.number + '/份' }}</text>
            </view>
            <view class="text-21 flex flex-col gap-6rpx">
              <view class="text-#EF4444">
                <text class="stack">库存:</text>
                <text>{{ pageItem.stack }}</text>
              </view>
              <view class="text-#9CA3AF">
                <text class="prevDate">上次盘点:</text>
                <text>{{ pageItem.prevDate }}</text>
              </view>
              <view class="text-#F87171">
                <text class="prevDate">到期时间:</text>
                <text>{{ pageItem.latestDate }}</text>
              </view>
            </view>

            <view class="btn-group flex justify-end h-49rpx text-35rpx pl-60rpx mt-7rpx">
              <button
                @click="handleAddStack(pageItem)"
                class="w-133rpx bg-#5DBE8A flex items-center text-24.5rpx text-#fff font-300 text-center"
              >
                入库
              </button>
              <button
                @click="handleRemoveStack(pageItem)"
                class="ml-6rpx w-133rpx bg-#F97316 flex items-center text-24.5rpx text-#fff font-300 text-center"
              >
                出库
              </button>
            </view>
          </view>
        </view>
      </template>
    </SGCateTab>

    <PoupCard :type="type" :show="isShowPopup" @open="onOpenPopup" @close="onClosePopup" :item="selectedItem" />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DietCover from '@/static/image/home/diet-cover.svg'
import Utils from '@/utils'
import PoupCard from './PoupCard.vue'
import { getUserInventoryAPI } from '@/services/Inventory/InventoryBaseModule' // 假设 API 在这里
import type { HomeIndex } from '@/types/component'

const isShowPopup = ref(false)
const selectedItem = ref<HomeIndex.Stack.StackItem>({} as HomeIndex.Stack.StackItem)
const type = ref<'add' | 'remove'>('add')
// 响应式数据
const tabList = ref<HomeIndex.Stack.TabList>([
  {
    title: '全部分类',
    children: [
      {
        title: '云南高原红小番茄',
        cover: DietCover,
        number: 500,
        stack: 2890,
        prevDate: '2024-01-20',
        latestDate: '2024-02-15',
      },
      {
        title: '云南高原红小番茄',
        cover: DietCover,
        number: 500,
        stack: 2890,
        prevDate: '2024-01-20',
        latestDate: '2024-02-15',
      },
      {
        title: '云南高原红小番茄',
        cover: DietCover,
        number: 500,
        stack: 2890,
        prevDate: '2024-01-20',
        latestDate: '2024-02-15',
      },
      {
        title: '云南高原红小番茄',
        cover: DietCover,
        number: 500,
        stack: 2890,
        prevDate: '2024-01-20',
        latestDate: '2024-02-15',
      },
      {
        title: '云南高原红小番茄',
        cover: DietCover,
        number: 500,
        stack: 2890,
        prevDate: '2024-01-20',
        latestDate: '2024-02-15',
      },
    ],
  },
  {
    title: '时令水果',
    children: [
      {
        title: '酸菜鱼',
        cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png',
        latestDate: '2024-02-15',
        number: 2200,
        prevDate: '2202-02-02',
        stack: 2890,
      },
    ],
  },
  {
    title: '新鲜蔬菜',
    children: [{ title: '水煮肉片', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png' }],
  },
  {
    title: '肉禽蛋品',
    children: [{ title: '酸菜鱼', cover: 'https://s3.bmp.ovh/imgs/2024/12/16/35bc6d28ab1c8bc7.png' }],
  },
])

const onOpenPopup = () => {
  isShowPopup.value = true
}
const onClosePopup = () => {
  isShowPopup.value = false
}

const goToDetial = () => {
  uni.navigateTo({
    url: '/pages/food/food',
  })
}
const handleAddStack = (item: HomeIndex.Stack.StackItem) => {
  selectedItem.value = item
  isShowPopup.value = true
  Utils.showToast('入库成功' + item.title)
}
const handleRemoveStack = (item: HomeIndex.Stack.StackItem) => {
  selectedItem.value = item
  type.value = 'remove'
  Utils.showToast('删除成功')
}

onMounted(async () => {
  try {
    // 获取用户库存数据
    const userInventory = await getUserInventoryAPI()

    // 根据usageCategory进行分组，生成tabList
    const categorizedData = userInventory.data.reduce((acc, item) => {
      // 检查是否已有该分类
      const category = item.usageCategory || '全部分类'
      if (!acc[category]) {
        acc[category] = {
          title: category,
          children: [],
        }
      }
      acc[category].children.push({
        title: item.customFoodName || item.foodName, // 使用自定义名称，如果没有则使用foodName
        cover: item.foodImageUrl, // 食品图片
        number: item.unit,
        stack: item.quantity,
        prevDate: item.lastUsedDate,
        latestDate: item.expirationDate,
      })
      return acc
    }, {} as Record<string, { title: string; children: any[] }>)

    // 转换成数组并赋值给tabList
    tabList.value = Object.values(categorizedData)
  } catch (error) {
    console.error('获取库存数据失败:', error)
  }
})
</script>

<style scoped lang="scss">
.cate-tab {
  height: calc(100vh - 150px);
  /* #ifdef H5 */
  height: calc(100vh - 150px - var(--window-top));
  /* #endif */
}
</style>
