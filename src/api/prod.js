
import request from '@/axios';
import { baseUrl } from '@/config/env';
export const list = (data) => {
  return request({
    url: baseUrl + '/crud/list',
    method: 'get',
    meta: {
      isSerialize: true
    },
    params: data
  })
}