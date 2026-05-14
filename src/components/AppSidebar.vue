<script setup>
import { useSidebarStore } from '@/stores/sidebar.js'
import { RouterLink } from 'vue-router'

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
    position="fixed"
    class="sidebar-custom"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <CSidebarBrand class="border-bottom">
      <h3 class="m-0 text-white">沃转课</h3>
    </CSidebarBrand>

    <CSidebarNav>
      <CNavItem
        v-for="item in menuItems"
        :key="item.title"
      >
        <RouterLink
          :to="item.to"
          class="nav-link custom-link"
        >
          <CIcon :icon="item.icon" class="me-2" />
          {{ item.title }}
        </RouterLink>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<style scoped>
.sidebar-custom {
  background: #1f2937;
  width: 240px;
}

.custom-link {
  color: #ffffff;
  text-decoration: none;
  padding: 12px 18px;
  display: flex;
  align-items: center;
}

.custom-link:hover {
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}
</style>
