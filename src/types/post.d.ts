declare namespace Post {
  export interface PostItem {
    avatarUrl: string
    channelId: number
    channelName: string
    cityId: number
    commentsCount: 3
    content: string
    countyId: null
    createdAt: string
    id: number
    likeCount: number
    mediaUrl: string
    nickname: string
    provinceId: null
    tags: string[]
    updatedAt: string
    userId: number
  }

  export interface CardItem {
    id: number
    name: string
    time: string
    containt: string
    avatar: string
    children?: CardItem[]
  }
}
