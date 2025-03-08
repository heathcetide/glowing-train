declare namespace Video {
  export interface UploadVideoParams {
    chunkNumber: number
    totalChunks: number
    fileId: string
  }
  export interface File {
    cloudPath: string
    duration: number
    fileType: string
    height: number
    name: string
    path: string
    size: number
    type: string
    uuid: number
    width: number
  }
  export interface UploadVideoDirestParams {
    title: string
    description: string
    userId: number
    file: string
    tags: string[]
  }
}
