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
}

.wrapper {
  margin-left: 280px;   /* 与侧边栏宽度一致，防止覆盖 */
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #ffffff;
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
  .wrapper {
    margin-left: 0;
  }
}
</style>
