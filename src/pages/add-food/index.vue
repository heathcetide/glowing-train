<template>
  <view>
    <AddFoodSearch />
    <view class="px-28rpx">
      <CustomSearch />
      <FoodCategory />
      <InfoPanel />
      <SaveLocation />
      <AddedFoodInfo />
    </view>

    <view class="pos-fixed pos-bottom-30rpx w-100% bg-#fff">
      <uni-row class="px-28rpx" :gutter="20">
        <uni-col :span="12">
          <button class="bg-#F3F4F6 text-#4B5563 center">取消</button>
        </uni-col>
        <uni-col :span="12">
          <button class="bg-#5DBE8A text-#fff center">保存</button>
        </uni-col>
      </uni-row>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomSearch from '../index/components/diet/components/common/CustomSearch.vue'
import AddFoodSearch from './components/AddFoodSearch.vue'
import FoodCategory from './components/FoodCategory.vue'
import InfoPanel from './components/InfoPanel.vue'
import SaveLocation from './components/SaveLocation.vue'
import AddedFoodInfo from './components/AddedFoodInfo.vue'
</script>

<style scoped></style>
