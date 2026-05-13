import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/upload',
        component: () => import('@/views/pages/Upload.vue'),
      },
      {
        path: '/courses',
        component: () => import('@/views/pages/CourseList.vue'),
      },
      {
        path: '/profile',
        component: () => import('@/views/pages/Profile.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
