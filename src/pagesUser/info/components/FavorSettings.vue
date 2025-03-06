<template>
  <!-- 偏好设置 -->
  <view class="preference-section flex-col-nocenter gap14rpx mt-14rpx">
    <view class="card1 bg-white p-28rpx">
      <view class="section-title juslr mb-24rpx">
        <text class="font-medium">饮食偏好</text>
        <uni-icons type="plus" color="#9CB7C0" size="24" />
      </view>
      <view class="tag-group flex flex-wrap gap-10rpx">
        <view class="tag bg-#E8F5E9 text-#4CAF50 tags">低脂</view>
        <view class="tag bg-#E8F5E9 text-#4CAF50 tags">无糖</view>
        <view class="tag bg-#E8F5E9 text-#4CAF50 tags">少盐</view>
      </view>
    </view>
    <view class="card2 bg-white p-28rpx">
      <view class="section-title juslr">
        <text class="font-medium">过敏源</text>
        <uni-icons type="plus" color="#9CB7C0" size="24" />
      </view>
      <view class="tag-group flex flex-wrap gap-10rpx">
        <view class="tag bg-#FFEBEE text-#F44336 tags">花生</view>
        <view class="tag bg-#FFEBEE text-#F44336 tags">海鲜</view>
      </view>
    </view>
    <view class="card3 bg-white p-28rpx">
      <view class="section-title juslr">
        <text class="font-medium">做饭习惯</text>
        <uni-icons type="plus" color="#9CB7C0" size="24" />
      </view>
      <view class="tag-group flex flex-wrap gap-10rpx">
        <view class="tag bg-#E3F2FD text-#1890FF tags">周末做饭</view>
        <view class="tag bg-#E3F2FD text-#1890FF tags">偏好中餐</view>
        <view class="tag bg-#E3F2FD text-#1890FF tags">喜欢尝试新菜谱</view>
      </view>
    </view>
    <view class="card4 bg-white p-28rpx">
      <view class="section-title juslr">
        <text class="font-medium">运动习惯</text>
        <uni-icons type="plus" color="#9CB7C0" size="24" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
