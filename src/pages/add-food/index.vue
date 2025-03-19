<template>
  <AddFoodSearch />

  <view class="flex flex-col min-h-screen bg-white p-4">
    <view class="search my-15rpx flex justify-between px-28rpx rounded-full bg-#F3F4F6 items-center h-91rpx">
      <uni-icons color="#9CA3AF" type="search" size="24" />
      <input type="text" placeholder="请输入搜索内容" @click="searchConfirm" />
      <uni-icons type="camera-filled" color="#7E7E7F" size="24" @click="searchConfirm" />
    </view>
    <!-- 顶部食材分类 -->
    <view class="flex justify-around items-center mb-4">
      <view v-for="(category, index) in categories" :key="index" class="flex flex-col items-center">
        <image class="size-98rpx" @click="activeIndex = index" width="" :src="category.icon" mode="aspectFill" />
        <text class="text-sm text-gray-700 mt-2" :class="{ 'text-#5DBE8A': activeIndex === index }">{{
          category.name
        }}</text>
      </view>
    </view>

    <!-- 常用食材 -->
    <view class="mb-4">
      <text class="text-lg font-bold">常用食材</text>
      <view class="grid grid-cols-2 gap-4 mt-2">
        <view v-for="(ingredient, index) in commonIngredients" :key="index" class="bg- p-4 rounded-lg shadow-sm">
          <up-image width="291rpx" height="291rpx" :src="ingredient.icon" shape="circle" mode="aspectFill" />
          <up-loading-page v-if="!ingredient" />
          <view class="flex justify-between fb text-0 mt-10rpx">
            <view class="ellipsis1 w-200rpx">{{ ingredient.name }}</view>
            <view
              @click="add(ingredient)"
              class="size-40rpx flex items-center justify-center bg-green-500 text-white rounded-full"
              >+</view
            >
          </view>
        </view>
      </view>
    </view>

    <!-- 已添加食材 -->
    <view>
      <view class="flex justify-between">
        <text class="text-lg font-bold">预添加 ({{ addedIngredients.length }})</text>
        <!-- <view>
          <button class="bg-#5DBE8A text-#fff" size="mini" @click="handleAddAll">确认添加</button>
        </view> -->
      </view>
      <view class="mt-2">
        <view v-if="addedIngredients.length === 0">
          <text class="text-1 center">请添加菜品</text>
        </view>
        <view v-else>
          <view
            v-for="(item, index) in addedIngredients"
            :key="index"
            class="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm mb-2"
          >
            <up-image class="mr-3" width="112rpx" height="112rpx" :src="item.icon" mode="aspectFill" />
            <view class="flex-1 flex-col-nocenter">
              <text class="text-sm font-bold">{{ item.name }}</text>
              <text class="text-xs text-gray-500">{{ item.weight }} · {{ item.storage }}</text>
            </view>
            <view class="size-30rpx text-#9CA3AF" @click="onCancle(item.name)">×</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import vegetable from '@/static/icons/vegetable.svg'
import fruit from '@/static/icons/fruit.svg'
import meat from '@/static/icons/meat.svg'
import seafood from '@/static/icons/seafood.svg'
import condiment from '@/static/icons/condiment.svg'
import AddFoodSearch from './components/AddFoodSearch.vue'
import { ref, watchEffect } from 'vue'
import Utils from '@/utils'
import { getRandomFoodAPI } from '@/services/food-menus/foodMenusBaseModule'
import { onLoad } from '@dcloudio/uni-app'
import { addUserStackAPI, type UserInventory } from '@/services/Inventory/InventoryBaseModule'
import dayjs from 'dayjs'

const activeIndex = ref(0)
const categories = ref([
  { icon: vegetable, name: '营养餐单' },
  { icon: fruit, name: '快速简单' },
  { icon: meat, name: '家庭必备' },
  { icon: seafood, name: '素食选择' },
  { icon: condiment, name: '烘焙甜点' },
])

const commonIngredients = ref([
  { icon: condiment, name: '西红柿', weight: '500克', storage: '冷藏' },
  { icon: condiment, name: '胡萝卜', weight: '500克', storage: '冷藏' },
  { icon: condiment, name: '青椒', weight: '500克', storage: '冷藏' },
  { icon: condiment, name: '土豆', weight: '500克', storage: '冷藏' },
])
const addedIngredients = ref<{ icon: string; name: string; weight: string; storage: string }[]>([])

watchEffect(() => {
  if (activeIndex.value > -1) {
    getRecomment()
  }
})

const searchConfirm = () => {
  Utils.navigateTo('/pages/search/search?type=food')
}

const getRecomment = async () => {
  const res = await getRandomFoodAPI()
  console.log(res)
  commonIngredients.value = commonIngredients.value.map((item, index) => {
    return {
      ...item,
      ...res.data[index],
      icon: res.data[index].largeImageUrl,
      name: res.data[index].name,
    }
  })
  console.log('mapL', commonIngredients.value)
}

onLoad(() => {
  getRecomment()
})

const onCancle = (name: string) => {
  Utils.showModal({
    title: '删除',
    content: '确定要删除这个菜品吗?',
    cancel: () => {},
    confirm: () => {
      addedIngredients.value = addedIngredients.value.filter((item: any) => item.name !== name)
      Utils.showToast('删除成功')
      console.log('删除', name)
    },
  })
}
const add = (ingredient: any) => {
  Utils.showModal({
    title: '添加菜品',
    content: '确定要添加' + ingredient.name + '吗?',
    cancel: () => {},
    confirm: async () => {
      try {
        console.log(ingredient.id)

        const data: Partial<UserInventory> = {
          alertThreshold: 1,
          customFoodName: ingredient.name,
          foodId: ingredient.id,
          quantity: 1,
          notes: ingredient?.suggest,
          source: '超市',
          unit: 'kg',
          usageCategory: categories.value[activeIndex.value].name,
          lastUsedDate: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          storageLocation: '冷藏',
          expirationDate: dayjs(new Date())
            .add(Math.floor(Math.random() * 60), 'day')
            .format('YYYY-MM-DD HH:mm:ss'),
        }

        const res = await addUserStackAPI(data as UserInventory)
        if (res.code === 200) {
          addedIngredients.value.push(ingredient)
          Utils.showToast('添加成功')
        } else {
          Utils.showToast('添加失败: ' + res.message.split('\n')[0])
        }
      } catch (error) {
        Utils.showToast('添加失败: ')
      }
    },
  })
}
</script>
