<template>
  <!-- 搜索框 -->
  <view class="search flex justify-between px-28rpx rounded-full bg-#F3F4F6 items-center h-91rpx">
    <uni-icons color="#9CA3AF" type="search" size="24" />
    <input type="text" placeholder="请输入搜索内容" v-model="search" @input="onSearchInput" />
    <uni-icons type="camera-filled" color="#7E7E7F" size="24" />
  </view>

  <view v-if="!filteredTabList" class="col h-80vh">
    <up-loading-icon
      :size="30"
      color="#5DBE8A"
      text="数据加载中..."
      text-size="40rpx"
      text-color="#5DBE8A"
    ></up-loading-icon>
  </view>
  <view v-else class="wrap h-1100rpx mt-8rpx">
    <SGCateTab class="cate-tab" :tabList="filteredTabList" tabKeyName="title" itemKeyName="title">
      <template #tabItem="{ item }">
        <view class="">{{ item.title }}</view>
      </template>
      <template #pageItem="{ pageItem }">
        <view class="w-full flex gap-20rpx py-22rpx border-b-#E5E7EB border-b-2rpx border-b-solid">
          <up-image
            :src="pageItem.foodImageUrl"
            width="168rpx"
            height="168rpx"
            @click="goToDetail(pageItem)"
          ></up-image>
          <view class="info flex flex-col gap-6rpx">
            <view class="title-group text-24.5rpx gap-10rpx flex justify-between">
              <text class="name ellipsis1 w-200rpx">{{ pageItem.customFoodName }}</text>
              <text class="num text-#6B7280">{{ pageItem.unit + '/份' }}</text>
            </view>
            <view class="text-21 flex flex-col gap-6rpx">
              <view class="text-#EF4444">
                <text class="stack">库存:</text>
                <text>{{ pageItem.quantity }}</text>
                <text>{{ pageItem.unit }}</text>
              </view>
              <view class="text-#9CA3AF">
                <text class="prevDate">上次盘点:</text>
                <text>{{ pageItem.lastUsedDate }}</text>
              </view>
              <view class="text-#F87171">
                <text class="prevDate">到期时间:</text>
                <text>{{ pageItem.expirationDate }}</text>
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

    <PoupCard
      :type="type"
      :show="isShowPopup"
      @comform="handleComfirm"
      @cancle="handleCancle"
      @open="onOpenPopup"
      @close="onClosePopup"
      :item="selectedItem"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Utils from '@/utils'
import PoupCard from './PoupCard.vue'
import {
  getUserInventoryAPI,
  updateUserInventoryAPI,
  type UserInventory,
} from '@/services/Inventory/InventoryBaseModule'
// import { getUserInfoAndLevel } from '@/services/user/userBaseModule'
import type { HomeIndex } from '@/types/component'
import useFoodStore from '@/stores/modules/food'

const foodStore = useFoodStore()
const search = ref('') // 搜索内容

const emit = defineEmits(['confirm'])

const isShowPopup = ref(false)
const selectedItem = ref<HomeIndex.Stack.StackItem>({} as HomeIndex.Stack.StackItem)
const type = ref<'add' | 'remove'>('add')
const tabList = ref<HomeIndex.Stack.TabList>([])

// filteredTabList 用于显示过滤后的列表
const filteredTabList = ref<HomeIndex.Stack.TabList>([])

const onSearchInput = () => {
  // 过滤tabList中的数据，进行搜索
  filteredTabList.value = tabList.value.filter((category) => {
    return (
      category?.title!.toLowerCase().includes(search.value.toLowerCase()) ||
      category?.children!.some((item) => item.foodName!.toLowerCase().includes(search.value.toLowerCase()))
    )
  })
}

const handleComfirm = async (item: HomeIndex.Stack.StackItem, num: number) => {
  const {
    alertThreshold,
    createdAt,
    customFoodName,
    deleted,
    expirationDate,
    foodId,
    id,
    lastUsedDate,
    notes,
    purchaseDate,
    source,
    storageLocation,
    unit,
    updatedAt,
    usageCategory,
    userId,
  } = item

  const itemData = {
    alertThreshold,
    available: true,
    createdAt,
    customFoodName,
    deleted,
    expirationDate,
    foodId,
    id,
    lastUsedDate,
    notes,
    purchaseDate,
    quantity: 0,
    source,
    storageLocation,
    unit,
    updatedAt,
    usageCategory,
    userId,
  } as UserInventory

  if (type.value === 'add') {
    itemData.quantity = Number(num) + Number(item.quantity)
  } else if (type.value === 'remove') {
    itemData.quantity = Number(item.quantity) - Number(num) > 0 ? Number(item.quantity) - Number(num) : 0
  }

  const res = await updateUserInventoryAPI(itemData)
  if (res.code === 200) {
    console.log(res)

    Utils.showToast('入库成功')
    getData()
  }
  Utils.showToast('入库成功' + item.foodName || item.customFoodName)
  isShowPopup.value = false
}
const handleCancle = (item: any, num: number) => {
  isShowPopup.value = false
  Utils.showModal({
    title: '出库',
    content: `确定要出库${item.foodName || item.customFoodName} ${num}份吗？`,
    cancel: () => {},
    confirm: () => {
      Utils.showToast('出库成功')
      handleComfirm(item, num)
    },
  })
}

// 打开 Popup
const onOpenPopup = () => {
  isShowPopup.value = true
}

// 关闭 Popup
const onClosePopup = () => {
  isShowPopup.value = false
}

// 跳转到详情页面
const goToDetail = (item: HomeIndex.Stack.StackItem) => {
  foodStore.setFoodItem(item)
  console.log(selectedItem.value.id)
  uni.navigateTo({
    url: '/pages/stack-detials/index?id=' + selectedItem.value.id,
  })
}
const getData = async () => {
  try {
    const userInventory = (await getUserInventoryAPI()) as unknown as any[]
    console.log(userInventory)

    const categorizedData = userInventory.reduce((acc, item) => {
      const category = item.usageCategory || '全部分类'
      if (!acc[category]) {
        acc[category] = {
          title: category,
          children: [],
        }
      }

      acc[category].children.push(item)
      return acc
    }, {} as Record<string, { title: string; children: any[] }>)
    tabList.value = Object.values(categorizedData)
    filteredTabList.value = tabList.value // 初始显示全部分类
  } catch (error) {
    console.error('获取库存数据失败:', error)
  }
}

// 入库操作
const handleAddStack = async (item: HomeIndex.Stack.StackItem) => {
  selectedItem.value = item
  isShowPopup.value = true
  type.value = 'add'
}

// 出库操作
const handleRemoveStack = (item: HomeIndex.Stack.StackItem) => {
  selectedItem.value = item
  type.value = 'remove'
  isShowPopup.value = true
}

// 获取库存数据并分组
onMounted(() => {
  getData()
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
