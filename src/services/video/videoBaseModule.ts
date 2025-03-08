/**
 * @description: 视频模块基类
 */

import Utils from '@/utils'
import { http } from '@/utils/request'

/**
 * @description: 分片上传视频
 */
export const uploadVideoAPI = (params: Video.UploadVideoParams) => {
  const { chunkNumber, totalChunks, fileId } = params
  const query = '?chunkNumber=' + chunkNumber + '&totalChunks=' + totalChunks + '&fileId=' + fileId
  return http({
    url: '/video/chunk' + query,
    method: 'POST',
  })
}
export const uploadVideoDirestoAPI = (params: Video.UploadVideoDirestParams) => {
  const { description, file, title, userId, tags } = params
  const query = Utils.objectToQueryString({
    description,
    file,
    title,
    userId,
    tags,
  })
  return http({
    url: '/video/chunk?' + query,
    method: 'POST',
  })
}
