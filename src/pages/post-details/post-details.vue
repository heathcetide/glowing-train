<template>
  <CustomNavBar />
  <scroll-view scroll-y>
    <PostContaint />
    <Comment :list="list" />
  </scroll-view>
  <CommentInput v-model:value="value" />
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

import CommentInput from './components/CommentInput.vue'
import Comment from './components/Comment.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import PostContaint from './components/PostContaint.vue'
// 新增状态管理
import { ref, watch } from 'vue'
import usePostStore from '@/stores/modules/post'
const postStore = usePostStore()
const value = ref('')

const list = ref<Post.CardItem[]>([
  {
    name: '美食爱好者',
    time: '10分钟前',
    avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
    containt: '看起来太诱人了！请问糖放多少合适呢?',
    id: 1,
    children: [
      {
        name: '美食爱好者2 回复 美食爱好者',
        time: '10分钟前',
        avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
        containt: '看起来太诱人了！请问糖放多少合适呢?',
        id: 2,
      },
    ],
  },
  {
    name: '美食爱好者',
    time: '10分钟前',
    avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
    containt: '看起来太诱人了！请问糖放多少合适呢?',
    id: 1,
  },
])

watch(value, (newValue) => {
  const item: Post.CardItem = {
    name: '美食爱好者' + (Math.random() * 1000).toString(36),
    time: '10分钟前',
    avatar: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
    containt: newValue,
    id: 1,
  }
  if (newValue) {
    list.value.unshift(item)
  }
})
const getDetials = (id: number) => {
  postStore.getPostDetailsById(id)
}

onLoad((data) => {
  const id = data?.id
  getDetials(id)
})
</script>

<style scoped lang="scss"></style>
