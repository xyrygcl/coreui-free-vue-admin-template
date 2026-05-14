<script setup>
import { ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()

const headerClassNames = ref(
  'p-0 border-bottom border-dark'
)
</script>

<template>
  <CHeader
    :class="headerClassNames"
    position="sticky"
  >
    <CContainer
      fluid
      class="header-container px-4"
    >
      <!-- 左侧菜单按钮 -->
      <CHeaderToggler
        class="menu-btn"
        @click="sidebar.toggleVisible()"
      >
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <!-- 中间标题 -->
      <h3 class="header-title">
        沃转课
      </h3>

      <!-- 右侧铃铛已删除 -->
    </CContainer>
  </CHeader>
</template>

<style scoped>
.header-container {
  position: relative;

  display: flex;
  align-items: center;

  height: 64px;

  background: #111827;
}

/* 左侧按钮 */
.menu-btn {
  color: white;
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

  color: white;
}

/* 右侧区域（保留样式，即使已无内容） */
.header-right {
  margin-left: auto;
}

.header-right a {
  color: white;
}
</style>
