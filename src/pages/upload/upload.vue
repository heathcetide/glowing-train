<template>
  <view class="shadow1">
    <up-navbar safeAreaInsetTop title="发布动态">
      <template #left>
        <uni-icons type="arrow-left" color="#333333" size="20" @click="left" />
      </template>
      <template #right>
        <view class="flex items-center">
          <text class="text-#5DBE8A">发布</text>
        </view>
      </template>
    </up-navbar>
  </view>

  <view class="container p-28rpx w-100% mt-120rpx">
    <view class="bg-#fff">
      <uni-row>
        <uni-col :span="6" v-for="(item, index) in tabs" :key="item.type" @click="onChangeActive(index, item)">
          <view class="col fb py-20rpx text-#5DBE8A" v-show="index === activeIndex">
            <uni-icons :type="item.icon" color="#5DBE8A" size="24" />
            <text>{{ item.name }}</text>
          </view>
          <view class="col fb py-20rpx" v-show="index !== activeIndex">
            <uni-icons :type="item.icon" size="24" />
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

    <UploadFile :type="upLoadFileTpye" />

    <view class="mt-56rpx p-14rpx">
      <view class="flex gap-10rpx text-0 fb">
        <view
          v-for="(item, index) in tags"
          :key="index"
          @click="handleTagChange(index)"
          :class="{ active: activeTag.includes(index) }"
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
          <select class="select border-0">
            <option value="0">公开</option>
            <option value="1">好友</option>
            <option value="2">私密</option>
          </select>
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import UploadFile from './components/UploadFile.vue'
import Utils from '@/utils'
interface Tab {
  type?: 'image' | 'video'
  icon: UniHelper.UniIconsType
  name: string
}
const activeIndex = ref(0)
const activeTag = ref<number[]>([0])
const upLoadFileTpye = ref<'image' | 'video'>('image')

const value = ref('')
const tags = ['#美食', '#生活', '#美好时光', '#探店', '#探店']

const tabs: Tab[] = [
  {
    type: 'image',
    icon: 'image',
    name: '图文',
  },
  {
    type: 'video',
    icon: 'videocam-filled',
    name: '视频',
  },
  {
    icon: 'mic-filled',
    name: '直播',
  },
  {
    icon: 'tune',
    name: '模版',
  },
]

const range = [
  {
    text: '公开',
    value: 0,
  },
  {
    text: '好友',
    value: 1,
  },
  {
    text: '私密',
    value: 2,
  },
]

const cselectedTags = computed(() => {
  return activeTag.value.map((item) => tags[item])
})

const handleTagChange = (index: number) => {
  if (activeTag.value.includes(index)) {
    activeTag.value = activeTag.value.filter((item) => item !== index)
  } else {
    activeTag.value.push(index)
  }
}
const onChangeActive = (index: number, item: Tab) => {
  if (item?.type) {
    upLoadFileTpye.value = item.type
  } else {
    upLoadFileTpye.value = 'image'
  }
  console.log('upload type:', item.type)

  activeIndex.value = index
}

const change = (e: any) => {
  console.log(e)
}
// 方法
function left() {
  Utils.navigateBack()
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
