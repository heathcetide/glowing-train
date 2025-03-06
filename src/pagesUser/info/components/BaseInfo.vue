<template>
  <!-- 基本信息 -->
  <view class="info-section mt-48rpx flex-col-nocenter gap14rpx">
    <view class="card1 bg-white p-28rpx">
      <view class="info-item flex justify-between items-center">
        <text>账号等级</text>
        <view class="flex items-center">
          <image src="/static/icons/level.png" class="w-28rpx h-28rpx mr-8rpx" />
          <text class="text-#1890FF">LV 6</text>
          <uni-icons type="right" color="#9CA3AF" size="24" />
        </view>
      </view>

      <view class="info-item flex justify-between items-center">
        <text>性别</text>
        <view class="flex items-center">
          <view class="gender-icon bg-#1890FF rounded-full p-8rpx mr-8rpx">
            <image src="/static/icons/male.png" class="w-24rpx h-24rpx" />
          </view>
          <text>男</text>
          <uni-icons type="right" color="#9CA3AF" size="24" />
        </view>
      </view>
    </view>

    <view class="card2 bg-white p-28rpx">
      <view class="info-item flex justify-between items-center">
        <text>生日</text>
        <view class="flex items-center">
          <text>1995年12月5日</text>
          <uni-icons type="right" color="#9CA3AF" size="24" />
        </view>
      </view>
      <view class="info-item flex justify-between items-center">
        <text>身高</text>
        <view class="flex items-center">
          <text>170cm</text>
          <uni-icons type="right" color="#9CA3AF" size="24" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
\
