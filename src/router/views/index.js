import Store from '@/store/'
export default [{
  path: '/',
  component: () => Store.getters.isMacOs ? import('@/mac/index.vue') : import('@/page/index/index.vue'),
  redirect: '/index',
  children: [{
    path: 'index',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel/index.vue')
  }]
},]