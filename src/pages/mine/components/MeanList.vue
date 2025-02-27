<template>
  <view class="wrap">
    <uni-list class="list">
      <uni-list-item
        class="list-item"
        link="navigateTo"
        v-for="item in menus"
        :key="item.id"
        :title="item.title"
        :to="item.to"
      >
        <template #header>
          <image :src="`${item.image}`" mode="scaleToFill" class="image" />
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { nanoid } from 'nanoid/non-secure'
interface Menu {
  id: string
  image: string
  title: string
  to: string
}

const menus = ref<Array<Menu>>([
  { id: nanoid(), image: '/static/image/center/user.png', title: '个人信息', to: '/pagesUser/info/info' },
  { id: nanoid(), image: '/static/image/center/data.svg', title: '数据分析', to: '' },
  { id: nanoid(), image: '/static/image/center/food.svg', title: '智能设备', to: '' },
  { id: nanoid(), image: '/static/image/center/foodpanel.svg', title: '本周食谱', to: '' },
  { id: nanoid(), image: '/static/image/center/general.svg', title: '上周周报总结', to: '' },
  { id: nanoid(), image: '/static/image/center/activity.svg', title: '活动中心', to: '' },
  { id: nanoid(), image: '/static/image/center/security.svg', title: '账号与安全', to: '' },
  { id: nanoid(), image: '/static/image/center/help.svg', title: '帮助与反馈', to: '/pagesUser/help/help' },
])
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
    border: none;
    box-shadow: none;
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
