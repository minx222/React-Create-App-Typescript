<<<<<<< HEAD
import axios from "axios";
import { ResultEnum, RequestMethodEnum } from "@/enums/request";
=======
import axios from 'axios'
import { ResultEnum, RequestMethodEnum } from '@/enums/request'
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
import type {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
<<<<<<< HEAD
  AxiosError,
} from "axios";
import qs from "qs";
import type { CreateAxiosOptions } from "@/config/reques";
import { config } from "@/config/reques";
import { message } from "antd";

export class AxiosService {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors(options);
=======
  AxiosError
} from 'axios'
import qs from 'qs'
import type { CreateAxiosOptions } from '@/config/reques'
import { config } from '@/config/reques'
import { message } from 'antd'

export class AxiosService {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors(options)
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
  }

  private setupInterceptors(options: CreateAxiosOptions) {
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (!config.method) {
<<<<<<< HEAD
          config.method = options.default_method;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      const { data, status } = response;
      if (status !== ResultEnum.SUCCESS) {
        message.error("请求失败！ 失败信息：", data.msg);
        Promise.reject(data);
      }
      return data;
    });
=======
          config.method = options.default_method
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      const { data, status } = response
      if (status !== ResultEnum.SUCCESS) {
        message.error('请求失败！ 失败信息：', data.msg)
        Promise.reject(data)
      }
      return data
    })
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
  }

  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.axiosInstance({
      url: url + qs.stringify(params),
<<<<<<< HEAD
      method: RequestMethodEnum.GET,
    });
=======
      method: RequestMethodEnum.GET
    })
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
  }
  post<T>(url: string, data: any): Promise<ResultData<T>> {
    return this.axiosInstance({
      url: url,
      method: RequestMethodEnum.POST,
<<<<<<< HEAD
      data,
    });
  }
}

export default new AxiosService(config);
=======
      data
    })
  }
}

export default new AxiosService(config)
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
