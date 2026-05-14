<script setup>
import { ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()
const headerClassNames = ref('p-0 border-bottom border-light')
</script>

<template>
  <CHeader :class="headerClassNames" position="sticky">
    <CContainer fluid class="header-container px-4">
      <!-- 左侧菜单按钮 -->
      <CHeaderToggler class="menu-btn" @click="sidebar.toggleVisible()">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <!-- 中间标题 -->
      <h3 class="header-title">沃转课</h3>

      <!-- 右侧铃铛 -->
      <CNav class="header-right">
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
      </CNav>
    </CContainer>
  </CHeader>
</template>

<style scoped>
.header-container {
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
  background: #ffffff;   /* 白色背景 */
  border-bottom: 1px solid #e0e0e0; /* 浅灰色分隔线 */
}

/* 左侧按钮 */
.menu-btn {
  color: #333333;    /* 深色图标 */
  z-index: 2;
}

/* 中间标题 */
.header-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: #333333;    /* 深色文字 */
}

/* 右侧区域 */
.header-right {
  margin-left: auto;
}

.header-right a {
  color: #333333;    /* 深色图标 */
}
</style>
