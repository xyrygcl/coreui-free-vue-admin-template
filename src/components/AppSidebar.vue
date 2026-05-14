<script setup>
import { useSidebarStore } from '@/stores/sidebar.js'
import { RouterLink } from 'vue-router'

const sidebar = useSidebarStore()

const menuItems = [
  { title: '立即上传', icon: 'cil-cloud-upload', to: '/upload' },
  { title: '我的作品', icon: 'cil-library', to: '/courses' },
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
      <h3 class="logo-text">
        沃转课
      </h3>
    </CSidebarBrand>

    <!-- 菜单 -->
    <CSidebarNav class="nav-wrapper">
      <CNavItem
        v-for="item in menuItems"
        :key="item.title"
      >
        <RouterLink
          :to="item.to"
          class="nav-link custom-link"
        >
          <CIcon
            :icon="item.icon"
            class="menu-icon"
          />

          <span>
            {{ item.title }}
          </span>
        </RouterLink>
      </CNavItem>
    </CSidebarNav>
  </CSidebar>
</template>

<style scoped>
.sidebar-custom {
  width: 240px;
  min-height: 100vh;

  background: #111827;
  border-right: 1px solid rgba(255,255,255,0.06);
}

/* 顶部 Logo */
.sidebar-brand {
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(255,255,255,0.06);
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
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}

/* 当前激活 */
.router-link-active {
  background: rgba(99,102,241,0.22);
}
</style>
