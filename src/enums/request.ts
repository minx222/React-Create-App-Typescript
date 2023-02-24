// * 请求枚举配置
/**
 * @description：请求配置
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 599,
<<<<<<< HEAD
  TIMEOUT = 10000,
=======
  TIMEOUT = 10000
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
}

/**
 * @description：请求方法
 */
export enum RequestMethodEnum {
<<<<<<< HEAD
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
=======
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
}

/**
 * @description：常用的contentTyp类型
 */
export enum ContentTypeEnum {
  // json
<<<<<<< HEAD
  JSON = "application/json;charset=UTF-8",
  // text
  TEXT = "text/plain;charset=UTF-8",
  // form-data 一般配合qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data 上传
  FORM_DATA = "multipart/form-data;charset=UTF-8",
=======
  JSON = 'application/json;charset=UTF-8',
  // text
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
}
