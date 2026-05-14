<script setup>
import { useSidebarStore } from '@/stores/sidebar.js'
import { RouterLink } from 'vue-router'

const sidebarStore = useSidebarStore()

const menuItems = [
  { title: '立即上传', icon: 'cil-cloud-upload', to: '/upload' },
  { title: '我的作品', icon: 'cil-library', to: '/courses' },
  { title: '个人', icon: 'cil-user', to: '/profile' },
]
</script>

<template>
  <div class="app-sidebar-override">
    <CSidebar
      :unfoldable="sidebarStore.unfoldable"
      :visible="sidebarStore.visible"
      @visible-change="(val) => sidebarStore.toggleVisible(val)"
    >
      <!-- Logo 区域 -->
      <CSidebarBrand class="sidebar-brand">
        <h3 class="logo-text">沃转课</h3>
      </CSidebarBrand>

      <!-- 菜单列表 -->
      <CSidebarNav class="nav-wrapper">
        <CNavItem v-for="item in menuItems" :key="item.title">
          <RouterLink :to="item.to" class="nav-link custom-link" @click="() => {}">
            <CIcon :icon="item.icon" class="menu-icon" />
            <span class="menu-label">{{ item.title }}</span>
          </RouterLink>
        </CNavItem>
      </CSidebarNav>

      <!-- 折叠/展开按钮（必须放在侧边栏内部） -->
      <CSidebarToggler
        class="sidebar-toggler"
        @click="sidebarStore.toggleUnfoldable()"
      />
    </CSidebar>
  </div>
</template>

<style scoped>
/* 强制侧边栏样式覆盖所有 CoreUI 默认值 */
.app-sidebar-override :deep(.sidebar) {
  background-color: #000000 !important;  /* 纯黑背景 */
  width: 280px !important;               /* 加宽侧边栏 */
  min-width: 280px !important;
  max-width: 280px !important;
  height: 100vh !important;              /* 占满视口高度 */
  position: fixed !important;            /* 固定定位，不随页面滚动 */
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

/* 品牌区域 */
.app-sidebar-override :deep(.sidebar-brand) {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #2a2a2a;
  flex-shrink: 0;
}

.logo-text {
  margin: 0;
  color: #ffffff !important;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* 菜单容器 */
.app-sidebar-override :deep(.sidebar-nav) {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
}

/* 每个菜单项 */
.app-sidebar-override :deep(.nav-link) {
  display: flex !important;
  align-items: center;
  margin: 4px 12px !important;
  padding: 12px 16px !important;
  border-radius: 10px;
  color: #ffffff !important;
  text-decoration: none;
  transition: all 0.2s;
}

.menu-icon {
  margin-right: 12px;
  color: #ffffff !important;
  font-size: 1.2rem;
}

.menu-label {
  color: #ffffff !important;
  font-size: 15px;
  font-weight: 500;
}

.app-sidebar-override :deep(.nav-link:hover) {
  background: rgba(255,255,255,0.12) !important;
}

.app-sidebar-override :deep(.router-link-active) {
  background: rgba(99,102,241,0.4) !important;
}

/* 折叠按钮 */
.app-sidebar-override :deep(.sidebar-toggler) {
  background: transparent;
  border: none;
  color: #ffffff !important;
  padding: 16px;
  cursor: pointer;
  flex-shrink: 0;
  border-top: 1px solid #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-sidebar-override :deep(.sidebar-toggler:hover) {
  background: rgba(255,255,255,0.1);
}
</style>
