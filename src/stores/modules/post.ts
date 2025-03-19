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
    try {
      const response = await getPostsByCursorAPI(cursorId.value, pageSize.value)
      if (response && response.data) {
        const posts = (response.data as any[]).map((item: any) => ({
          id: item.id,
          title: item.content,
          image: item.mediaUrl,
          avatarUrl: item.avatarUrl,
          nickName: item.nickname.toString(),
          number: item.likeCount.toString(),
          isComment: item.commentsCount > 0,
          tags: JSON.parse(item.tags || '[]'),
        }))

        postList.value = [...postList.value, ...posts]
        cursorId.value = posts[posts.length - 1]?.id || cursorId.value
        loadStatus.value = posts.length < pageSize.value ? 'nomore' : 'loadmore'
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
