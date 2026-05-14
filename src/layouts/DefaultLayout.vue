<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <AppSidebar />

    <!-- 右侧区域 -->
    <div class="wrapper">
      <!-- 顶部导航 -->
      <AppHeader />

      <!-- 页面内容 -->
      <main class="body">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  background: #111827;
  min-height: 100vh;
}

/* 右侧整体 */
.wrapper {
  background: #111827;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
}

/* 页面主体 */
.body {
  flex: 1;

  background: #111827;
  color: #ffffff;

  padding: 24px;

  overflow-x: hidden;
}

/* 桌面端 */
@media (min-width: 992px) {
  .wrapper {
    margin-left: 256px;
  }
}

/* 移动端 */
@media (max-width: 991px) {
  .wrapper {
    margin-left: 0;
  }

  .body {
    padding: 16px;
  }
}
</style>
