import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/upload',
      },
      // 主页路由已删除
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/pages/Upload.vue'),
      },
      {
        path: 'courses',
        name: 'Courses',
        component: () => import('@/views/pages/Courses.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
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
