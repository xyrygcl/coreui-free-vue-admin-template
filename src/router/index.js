import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/upload',     // 默认跳转到“立即上传”页面（可改为 /courses，根据需求）
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
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
