
      import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
          import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () =>
          import('@/views/pages/Upload.vue'),
      },
      {
        path: '/courses',
        name: 'CourseList',
        component: () =>
          import('@/views/pages/CourseList.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () =>
          import('@/views/pages/Profile.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/login',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register.vue'),
      },
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404.vue'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
