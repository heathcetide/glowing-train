/**
 *
 * @module postBaseModules
 * @description 帖子基础模块
 */
import { http } from '@/utils/request'

/**
 * @description 获取帖子列表
 */
export const getPostsByCursorAPI = (cursorId: number, pageSize: number) => {
  const url = `/api/posts/page/cursor?cursorId=${cursorId}&pageSize=${pageSize}`
  return http<Post.PostItem[]>({
    url: url,
    method: 'GET',
  })
}
