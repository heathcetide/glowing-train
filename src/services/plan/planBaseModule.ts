/**
 *
 * @module postBaseModules
 * @description 帖子基础模块
 */

import type { Plan } from '@/types/user'
import { http } from '@/utils/request'

/**
 * @description 获取帖子列表
 */
export const getPlanListByUserAPI = () => {
  const url = `/api/health-plan/owner/list`
  return http<Post.PostItem[]>({
    url: url,
    method: 'GET',
  })
}

/**
 * @description
 */
export const getPlanByUserAPI = () => {
  const url = `/api/health-plan/owner/day`
  return http<Plan.PlanInfo>({
    url: url,
    method: 'GET',
  })
}

export const getPlanByUserTextAPI = () => {
  const url = `http://localhost:4000/plan`
  return http<Plan.PlanInfo>({
    url: url,
    method: 'GET',
  })
}

/**
 * /api/health-plan/food 更新饮食记录
 */
export const updatePlanByUserAPI = (data: Plan.PlanInfo) => {
  const url = `/api/health-plan/food`
  return http<Plan.PlanInfo>({
    url: url,
    method: 'POST',
    data,
  })
}

/**
 * 修改健康饮食记录
 */
export const getHealthPlanByIdAPI = (id: any) => {
  const url = `/api/health-plan/get/${id}`
  return http<Plan.PlanInfo>({
    url: url,
    method: 'GET',
  })
}
