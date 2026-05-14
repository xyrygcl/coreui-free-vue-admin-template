<script setup>
import {
  CContainer,
  CCard,
  CCardBody,
  CRow,
  CCol,
} from '@coreui/vue'
</script>

<template>
  <CContainer class="dashboard-container py-4">
    <!-- 欢迎区域 -->
    <CCard class="welcome-card border-0 shadow-sm mb-4">
      <CCardBody>
        <h2 class="mb-2 fw-bold text-white">
          欢迎使用沃转课
        </h2>

        <p class="text-light-emphasis mb-0">
          课程上传与作品管理平台
        </p>
      </CCardBody>
    </CCard>

    <!-- 功能卡片 -->
    <CRow class="g-4">
      <CCol lg="4" md="6" sm="12">
        <CCard class="feature-card border-0 h-100">
          <CCardBody>
            <h5 class="text-white mb-3">
              立即上传
            </h5>

            <p class="text-light-emphasis mb-0">
              上传你的课程内容
            </p>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol lg="4" md="6" sm="12">
        <CCard class="feature-card border-0 h-100">
          <CCardBody>
            <h5 class="text-white mb-3">
              我的作品
            </h5>

            <p class="text-light-emphasis mb-0">
              管理你的课程资源
            </p>
          </CCardBody>
        </CCard>
      </CCol>

      <CCol lg="4" md="12" sm="12">
        <CCard class="feature-card border-0 h-100">
          <CCardBody>
            <h5 class="text-white mb-3">
              个人中心
            </h5>

            <p class="text-light-emphasis mb-0">
              查看账号信息
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>
.dashboard-container {
  max-width: 1200px;
}

.welcome-card {
  background: #1f2937;
  border-radius: 14px;
}

.feature-card {
  background: #374151;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.text-light-emphasis {
  color: rgba(255, 255, 255, 0.7);
}
</style>
