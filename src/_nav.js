/**
 * _nav.js - 精简版 Sidebar Navigation
 *
 * 只保留自定义页面：
 * - Dashboard
 * - Upload
 * - Courses
 * - Profile
 * - Login
 * - Register
 *
 * 删除了 CoreUI 示例组件和外部 PRO 页面
 */

export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavItem',
    name: 'Upload',
    to: '/upload',
    icon: 'cil-cloud-upload',
  },
  {
    component: 'CNavItem',
    name: 'Courses',
    to: '/courses',
    icon: 'cil-book',
  },
  {
    component: 'CNavItem',
    name: 'Profile',
    to: '/profile',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'Login',
    to: '/pages/login',
    icon: 'cil-account-logout',
  },
  {
    component: 'CNavItem',
    name: 'Register',
    to: '/pages/register',
    icon: 'cil-account-plus',
  },
]
