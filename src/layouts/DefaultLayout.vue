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
  background: #f0f2f5; /* 整体背景改为浅灰（可选） */
  overflow-x: hidden;
}

/* 右侧区域 */
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #ffffff; /* 改为白色 */
  overflow-x: hidden;
}

/* 页面主体 */
.body {
  flex: 1;
  padding: 24px;
  background: #ffffff; /* 白色背景 */
  color: #333333;      /* 深色文字 */
  overflow-x: hidden;
}

/* 移动端适配 */
@media (max-width: 991px) {
  .layout {
    flex-direction: column;
  }

  .body {
    padding: 16px;
  }
}
</style>
