/**
 * @module userPlanModule
 * @description 用户计划模块接口
 */
import { http } from '@/utils/request'
import type { Plan } from '@/types/user'

/**
 * @description 创建计划 /health-plan/create
 * @method POST
 * @param {Plan.PlanInfo} data
 * @returns {Plan.PlanInfo}
 */
export const createHealthPlanAPI = (data: Plan.PlanInfo) =>
  http<Plan.PlanInfo>({
    url: '/health-plan/create',
    method: 'POST',
    data,
  })

/**
 * @description 删除健康计划 /health-plan/delete/{id}
 * @method DELETE
 * @param {number} id
 */
export const deleteHealthPlanAPI = (id: number) =>
  http<unknown>({
    url: `/health-plan/delete/${id}`,
    method: 'DELETE',
  })

/**
 * @description 通过id获取健康计划 /health-plan/get/{id}
 * @method GET
 * @param {number} id
 */
export const getHealthPlanByIdAPI = (id: number) =>
  http<Plan.PlanInfo>({
    url: `/health-plan/get/${id}`,
    method: 'GET',
  })

/**
 * @description 修改健康计划 /health-plan/update
 * @method PUT
 * @param {Plan.PlanInfo} data
 */
export const updateHealthPlanAPI = (data: Plan.PlanInfo) =>
  http<Plan.PlanInfo>({
    url: '/health-plan/update',
    method: 'PUT',
    data,
  })
