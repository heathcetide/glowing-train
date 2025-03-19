export namespace Reglex {
  /**匹配邮箱 */
  export const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  /**匹配手机号 */
  export const phone = /^1[3-9]\d{9}$/
  /** 匹配密码 匹配密码，要求至少8位，必须包含字母、数字和特殊字符(@$!%?&)*/
  export const password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  export const code = /^[0-9]{6}$/
  export type ReglexType = 'email' | 'phone' | 'password' | 'code'
}
