<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="layout">
    <AppSidebar />
    <div class="wrapper">
      <AppHeader />
      <main class="body">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f0f2f5;
  overflow: hidden; /* 防止子元素撑出滚动条 */
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #ffffff;
  min-height: 100vh; /* 与侧边栏等高 */
  overflow-y: auto;  /* 内容滚动 */
}

.body {
  flex: 1;
  padding: 24px;
  background: #ffffff;
  color: #333333;
}

@media (max-width: 991px) {
  .layout {
    flex-direction: column;
  }
  .body {
    padding: 16px;
  }
}
</style>
