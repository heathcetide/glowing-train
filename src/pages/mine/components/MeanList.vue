<template>
  <view class="wrap">
    <view class="flex-col-nocenter">
      <view
        class="item p-28rpx juslr items-center borderb"
        v-for="item in menus"
        :key="item.id"
        @click="handleGoTo(item.to)"
      >
        <view class="flex gap10rpx text-#374151 text-28rpx">
          <image :src="item.image" class="size-35rpx" mode="scaleToFill" />
          <text>{{ item.title }}</text>
        </view>
        <uni-icons type="right" color="#9CA3AF" size="18" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid/non-secure'
import Utils from '@/utils'
interface Menu {
  id: string
  image: string
  title: string
  to: string
}

const menus = ref<Array<Menu>>([
  { id: nanoid(), image: '/static/image/center/user.png', title: '个人信息', to: '/pagesUser/info/info' },
  { id: nanoid(), image: '/static/image/center/data.svg', title: '消息中心', to: '/pagesUser/msg/msg' },
  { id: nanoid(), image: '/static/image/center/food.svg', title: '数据分析', to: '/pagesUser/data/data' },
  { id: nanoid(), image: '/static/image/center/foodpanel.svg', title: '我的收藏', to: '/pagesUser/saveStore' },
  { id: nanoid(), image: '/static/image/center/general.svg', title: '智能设备', to: '/pagesUser/smart/smart' },
  { id: nanoid(), image: '/static/image/center/activity.svg', title: '积分兑换', to: '/pagesUser/point/point' },
  { id: nanoid(), image: '/static/image/center/security.svg', title: '系统设置', to: '/pagesUser/settings/settings' },
  { id: nanoid(), image: '/static/image/center/help.svg', title: '帮助与反馈', to: '/pagesUser/help/help' },
])

const handleGoTo = (url: string) => {
  Utils.navigateTo(url)
}
</script>
<style lang="scss" scoped>
.wrap {
  padding: 0 28rpx;
  width: 100%;

  .list {
    box-shadow: $box-shadow-sm;
  }

  .list-item {
    padding: 0 28rpx;
    height: 98rpx;
  }
  .image {
    width: 24.5rpx;
    height: 28rpx;
    vertical-align: middle;
    margin-top: 3rpx;
    border-radius: 50%;
    margin-right: 10rpx;
  }
}
</style>
