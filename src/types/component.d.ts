/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import SGContainer from '@/components/SGContainer.vue'
import SGSearchBar from '@/components/SGSearchBar.vue'
import SGNavBar from '@/components/SGNavBar.vue'
import SGTabs from '@/components/SGTabs.vue'
import SGTabsSub from '@/components/SGTabsSub.vue'
import SGMsgNotice from '@/components/SGMsgNotice.vue'
import QiunDataCharts from '@/components/qiun-data-charts/qiun-data-charts.vue'
import SGCateTab from '@/components/SGCateTab.vue'
import SGIconTabs from '@/components/SGIconTabs.vue'
import SGPopupDialog from '@/components/SGPopupDialog.vue'
import SGPoup from '@/components/SGPoup.vue'
import SGSliperInput from '@/components/SGSliperInput.vue'
import SGCalender from '@/components/SGCalender.vue'
import SGDraggable from '@/components/SGDraggable.vue'
import type { FoodMeanu } from './food'
declare module 'vue' {
  export interface GlobalComponents {
    QiunDataCharts: typeof import('@/components/qiun-data-charts/qiun-data-charts.vue')['default']
    QiunLoading: typeof import('@/components/qiun-loading/qiun-loading.vue')['default']
    SGContainer: typeof SGContainer
    SGSearchBar: typeof SGSearchBar
    SGNavBar: typeof SGNavBar
    SGTabs: typeof SGTabs
    SGMsgNotice: typeof SGMsgNotice
    QiunDataCharts: typeof QiunDataCharts
    SGCateTab: typeof SGCateTab
    SGIconTabs: typeof SGIconTabs
    SGPopupDialog: typeof SGPopupDialog
    SGTabsSub: typeof SGTabsSub
    SGPoup: typeof SGPoup
    SGSliperInput: typeof SGSliperInput
    SGCalender: typeof SGCalender
    SGDraggable: typeof SGDraggable
  }
  export interface Tabs {
    icon: string
    title: string
  }
}

// 导出组件实例类型 , InstanceType<>获取组件实例类型
export type SGContainerInstance = InstanceType<typeof SGContainer>
export type SGSearchBarInstance = InstanceType<typeof SGSearchBar>
export type SGNavBarInstance = InstanceType<typeof SGNavBar>
export type SGTabsInstance = InstanceType<typeof SGTabs>
export type SGWaterfallPlusInstance = InstanceType<typeof SGWaterfallPlus>
export type SGPopupDialogPlusInstance = InstanceType<typeof SGPopupDialog>
export type SGPoupInstance = InstanceType<typeof SGPoup>

export namespace Community {
  export interface RecipeListCardItem {
    /**封面图 */
    cover: string
    /**点赞数 */
    like: number
    /** 食普名称 */
    name: string
    /** 评论数 */
    comment: number
    /** 作者 */
    author: string
    /** 作者头像 */
    avatar: string
    /** 描述 */
    desc: string
    isCommented?: boolean
  }

  export interface ActivityCardProps {
    activityType: string
    createdAt: string
    deleted: number
    description: string
    endDate: number
    id: number
    imageUrl: string
    location: string
    startDate: number
    title: string
    updatedAt: string
  }
}

export namespace HomeIndex {
  export namespace Stack {
    export interface StackItem {
      alertThreshold: 1
      available: boolean | null
      createdAt: string
      customFoodName: string
      deleted: boolean
      expirationDate: string
      foodId: number
      foodImageUrl: string
      foodName: string
      id: number
      lastUsedDate: string
      notes: string
      purchaseDate: string
      quantity: number
      source: string
      storageLocation: string
      unit: string
      updatedAt: string
      usageCategory: string
      userId: number
    }

    export interface TabListItem {
      title: string
      children: Partial<StackItem>[]
    }

    export type TabList = Partial<TabListItem>[]
  }
}

export namespace CookModule {
  export interface FoodCardItem extends FoodMeanu.FoodMeanuItem {
    kcal: number
    /**份数 */
    num: number = 0
  }

  export interface FoodCalcCardItem extends FoodCardItem {
    subDesc?: string
  }
}
