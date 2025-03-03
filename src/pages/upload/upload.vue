<template>
  <view class="shadow1">
    <up-navbar safeAreaInsetTop title="发布动态">
      <template #left>
        <uni-icons type="arrow-left" color="#333333" size="20" />
      </template>
      <template #right>
        <view class="flex items-center">
          <text class="text-#5DBE8A">发布</text>
        </view>
      </template>
    </up-navbar>
  </view>

  <view class="container p-28rpx w-100% mt-88rpx">
    <view>
      <uni-row>
        <uni-col :span="6" v-for="(item, index) in tabs" :key="item.type" @click="activeIndex = index">
          <view class="col fb py-20rpx text-#5DBE8A" v-show="index === activeIndex">
            <uni-icons :type="item.type" color="#5DBE8A" size="24" />
            <text>{{ item.name }}</text>
          </view>
          <view class="col fb py-20rpx" v-show="index !== activeIndex">
            <uni-icons :type="item.type" size="24" />
            <text>{{ item.name }}</text>
          </view>
        </uni-col>
      </uni-row>
      <uni-col :span="6" :offset="activeIndex * 6" class="pos-relative transition-all">
        <view class="coursor pos-absolute w-100% h2rpx bg-#5DBE8A"></view>
      </uni-col>
    </view>

    <view class="mt-28rpx mb-82rpx">
      <up-textarea
        v-model="value"
        height="240rpx"
        placeholder="分享新鲜事..."
        count
        maxlength="300"
        adjustPosition
      ></up-textarea>
    </view>

    <UploadFile />

    <view class="mt-56rpx p-14rpx">
      <view class="flex gap-10rpx text-0 fb">
        <view
          v-for="(item, index) in tags"
          :key="index"
          @click="activeTag = index"
          :class="{ active: activeTag === index }"
          class="px-28rpx py-10rpx text flex-shrink-0 bg-#f5f5f5 rounded-10rpx"
        >
          {{ item }}</view
        >
      </view>
    </view>

    <uni-list :border="false">
      <uni-list-item
        :border="false"
        title="添加位置 "
        showExtraIcon
        link="navigateTo"
        :extraIcon="{ color: '#333333', size: '24', type: 'location-filled' }"
      >
      </uni-list-item>
      <uni-list-item
        :border="false"
        title="谁可以看 "
        showExtraIcon
        link="navigateTo"
        badgeText="小学生"
        :extraIcon="{ color: '#333333', size: '24', type: 'eye-filled' }"
      >
        <template #footer>
          <view class="flex center">公开</view>
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UploadFile from './components/UploadFile.vue'

const activeIndex = ref(0)
const activeTag = ref(0)

const value = ref('')

const tabs: { type: UniHelper.UniIconsType; name: string }[] = [
  {
    type: 'image',
    name: '图文',
  },
  {
    type: 'videocam-filled',
    name: '视频',
  },
  {
    type: 'mic-filled',
    name: '直播',
  },
  {
    type: 'tune',
    name: '模版',
  },
]

const tags = ['#美食', '#生活', '#美好时光', '#探店', '#探店']

// 方法
function left() {
  console.log('left')
}

function right() {
  console.log('right')
}
</script>

<style scoped>
.active {
  background-color: #5dbe8a;
  color: #fff;
}
</style>
