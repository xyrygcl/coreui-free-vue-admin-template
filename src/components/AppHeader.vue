<script setup>
import { ref, onMounted } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()
const headerClassNames = ref('mb-4 p-0 shadow-sm')
</script>

<template>
  <CHeader :class="headerClassNames" position="sticky">
    <CContainer fluid class="d-flex justify-content-between align-items-center px-4">
      <CHeaderToggler @click="sidebar.toggleVisible()">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <h3 class="m-0">沃转课</h3>

      <!-- 右上角铃铛 -->
      <CNav class="d-flex align-items-center">
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
      </CNav>
    </CContainer>
  </CHeader>
</template>
