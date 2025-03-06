<template>
  <!-- 一周趋势模块 -->
  <view class="bg-white rounded-lg shadow1 p-28rpx">
    <text class="block text-gray-800 mb-56rpx">一周趋势</text>
    <view class="grid grid-cols-2 gap-4 p-28rpx">
      <view class="space-y-4">
        <view class="">
          <view class="flex mb-2rpx items-baseline">
            <text class="text-gray-800 text-48rpx font-medium"> 1572 </text>
            <text class="text-24rpx text-#617D79">kcal</text>
          </view>
          <view class="juslr text-24rpx mb-8rpx items-center">
            <text class="text-gray-600">早餐</text>
            <text class="text-#617D79">14%</text>
          </view>
          <up-line-progress
            :show-text="false"
            active-color="#5DBE8A"
            inactive-color="#E5E5E5"
            height="10rpx"
            percentage="14"
          />
        </view>
        <view class="">
          <view class="flex mb-2rpx items-baseline">
            <text class="text-gray-800 text-48rpx font-medium">2091</text>
            <text class="text-24rpx text-#617D79">kcal</text>
          </view>
          <view class="juslr text-24rpx mb-8rpx items-center">
            <text class="text-gray-600">晚餐</text>
            <text class="text-#617D79">20%</text>
          </view>
          <up-line-progress
            :show-text="false"
            active-color="#39ACFF"
            inactive-color="#D7EEFF"
            height="10rpx"
            percentage="20"
          />
        </view>
      </view>
      <view class="space-y-4">
        <view class="">
          <view class="flex mb-2rpx items-baseline">
            <text class="text-gray-800 text-48rpx font-medium"> 4987 </text>
            <text class="text-24rpx text-#617D79">kcal</text>
          </view>
          <view class="juslr text-24rpx mb-8rpx items-center">
            <text class="text-gray-600">午餐</text>
            <text class="text-#617D79">48%</text>
          </view>
          <up-line-progress
            :show-text="false"
            active-color="#5DBE8A"
            inactive-color="#E5E5E5"
            height="10rpx"
            percentage="14"
          />
        </view>
        <view class="">
          <view class="flex mb-2rpx items-baseline">
            <text class="text-gray-800 text-48rpx font-medium">2091</text>
            <text class="text-24rpx text-#617D79">kcal</text>
          </view>
          <view class="juslr text-24rpx mb-8rpx items-center">
            <text class="text-gray-600">晚餐</text>
            <text class="text-#617D79">20%</text>
          </view>
          <up-line-progress
            :show-text="false"
            active-color="#39ACFF"
            inactive-color="#D7EEFF"
            height="10rpx"
            percentage="20"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
