/**@description 性别枚举 */
export enum UserGender {
  MALE = 0,
  FEMALE = 1,
}

/**
 * @description 用户角色枚举
 */
export enum UserRole {
  /**普通用户 */
  USER = 'USER',
  /**管理员 */
  ADMIN = 'ADMIN',
  /**超级管理员 */
  SUPER_ADMIN = 'SUPER_ADMIN',
}

/**
 * @description 用户状态枚举
 */
export enum UserStatus {
  /**正常 */
  NORMAL = 1,
  /**封禁 */
  BAN = 2,
  /**锁定 */
  LOCKED = 3,
  /**过期 */
  OUT_FASHION = 4,
}

/**
 * @description 反馈状态枚举
 */
export enum FeedbackStatus {
  /**已接受 */
  APPROVED = 'approved',
  /**拒绝 */
  REJECT = '',
}
