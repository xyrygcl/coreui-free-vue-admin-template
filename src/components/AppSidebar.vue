<script setup>
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()

const menuItems = [
  { title: '主页', icon: 'cil-home', to: '/dashboard' },
  { title: '立即上传', icon: 'cil-cloud-upload', to: '/upload' },
  { title: '我的作品', icon: 'cil-library', to: '/courses' },
  { title: '个人', icon: 'cil-user', to: '/profile' },
]
</script>

<template>
  <CSidebar
    class="bg-dark text-light"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <CSidebarBrand class="px-3 py-4">
      <h3 class="text-light">沃转课</h3>
    </CSidebarBrand>

    <CSidebarNav>
      <CNavItem v-for="item in menuItems" :key="item.title">
        <CNavLink :to="item.to">
          <CIcon :icon="item.icon" class="me-2" /> {{ item.title }}
        </CNavLink>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<style scoped>
.bg-dark {
  background-color: #2c2c2c !important;
}
.text-light {
  color: #ffffff !important;
}
</style>
