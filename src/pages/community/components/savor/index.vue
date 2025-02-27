<template>
  <scroll-view scroll-y class="scroll-view">
    <up-waterfall v-model="flowList" ref="uWaterfallRef">
      <template v-slot:left="{ leftList }">
        <view class="demo-warter" v-for="(item, index) in leftList" :key="item.id">
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
        <view class="demo-warter" v-for="(item, index) in rightList" :key="item.id">
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
import { ref } from 'vue'
import { nanoid } from 'nanoid/non-secure'
import { getPostsByCursorAPI } from '@/services/post/postBaseModule' // 引入API请求

const tabs = ref<string[]>(['推荐', '视频', '直播', '图文'])

const uWaterfallRef = ref()
const loadStatus = ref<'loadmore' | 'loading' | 'nomore'>()
const flowList = ref<Array<RecommendCardProps>>([]) // 存储从接口获取的帖子数据

// 游标和分页设置
let cursorId = ref(0)
const pageSize = 10

// 请求帖子数据
const fetchPosts = async (cursorId: number, pageSize: number) => {
  try {
    const response = await getPostsByCursorAPI(cursorId, pageSize)
    if (response && response.data) {
      const posts = response.data.map((item: any) => ({
        id: item.id,
        title: item.content, // 显示内容作为标题
        image: item.mediaUrl, // 使用媒体链接作为图片
        avatarUrl: item.avatarUrl, // 默认没有头像字段
        nickName: item.nickname.toString(), // 使用 userId 作为用户名
        number: item.likeCount.toString(), // 显示点赞数
        isComment: item.commentsCount > 0, // 是否有评论
        tags: JSON.parse(item.tags || '[]'),
      }))

      flowList.value = [...flowList.value, ...posts] // 添加新获取的数据到流列表
      cursorId.value = posts[posts.length - 1]?.id || cursorId.value // 更新游标ID
      loadStatus.value = posts.length < pageSize ? 'nomore' : 'loadmore' // 判断是否有更多数据
    }
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    loadStatus.value = 'nomore'
  }
}

const addRandomData = () => {
  fetchPosts(cursorId.value, pageSize)
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
