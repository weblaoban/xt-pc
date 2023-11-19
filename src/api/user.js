import request from '@/axios';
import { baseUrl } from '@/config/env';
export const loginByUsername = (data) => request({
  url: baseUrl + '/adminLogin',
  method: 'post',
  meta: {
    isToken: false
  },
  data: {
   ...data
  }
})

export const getUserInfo = () => request({
  url: baseUrl + '/user/getUserInfo',
  method: 'get'
});

export const refreshToken = () => request({
  url: baseUrl + '/user/refresh',
  method: 'post'
})

export const getMenu = (type = 0) => request({
  url: baseUrl + '/user/getMenu',
  method: 'get',
  params: {
    type
  }
});

export const getTopMenu = () => request({
  url: baseUrl + '/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: baseUrl + '/user/logout',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: baseUrl + '/user/logout',
  meta: {
    isToken: false
  },
  method: 'get'
})



export const register = (data)=>request({
    url:baseUrl+'user/register',
    method:'post',
    data:data
})
export const modifyPassword = (data)=>request({
    url:baseUrl+'user/modifyPassword',
    method:'post',
    data:data
})