<script setup>
import { useSidebarStore } from '@/stores/sidebar.js'
import { RouterLink } from 'vue-router'

const sidebar = useSidebarStore()

const menuItems = [
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

    <!-- 折叠/展开按钮（固定在底部） -->
    <CSidebarToggler
      class="sidebar-toggler"
      @click="sidebar.toggleUnfoldable()"
    />
  </CSidebar>
</template>

<style scoped>
/* 强制黑灰背景，覆盖所有 CoreUI 默认样式 */
.sidebar-custom {
  width: 240px !important;
  min-height: 100vh !important;      /* 占满视口高度 */
  height: 100vh !important;           /* 确保高度 */
  background: #1a1a1a !important;     /* 接近黑色的深灰 */
  border-right: 1px solid #2a2a2a !important;
  display: flex;
  flex-direction: column;
}

/* Logo 区域 */
.sidebar-brand {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2a2a2a !important;
  flex-shrink: 0;
}

.logo-text {
  margin: 0;
  color: #ffffff !important;
  font-size: 30px;
  font-weight: 700;
}

/* 菜单容器，可滚动 */
.nav-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
}

/* 菜单项链接 */
.custom-link {
  display: flex;
  align-items: center;
  margin: 4px 12px;
  padding: 12px 16px;
  border-radius: 10px;
  color: #ffffff !important;     /* 文字白色 */
  text-decoration: none;
  transition: all 0.2s ease;
}

.menu-icon {
  margin-right: 12px;
  color: #ffffff !important;     /* 图标白色 */
}

.custom-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff !important;
}

/* 激活项（当前路由） */
.router-link-active {
  background: rgba(99, 102, 241, 0.3) !important;
  color: #ffffff !important;
}

/* 折叠按钮（底部） */
.sidebar-toggler {
  background: transparent !important;
  border: none !important;
  color: #ffffff !important;
  padding: 16px !important;
  cursor: pointer !important;
  flex-shrink: 0;
  border-top: 1px solid #2a2a2a !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-toggler:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}
</style>
