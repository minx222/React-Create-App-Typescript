<<<<<<< HEAD
import { ResultEnum, RequestMethodEnum } from "@/enums/request";
export interface CreateAxiosOptions {
  baseURL: string;
  default_method: RequestMethodEnum;
  timeout: number;
  withCredentials: boolean;
}
export const config: CreateAxiosOptions = {
  baseURL: "",
=======
import { ResultEnum, RequestMethodEnum } from '@/enums/request'
export interface CreateAxiosOptions {
  baseURL: string
  default_method: RequestMethodEnum
  timeout: number
  withCredentials: boolean
}
export const config: CreateAxiosOptions = {
  baseURL: '/api',
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
  // 设置超时时间（10s）
  timeout: ResultEnum.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
<<<<<<< HEAD
  default_method: RequestMethodEnum.POST,
};
=======
  default_method: RequestMethodEnum.POST
}
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
