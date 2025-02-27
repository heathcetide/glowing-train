export namespace Food {
  /**@description 创建食物请求参数 */
  interface CreateFoodParams {
    code: string
    contrastPhotoUrl: string
    dynamicDish: boolean
    healthLabel: string
    healthLight: number
    id: number
    largeImageUrl: string
    liquid: boolean
    name: string
    suggest: string
    thumbImageUrl: string
  }

  /**@description 食物类型 */
  interface FoodItem extends CreateFoodParams {
    code: string
    createdAt: string
    deleted: number
    isAvailable: number
    isDynamicDish: true
    isLiquid: true
    updatedAt: string
  }

  /**@description 获取食物列表参数  */
  interface GetFoodListParams {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: boolean
    unpaged: boolean
  }

  /**@description 获取食物列表返回值 */
  interface GetFoodListResponse {
    countId: string
    current: number
    maxLimit: number
    optimizeCountSql: true
    orders: [
      {
        asc: true
        column: string
      },
    ]
    pages: number
    records: FoodItem[]
    searchCount: true
    size: number
    total: number
  }
}
