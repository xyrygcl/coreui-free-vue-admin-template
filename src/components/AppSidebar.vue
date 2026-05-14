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
    class="sidebar-custom"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => sidebar.toggleVisible(value)"
  >
    <!-- Logo -->
    <CSidebarBrand class="sidebar-brand">
      <h3 class="logo-text">沃转课</h3>
    </CSidebarBrand>

    <!-- 菜单 -->
    <CSidebarNav class="nav-wrapper">
      <CNavItem v-for="item in menuItems" :key="item.title">
        <RouterLink :to="item.to" class="nav-link custom-link">
          <CIcon :icon="item.icon" class="menu-icon" />
          <span>{{ item.title }}</span>
        </RouterLink>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<style scoped>
.sidebar-custom {
  width: 240px;
  min-height: 100vh;
  background: #1e1e1e; /* 黑灰色 */
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

/* 顶部 Logo */
.sidebar-brand {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* 标题 */
.logo-text {
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
}

/* 菜单区域 */
.nav-wrapper {
  padding-top: 16px;
}

/* 链接 */
.custom-link {
  display: flex;
  align-items: center;
  margin: 4px 12px;
  padding: 12px 16px;
  border-radius: 10px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.2s ease;
}

/* 图标 */
.menu-icon {
  margin-right: 12px;
}

/* hover */
.custom-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* 当前激活 */
.router-link-active {
  background: rgba(99, 102, 241, 0.3); /* 保留少许紫色点缀，或改为浅灰色 */
}
</style>
