/**
 *
 * @module userBaseModule
 * @description 用户基础模块
 */
import type { Community } from '@/types/component'
import { http } from '@/utils/request'

export const createPostAPI = (data: any) =>
  http<Community.ActivityCardProps[]>({
    url: '/api/posts',
    method: 'POST',
    data,
  })

// import { httpServer } from '@/utils/requests'

export const getActivityAPI = (type: string) =>
  http<Community.ActivityCardProps[]>({
    url: '/api/activities/' + type,
    method: 'GET',
  })

/**
   *
   *@ApiOperation("上传文章封面图片")
    @PostMapping("/api/posts/image")
    public ApiResponse<String> uploadImage(@RequestParam("file") MultipartFile file)
  */
export const uploadImageAPI = (formData: FormData) =>
  http<unknown>({
    url: '/api/posts/image',
    method: 'POST',
    data: formData,
  })
