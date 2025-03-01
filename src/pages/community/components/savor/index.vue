<template>
  <scroll-view scroll-y class="scroll-view" :style="{ height: hetght }">
    <up-waterfall v-model="flowList" ref="uWaterfallRef">
      <template v-slot:left="{ leftList }">
        <view class="demo-warter" v-for="(item, index) in leftList" :key="item.id" @click="lookDetials(item.id)">
          <RecommendCard
            :image="item.image"
            :index="index"
            :title="item.title"
            :nickName="item.nickName"
            :avatar="item.avatarUrl"
            :number="item.number"
            :isComment="item.isComment"
            :id="item.id"
          />
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view class="demo-warter" v-for="(item, index) in rightList" :key="item.id" @click="lookDetials(item.id)">
          <RecommendCard
            :image="item.image"
            :index="index"
            :title="item.title"
            :nickName="item.nickName"
            :avatar="item.avatarUrl"
            :number="item.number"
            :isComment="item.isComment"
            :id="item.id"
            :tag="item.tag"
          />
        </view>
      </template>
    </up-waterfall>
    <up-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></up-loadmore>
  </scroll-view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import RecommendCard from './components/RecommendCard.vue'
import { computed, ref } from 'vue'

import type { RecommendCardProps } from '@/types/community'
import usePostStore from '@/stores/modules/post'
const postStore = usePostStore()
const { safeAreaInsets } = uni.getWindowInfo()

const loadStatus = postStore.loadStatus

const hetght = computed(() => {
  return `calc(100vh - 50rpx - ${safeAreaInsets.bottom + safeAreaInsets.top}px)`
})

const uWaterfallRef = ref()

const flowList = ref<RecommendCardProps[]>() // 存储从接口获取的帖子数据

const lookDetials = (id: number) => {
  uni.navigateTo({
    url: `/pages/post-details/post-details?id=${id}`,
  })
}
const addRandomData = async () => {
  await postStore.fetchPosts()
  flowList.value = postStore.postList
}

onLoad(() => {
  addRandomData() // 初始加载数据
})
</script>

<style lang="scss" scoped>
$up-main-color: #2979ff;
$up-type-error: #d3b717;
$up-type-primary: #14b163;
$up-tips-color: #e42acb;
.scroll-view {
  height: calc(100vh - 270rpx);
}

.navleft {
  width: 75rpx;
}
.navright {
  width: 75rpx;
}

.demo-warter {
  border-radius: 8px;
  // margin: 5px;
  background-color: #ffffff;

  position: relative;
}

.u-close {
  position: absolute;
  top: 32rpx;
  right: 32rpx;
}

.demo-image {
  width: 90%;
  border-radius: 4px;
}

.demo-title {
  font-size: 30rpx;
  margin-top: 5px;
  color: $up-main-color;
}

.demo-tag {
  display: flex;
  margin-top: 5px;
}

.demo-tag-owner {
  background-color: $up-type-error;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 4rpx 14rpx;
  border-radius: 50rpx;
  font-size: 20rpx;
  line-height: 1;
}

.demo-tag-text {
  border: 1px solid $up-type-primary;
  color: $up-type-primary;
  margin-left: 10px;
  border-radius: 50rpx;
  line-height: 1;
  padding: 4rpx 14rpx;
  display: flex;
  align-items: center;
  border-radius: 50rpx;
  font-size: 20rpx;
}

.demo-price {
  font-size: 30rpx;
  color: $up-type-error;
  margin-top: 5px;
}

.demo-shop {
  font-size: 22rpx;
  color: $up-tips-color;
  margin-top: 5px;
}
</style>
<style>
/* page不能写带scope的style标签中，否则无效 */
/* page {
  background-color: #e8e8e8;
} */
</style>
