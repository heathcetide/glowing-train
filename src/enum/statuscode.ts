/**
 * 响应数据状态
 */
export enum StatusCode {
  /**请求成功 */
  OK = 200,
  /**创建成功 */
  CREATED = 201,
  /**Unauthorized */
  UNAUTHORIZED = 401,
  /**Forbidden*/
  FORBIDDEN = 403,
  /**Not Found */
  NOT_FOUND = 404,
  /**服务器错误 */
  SYSTEM_ERROR = 500,
  /**操作错误 */
  OPERATION_ERROR = 300,
}
