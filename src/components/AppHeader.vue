<script setup>
import { ref, onMounted } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.js'

const sidebar = useSidebarStore()

const headerClassNames = ref('mb-4 p-0')

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'mb-4 p-0'
    }
  })
})
</script>

<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>

      <CHeaderToggler
        @click="sidebar.toggleVisible()"
        style="margin-inline-start: -14px"
      >
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <CHeaderNav class="d-none d-md-flex">
        <CNavItem>
          <CNavLink href="/dashboard">
            Dashboard
          </CNavLink>
        </CNavItem>
      </CHeaderNav>

    </CContainer>
  </CHeader>
</template>
