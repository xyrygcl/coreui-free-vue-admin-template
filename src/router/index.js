import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',

    children: [
      {
        path: 'dashboard',
        name: '主页',
        component: () => import('@/views/dashboard/App.vue'),
      },

      {
        path: 'upload',
        name: '立即上传',
        component: () => import('@/views/pages/Upload.vue'),
      },

      {
        path: 'courses',
        name: '我的作品',
        component: () => import('@/views/pages/Courses.vue'),
      },

      {
        path: 'profile',
        name: '个人中心',
        component: () => import('@/views/pages/Profile.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
