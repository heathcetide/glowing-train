/**
 *
 * @module userBaseModule
 * @description 用户基础模块
 */
import { http } from '@/utils/request'
import type { User, SearchUsersParams } from '@/types/user'

// import { httpServer } from '@/utils/requests'

/**
 * @description 绑定第三方账号（未实现） +token
 * @param {User.ThirdAccountParams} data 第三方账号信息
 */
export const bindThirdAccountAPI = (data: User.ThirdAccountParams) =>
  http<unknown>({
    url: '/api/users/bind-account',
    method: 'POST',
    data,
  })

/**
 * @description 修改密码-用户知道当前的密码，并通过身份验证来更改密码 +token
 * @param {string} oldPassword 旧密码
 * @param {string} newPassword 新密码
 */
export const changePasswordAPI = (data: { newPassword: string; oldPassword: string }) =>
  http<unknown>({
    url: '/api/users/change-password',
    method: 'POST',
    data,
  })

/**
 * @description 注销用户 +token
 */
export const deleteUserAPI = () =>
  http<unknown>({
    url: '/api/users/delete-account',
    method: 'POST',
  })

/**
 * @description 邮箱验证码发送
 *
 */
export const emailVerificationCodeAPI = (email: string) => {
  return http<unknown>({
    url: `/api/users/email/code?email=${email}`,
    method: 'POST',
  })
}

/**
 * @description 开启2fa验证（未实现 +token
 */
export const enable2faAPI = () =>
  http<unknown>({
    url: '/api/users/enable-2fa',
    method: 'POST',
  })

/**
 * @description 用户密码登录功能 /api/users/login
 *
 */
export const loginAPI = (data: User.LoginParams) =>
  http<User.GetLoginToken>({
    url: '/api/users/login',
    method: 'POST',
    data,
  })

/**
 * @description 邮箱登录账号 /api/users/login/email
 */
export const loginByEmailAPI = (data: User.EmailLoginParams) =>
  http<unknown>({
    url: '/api/users/login/email',
    method: 'POST',
    data,
  })

/**
 * @description 用户退出登录  +token
 */
export const logoutAPI = () =>
  http<unknown>({
    url: '/api/users/logout',
    method: 'POST',
  })

/**
 * @description 用户注册功能
 * @returns{User.Info}  响应数据
 */
export const registerAPI = (data: User.RegisterParams) =>
  http<User.Info>({
    url: '/api/users/register',
    method: 'POST',
    data,
  })

/**
 * @description 邮箱注册账号 /api/users/register/email
 * @method POST
 * @param {User.EmailLoginParams} data
 */
export const registerByEmailAPI = (data: User.EmailLoginParams) =>
  http<unknown>({
    url: '/api/users/register/email',
    method: 'POST',
    data,
  })
/**
 * @description 重置密码-忘记密码的情况下，通过邮箱或手机号验证身份后设置新密码
 * @method POST
 * @param {User.RegisterParams} data
 */
export const resetPasswordAPI = (data: User.ResetPasswordParams) =>
  http<unknown>({
    url: '/api/users/reset-password',
    method: 'POST',
    data,
  })
/**
 * @description 搜索公开用户
 * @method GET
 * @param {SearchUsersParams}  data
 */
export const searchPublicUsersAPI = (data: SearchUsersParams) =>
  http<User.Info[]>({
    url: '/api/users/search',
    method: 'GET',
    data,
  })
/**
 * @description 开启二级验证码
 * @method POST
 * @param {string}  emailOrPhone
 */
export const sendVerificationCodeAPI = (emailOrPhone: string) =>
  http<unknown>({
    url: '/api/users/send-verification-code',
    method: 'POST',
    data: { emailOrPhone },
  })

/**
 * @description 解绑第三方账号（未实现）
 * @method POST
 * @param {string}  platform
 */
export const unbindThirdAccountAPI = (platform: string) =>
  http<unknown>({
    url: '/api/users/unbind-account',
    method: 'POST',
    data: { platform },
  })

/**
 * @description 普通用户修改自己的信息
 * @method PUT
 * @param {User.Info}  data
 */
export const updateUserInfoAPI = (data: User.Info) =>
  http<User.Info>({
    url: '/api/users/update',
    method: 'PUT',
    data,
  })

/**
 * @description 上传头像
 * @method POST
 */
export const uploadAvatarAPI = (data: FormData) =>
  http<unknown>({
    url: '/api/users/upload-avatar',
    method: 'POST',
    data,
  })
/**
 * @description 开启验证
 * @method POST
 * @param {User.OpenTestifyParams}  data
 */
export const openTestifyAPI = (data: User.OpenTestifyParams) =>
  http<unknown>({
    url: '/api/users/verify',
    method: 'POST',
    data,
  })
/**
 * @description 用户根据username查看自己的信息
 * @method GET
 * @param {string}  username
 */
export const getUserInfoAPI = (username: string) =>
  http<User.Info>({
    url: `/api/users/${username}`,
    method: 'GET',
  })

/**
 *
 * @returns {User.Info}
 */
export const getUserInfoAndLevel = () =>
  http<User.UserInfo>({
    url: '/api/users/info/level',
    method: 'GET',
  })
