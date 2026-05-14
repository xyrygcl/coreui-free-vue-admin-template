<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <AppSidebar />

    <!-- 右侧主体 -->
    <div class="wrapper d-flex flex-column min-vh-100">
      <!-- 顶部导航 -->
      <AppHeader />

      <!-- 页面内容 -->
      <main class="body flex-grow-1 px-4 py-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  background: #1f2937;
  min-height: 100vh;
}

.wrapper {
  margin-left: 256px;
  background: #1f2937;
  min-height: 100vh;
}

.body {
  background: #1f2937;
  color: #ffffff;
  min-height: 100vh;
}

/* 移动端 */
@media (max-width: 991px) {
  .wrapper {
    margin-left: 0;
  }
}
</style>
