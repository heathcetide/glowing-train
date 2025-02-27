export interface RecommendCardProps {
  id: number
  image: string
  title: string
  avatar?: string
  nickName: string
  number: string
  index?: number
  isComment?: boolean
}

export interface NoticeCardProps {
  title: string
  content: string
  time: string
  isRead?: boolean
}
