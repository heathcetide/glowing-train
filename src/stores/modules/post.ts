import { getPostsByCursorAPI } from '@/services/post/postBaseModule'
import { defineStore } from 'pinia'
import type { RecommendCardProps } from '@/types/community'
import { ref } from 'vue'
const usePostStore = defineStore('post', () => {
  const isLoading = ref(false)
  const postList = ref<RecommendCardProps[]>([])
  const loadStatus = ref<'loadmore' | 'loading' | 'nomore'>()
  const cursorId = ref(0)
  const pageSize = ref(10)

  const fetchPosts = async () => {
    if (!isLoading.value) {
      return postList.value
    }

    try {
      const response = await getPostsByCursorAPI(cursorId.value, pageSize.value)
      if (response && response.data) {
        const posts = (response.data as any[]).map((item: any) => ({
          id: item.id,
          title: item.content, // 显示内容作为标题
          image: item.mediaUrl, // 使用媒体链接作为图片
          avatarUrl: item.avatarUrl, // 默认没有头像字段
          nickName: item.nickname.toString(), // 使用 userId 作为用户名
          number: item.likeCount.toString(), // 显示点赞数
          isComment: item.commentsCount > 0, // 是否有评论
          tags: JSON.parse(item.tags || '[]'),
        }))

        postList.value = [...postList.value, ...posts] // 添加新获取的数据到流列表
        cursorId.value = posts[posts.length - 1]?.id || cursorId.value // 更新游标ID
        loadStatus.value = posts.length < pageSize.value ? 'nomore' : 'loadmore' // 判断是否有更多数据
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error)
      loadStatus.value = 'nomore'
    }
  }
  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }
  const getPostDetailsById = (id: number) => {
    const post = postList.value.find((item) => item.id === id)
    return post
  }

  return {
    isLoading,
    postList,
    loadStatus,
    cursorId,
    pageSize,
    fetchPosts,
    setIsLoading,
    getPostDetailsById,
  }
})

export default usePostStore
