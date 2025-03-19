<template>
  <view :style="{ paddingTop: safeAreaInsets.top + 'px' }">
    <CookNavBar title="烹饪准备" />
    <view class="px-28rpx h-1200rpx">
      <up-line-progress percentage="30" activeColor="#5DBE8A" :height="5" :show-text="false"></up-line-progress>
      <scroll-view scroll-y>
        <!-- 食材准备 -->
        <view>
          <view class="text-31.5rpx font-600 mb-28rpx">食材准备</view>
          <view class="content flex flex-col gap-20rpx" v-for="(item, index) in foodList" :key="item.title">
            <view class="flex jsustify-between p-20rpx bg-white">
              <view class="desc flex flex-col flex-1 pl-15rpx">
                <text class="title">{{ item.title }}</text>
                <text class="">{{ item.num }}</text>
              </view>
              <view class="">
                <up-checkbox-group>
                  <checkbox
                    active-color="#5DBE8A"
                    :icon-size="5"
                    icon-color="#5DBE8A"
                    :checked="item.isChecked"
                    @click="handleChecked(index)"
                  >
                  </checkbox>
                </up-checkbox-group>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>

      <view class="p-15rpx flex w-100% mt-20rpx jsustify-between items-center bg-white shadow1">
        <view class="title flex-1 gap10rpx center gap-10rpx">
          <image class="size-28rpx" :src="IconTime" mode="scaleToFill" />
          <text>预计时间: 30分钟</text>
        </view>
        <view class="scores flex-1 justify-end flex">
          <uni-rate v-model="rateValue" disabled-color="#FFCA3E" disabled />
        </view>
      </view>
      <view class="w-100% mt-42rpx">
        <button class="bg-#5DBE8A text-#FFFFFF w-100%" @click="handleStartCook">开始烹饪</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CookNavBar from '../common/CookNavBar.vue'
import PrepareCard from './components/PrepareCard.vue'
import IconMet from '@/static/image/cook/met.svg'
import iconTool from '@/static/image/cook/tool.svg'
import IconTime from '@/static/image/cook/icon-time2.svg'
import Utils from '@/utils'
import useCookStore from '@/stores/modules/cook'

const cookStore = useCookStore()
const chosedDiet = ref(cookStore.chosedDietList[0])
const rateValue = ref(3)
const { safeAreaInsets } = uni.getWindowInfo()

// 定义一个 foodList 存储食物列表
const foodList = ref<{ title: string; num: string; isChecked: boolean }[]>([])

const handleStartCook = () => {
  console.log(foodList.value)
  if (foodList.value.some((a) => a.isChecked === false)) {
    Utils.showToast('请准备食材')
    return
  }
  Utils.navigateTo('/pagesCook/process/index')
}
const handleChecked = (index: number) => {
  foodList.value[index].isChecked = !foodList.value[index].isChecked
}

onMounted(() => {
  const ingredients = chosedDiet.value.ingredients
  // 如果 ingredients 是字符串，则先解析成对象
  let ingredientsObj: Record<string, any> = {}
  if (typeof ingredients === 'string') {
    try {
      ingredientsObj = JSON.parse(ingredients)
    } catch (error) {
      console.error('解析 ingredients 失败：', error)
    }
  } else {
    ingredientsObj = ingredients
  }

  // 将 ingredients 对象转换为只包含 title 与 kcal 的数组
  foodList.value = Object.entries(ingredientsObj).map(([key, value]) => ({
    title: key, // 食材名称
    num: value, // 此处放置对应的数值（本例中是“适量”）
    isChecked: false,
  }))
})
</script>

<style scoped></style>
