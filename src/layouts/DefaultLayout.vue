<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <AppSidebar />

    <!-- 右侧内容 -->
    <div class="wrapper">
      <!-- 顶部 -->
      <AppHeader />

      <!-- 页面主体 -->
      <main class="body">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 整体布局 */
.layout {
  display: flex;

  min-height: 100vh;
  width: 100%;

  background: #111827;

  overflow-x: hidden;
}

/* 右侧区域 */
.wrapper {
  flex: 1;

  display: flex;
  flex-direction: column;

  min-width: 0;

  background: #111827;

  overflow-x: hidden;
}

/* 页面主体 */
.body {
  flex: 1;

  padding: 32px 40px;

  background: #111827;
  color: #ffffff;

  overflow-x: hidden;

  display: flex;
  justify-content: center;
}

/* 页面内容容器 */
.body > * {
  width: 100%;
  max-width: 1200px;
}

/* 移动端 */
@media (max-width: 991px) {
  .layout {
    flex-direction: column;
  }

  .body {
    padding: 20px 16px;
  }
}
</style>
