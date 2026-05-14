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

    <!-- 新增：折叠按钮（固定在底部，右上角的小标） -->
    <CSidebarToggler
      class="sidebar-toggler"
      @click="sidebar.toggleUnfoldable()"
    />
  </CSidebar>
</template>

<style scoped>
.sidebar-custom {
  width: 240px;
  min-height: 100vh;           /* 确保占满整个视口高度 */
  height: 100%;                 /* 修复某些情况下的高度溢出 */
  background: #1a1a1a !important;  /* 接近黑色的深灰，加 !important 防止覆盖 */
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
}

/* 顶部 Logo */
.sidebar-brand {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

/* 标题 */
.logo-text {
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
}

/* 菜单区域（中间部分，可滚动） */
.nav-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
}

/* 链接 */
.custom-link {
  display: flex;
  align-items: center;
  margin: 4px 12px;
  padding: 12px 16px;
  border-radius: 10px;
  color: #ffffff !important;   /* 文字强制白色 */
  text-decoration: none;
  transition: all 0.2s ease;
}

/* 图标 */
.menu-icon {
  margin-right: 12px;
  color: #ffffff !important;   /* 图标强制白色 */
}

/* hover */
.custom-link:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

/* 当前激活 */
.router-link-active {
  background: rgba(99, 102, 241, 0.3);
  color: #ffffff;
}

/* 折叠按钮（右上角小标） */
.sidebar-toggler {
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 12px;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.sidebar-toggler:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
