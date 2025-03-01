import { UserGender, UserStatus, UserRole, FeedbackStatus } from '@/enum/UserEnum'

import type { Food } from './food'
import type { FoodUnit } from '@/enum/FoodEnum'
import type { PlanStatus, PlanCategory, GoalCategory } from '@/enum/PlanEnum'

export declare namespace User {
  export interface GetLoginToken {
    token: string
    profile: Info
  }

  /**完整用户信息*/
  export interface Info extends UserInfo {
    lastLoginTime: string
    levelName: string
    levelPoints: number
    maxPoints: number
    minPoints: number
  }

  /**部分用户信息 */
  export interface UserInfo {
    avatarUrl: string
    birthday: string
    email: string
    gender: UserGender
    lastLoginTime: string
    nickname: string
    phone: string
    username: string
  }

  /** 用户评论的信息 */
  export interface CommentInfo {
    /**评论内容  */
    comment: string
    createdAt: string
    deleted: number
    food: Food
    foodId: number
    id: number
    /**评分1-5 */
    rating: ScoreType
    /** 评论状态 */
    status: FeedbackStatus
    updatedAt: string
    user: Info
    userId: number
  }
  export interface CreateCommentParams {
    /**评论内容 */
    comment?: string
    /** 食物id */
    foodId: number
    /** */
    id?: number
    /**评分1-5 */
    rating: ScoreType
  }

  /**用户添加食物 */
  export interface UserAddFoodParams {
    /**提醒阈值,示例值(1) */
    alertThreshold: number
    available: boolean
    /**记录创建时间 */
    createdAt: string
    /**	自定义食物名称,示例值(自制草莓果酱) */
    customFoodName: string
    /**逻辑删除标志 */
    deleted: boolean
    /**	保质期 */
    expirationDate: string
    /**	食物ID（关联food_basic表，可为空）,示例值(101)	 */
    foodId: number
    /**	库存记录主键,示例值(1) */
    id: number
    /**	上次使用日期 */
    lastUsedDate: string
    /**	备注信息,示例值(需尽快食用)  */
    notes: string
    /**	采购日期 */
    purchaseDate: string
    /**	库存数量（重量、个数等）,示例值(2.5) */
    quantity: number
    /**	食物来源,示例值(超市) */
    source: string
    /**存储位置,示例值(冰箱冷藏区) */
    storageLocation: string
    /**	单位（如克、毫升、个等）,示例值(kg) */
    unit: FoodUnit
    /**记录更新时间 */
    updatedAt: string
    /**	用途分类,示例值(主食) */
    usageCategory: string
    /**用户ID,示例值(1001) */
    userId: number
  }

  /**第三方账户 */
  export interface ThirdAccountParams {
    /**	第三方平台账号ID,示例值(wx123456) */
    accountId: string
    /**	第三方平台显示名称,示例值(John Doe) */
    accountName: string
    /**	绑定时间,示例值(2024-12-16 12:00:00) */
    bindTime: string
    /**	主键ID,示例值(1) */
    id: number
    /** 第三方平台名称（如 WeChat, GitHub, Google）,示例值(WeChat) */
    platform: string
    /** 用户ID,示例值(10001) */
    userId: number
  }
  /**用户注册参数 */
  export interface RegisterParams {
    email: string
    nickname: string
    password: string
    phone: string
    username: string
  }
  /**用户邮箱登录参数 */
  export interface EmailLoginParams {
    email: string
    code: string
  }

  export interface resgistByEmailParams extends User.EmailLoginParams {
    registerByEmail: boolean
  }
  /** 用户登录参数   */
  export interface LoginParams {
    password: string
    username: string
  }
  /** 重置密码 */
  export interface ResetPasswordParams {
    emailOrPhone: string
    newPassword: string
  }
  /**开启验证参数 */
  export interface OpenTestifyParams {
    emailOrPhone: string
    code: string
  }

  /**用户目标信息 */
  export interface UserTargetInfo {
    /**目标结束日期 */
    endDate: string
    /**目标分类, */
    goalCategory: GoalCategory
    /**目标记录ID */
    id: number
    /**备注信息(目标说明或医生建议) */
    notes: string
    /**目标开始日期 */
    startDate: string
    /**目标高压(收缩压，单位:mmHg) */
    targetBloodPressureHigh: number
    /**目标低压(舒张压，单位:mmHg) */
    targetBloodPressureLow: 80
    /**目标血糖水平(单位:mmol/L) */
    targetBloodSugar: number
    /**目标体脂率(%) */
    targetBodyFat: number
    /**目标碳水摄入(g) */
    targetCarb: number
    /**目标脂肪摄入(g) */
    targetFat: number
    /**目标纤维摄入(g) */
    targetFiber: number
    /**目标蛋白质摄入(g) */
    targetProtein: number
    /**目标体重(kg) */
    targetWeight: number
    /**用户ID */
    userId: number
  }
}

export declare namespace Plan {
  /**计划信息 */
  export interface PlanInfo {
    /**创建时间 */
    createdAt: string
    /**每日运动计划 */
    exercises: string[]
    /**饮食目标ID,示例值(1001) */
    goalId: number
    id: number
    /**每日食谱 */
    meals: string[]
    /** 计划类型 */
    planCategory: string
    /**计划内容( */
    planContent: string
    /**计划日期*/
    planDate: string
    /**计划完成进度百分比(0-100).示例值(50) */
    progress: number
    /**计划状态 */
    status: PlanStatus
    /**今日实际摄入的卡路里,示例值(1500) */
    todayCalorieCompleted: number
    /** 今日目标卡路里摄入量*/
    todayCalorieTarget: number
    /** 今日实际完成运动量*/
    todayExerciseCompleted: number
    /** 今日运动目标(单位:分钟或其他)*/
    todayExerciseTarget: number
    /** 更新时间*/
    updatedAt: string
    /** 用户ID,示例值(10001)*/
    userId: number
  }

  /**修改或创建计划返回数据 */
  export interface CreatePlanResponse extends User.UserTargetInfo {
    user: User.Info
  }
}

/**搜索用户参数 */
export class SearchUsersParams extends PageSearch {
  keyword: string
}

/** 设置用户偏好参数 */
export type SetUserPreferencesParams = {
  channel: string
  userName: string
}
