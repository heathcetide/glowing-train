<template>
  <view class="p-32rpx flex flex-col gap-32rpx">
    <!-- 顶部状态栏 -->
    <view class="flex justify-between">
      <view class="flex-1 bg-#fff rounded-16rpx p-24rpx mr-16rpx col">
        <uni-icons type="checkbox-filled" color="#22c55e" size="24" />
        <view class="col">
          <text class="text-28rpx">已连接</text>
          <text class="text-#22c55e ml-8rpx">5</text>
        </view>
      </view>
      <view class="flex-1 bg-#fff rounded-16rpx p-24rpx mr-16rpx col">
        <uni-icons type="info-filled" color="#eab308" size="24" />
        <view class="col">
          <text class="text-28rpx">待连接</text>
          <text class="text-#eab308 ml-8rpx">2</text>
        </view>
      </view>
      <view class="flex-1 bg-#fff rounded-16rpx p-24rpx col">
        <uni-icons type="reload" color="#9ca3af" size="24" />
        <view class="col">
          <text class="text-28rpx">离线</text>
          <text class="text-#9ca3af ml-8rpx">1</text>
        </view>
      </view>
    </view>

    <!-- 设备列表 -->
    <view class="flex flex-col gap-24rpx">
      <!-- 智能体重秤Pro -->
      <view class="bg-#fff rounded-16rpx p-24rpx">
        <view class="flex items-center">
          <uni-icons type="compose" size="40" />
          <view class="ml-16rpx flex-1 flex-col-nocenter">
            <text class="text-32rpx font-500">智能体重秤Pro</text>
            <text class="text-24rpx text-#6b7280">体重秤</text>
          </view>
        </view>
        <view class="mt-24rpx flex items-center">
          <view class="col flex-1">
            <text class="text-24rpx text-#6b7280">最新体重</text>
            <text class="text-40rpx font-600">65.8kg</text>
          </view>
          <view class="col flex-1">
            <text class="text-40rpx font-600">22%</text>
            <text class="text-24rpx text-#6b7280">体脂率</text>
          </view>
        </view>
        <view class="mt-24rpx flex gap-16rpx">
          <button class="flex-1 bg-#dcfce7 text-#22c55e h-80rpx flex items-center justify-center">
            <uni-icons type="plus" size="20" color="#22c55e" />
            <text class="ml-8rpx">查看数据</text>
          </button>
          <button class="flex-1 bg-#f3f4f6 text-#374151 h-80rpx flex items-center justify-center">
            <uni-icons type="gear" size="20" />
            <text class="ml-8rpx">设备设置</text>
          </button>
        </view>
      </view>

      <!-- 智能手环X1 -->
      <view class="bg-#fff rounded-16rpx p-24rpx">
        <view class="flex items-center">
          <uni-icons type="gear" size="40" />
          <view class="ml-16rpx flex-1">
            <text class="text-32rpx font-500">智能手环X1</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">手环</text>
          </view>
        </view>
        <view class="mt-24rpx flex items-center">
          <view class="flex-1">
            <text class="text-40rpx font-600">8,562</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">今日步数</text>
          </view>
          <view class="flex-1">
            <text class="text-40rpx font-600">75</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">心率/分</text>
          </view>
        </view>
        <view class="mt-24rpx flex gap-16rpx">
          <button class="flex-1 bg-#dcfce7 text-#22c55e h-80rpx flex items-center justify-center">
            <uni-icons type="auth" size="20" color="#22c55e" />
            <text class="ml-8rpx">查看数据</text>
          </button>
          <button class="flex-1 bg-#f3f4f6 text-#374151 h-80rpx flex items-center justify-center">
            <uni-icons type="gear" size="20" />
            <text class="ml-8rpx">设备设置</text>
          </button>
        </view>
      </view>

      <!-- 智能水杯 -->
      <view class="bg-#fff rounded-16rpx p-24rpx">
        <view class="flex items-center">
          <uni-icons type="wallet" size="40" />
          <view class="ml-16rpx flex-1">
            <text class="text-32rpx font-500">智能水杯</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">水杯</text>
          </view>
          <uni-icons type="plusempty" color="#22c55e" size="24" />
        </view>
        <view class="mt-24rpx flex items-center">
          <view class="flex-1">
            <text class="text-40rpx font-600">1200ml</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">今日饮水量</text>
          </view>
          <view class="flex-1">
            <text class="text-40rpx font-600">60%</text>
            <text class="text-24rpx text-#6b7280 ml-16rpx">完成度</text>
          </view>
        </view>
        <view class="mt-24rpx flex gap-16rpx">
          <button class="flex-1 bg-#dcfce7 text-#22c55e h-80rpx flex items-center justify-center">
            <uni-icons type="plus" size="20" color="#22c55e" />
            <text class="ml-8rpx">查看数据</text>
          </button>
          <button class="flex-1 bg-#f3f4f6 text-#374151 h-80rpx flex items-center justify-center">
            <uni-icons type="gear" size="20" />
            <text class="ml-8rpx">设备设置</text>
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
