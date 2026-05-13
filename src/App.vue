<script setup>
/**
 * App.vue - Main Application Component
 *
 * Root component for the app
 */
import { onBeforeMount } from 'vue'
import { useColorModes } from '@coreui/vue'
import { useThemeStore } from '@/stores/theme.js'

// Initialize CoreUI color modes with local storage key
const { isColorModeSet, setColorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)
const currentTheme = useThemeStore()

onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  if (theme) {
    setColorMode(theme)
    return
  }

  if (isColorModeSet()) {
    return
  }

  setColorMode(currentTheme.theme)
})
</script>

<template>
  <router-view />
</template>

<style>
/* 改成普通 CSS 引入，全局样式文件放在 src/assets/style.css */
@import '@/assets/style.css';

/* 示例样式可以移除或单独保留，如果需要可以手动复制到 style.css */
</style>
