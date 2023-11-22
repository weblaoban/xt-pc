
import request from '@/axios';
import { baseUrl } from '@/config/env';
export const list = (data) => {
  return request({
    url: baseUrl + '/prod/pageProd',
    method: 'get',
    meta: {
      isSerialize: true
    },
    params: data
  })
}



export const zxlist = (data) => {
    return request({
      url: baseUrl + '/content/page',
      method: 'get',
      meta: {
        isSerialize: true
      },
      params: {status:0,categoryId:8}
    })
  }