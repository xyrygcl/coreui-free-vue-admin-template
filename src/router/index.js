import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/upload',   // 默认跳转到上传页面
      },
      // 删除 dashboard 路由（主页）
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
        name: '个人',
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
