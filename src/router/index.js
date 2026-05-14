import { createRouter, createWebHistory } from 'vue-router'

// Views
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Upload from '@/views/pages/Upload.vue'
import Courses from '@/views/pages/Courses.vue'
import Profile from '@/views/pages/Profile.vue'

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/upload', name: 'Upload', component: Upload },
  { path: '/courses', name: 'Courses', component: Courses },
  { path: '/profile', name: 'Profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
