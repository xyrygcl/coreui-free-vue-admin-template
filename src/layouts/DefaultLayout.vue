<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div>
    <!-- 左侧菜单 -->
    <AppSidebar />

    <!-- 右侧主体 -->
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <!-- 顶部导航 -->
      <AppHeader />

      <!-- 页面内容 -->
      <div class="body flex-grow-1 px-3 py-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  margin-left: 256px;
  background: #1f2937;
}

.body {
  min-height: 100vh;
  background: #1f2937;
}
</style>
