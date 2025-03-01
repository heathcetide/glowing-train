declare namespace Comments {
  export interface CommentInfo {
    content: string
    createdAt: string
    deleted: number
    id: number
    parentId: number
    postId: number
    status: number
    updatedAt: string
    userId: number
  }
  export interface PostComment {
    countId: string
    current: number
    maxLimit: number
    optimizeCountSql: boolean
    orders: {
      asc: boolean
      column: string
    }[]
    pages: number
    records: CommentInfo[]
    searchCount: boolean
    size: number
    total: number
  }
}
