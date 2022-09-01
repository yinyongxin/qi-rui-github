
import axios, { AxiosRequestConfig } from 'axios';

import { server } from '@/config';
import { reject } from 'lodash';

const instance = axios.create({
  baseURL: `http${server.safe}://${server.baseURL}/`,
  timeout: 100000,
});

const getRes = (a: any, b: any) => {
  let res: any = {};
  if (b?.constructor.name === 'File') {
    return b;
  }
  if (!a && !b) {
    return res;
  }
  if (a && !b) {
    res = a;
  } else if (!a && b) {
    res = b;
  } else {
    res = Object.assign(a, b);
  }


  return res;
};

export const request =
  <D,>(config: AxiosRequestConfig<D>) =>
    async (data?: any, params?: any) => {
      try {
        let token = {};
        const tokenStorage = JSON.parse(localStorage.getItem('token'));
        if (tokenStorage) {
          token = {
            Authorization: tokenStorage,
          };
        }

        const requestRes = await instance({
          ...config,
          data: getRes(config?.data, data),
          params: getRes(config?.params, params),
          headers: {
            ...token,
            'Access-Control-Allow-Origin': '*',
            ...config?.headers,
          },
        });
        if (requestRes.config?.responseType === 'blob') {
          if (!requestRes.hasOwnProperty(data)) {
            requestRes.data = null;
          }
          return requestRes.data;
        }
        // 如果成功返回数据
        if (requestRes?.data.success) {
          return requestRes.data;
        } else {
          // Notification.error({
          //   title: '请求失败',
          //   content: requestRes?.data?.msg || requestRes?.data?.message,
          // });
          throw requestRes.data.errorMessage;
        }
      } catch (error) {
        throw error;
      }
    };
