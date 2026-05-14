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
  <CContainer fluid class="p-4">
    <CCard class="bg-dark text-light border-0 shadow-lg">
      <CCardBody>
        <h2 class="mb-3">欢迎使用沃转课</h2>

        <p class="text-medium-emphasis mb-4">
          课程上传与作品管理平台
        </p>

        <CRow class="g-4">
          <CCol md="4">
            <CCard class="bg-secondary text-light border-0">
              <CCardBody>
                <h5>立即上传</h5>
                <p class="mb-0">
                  上传你的课程内容
                </p>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="4">
            <CCard class="bg-secondary text-light border-0">
              <CCardBody>
                <h5>我的作品</h5>
                <p class="mb-0">
                  管理你的课程资源
                </p>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md="4">
            <CCard class="bg-secondary text-light border-0">
              <CCardBody>
                <h5>个人中心</h5>
                <p class="mb-0">
                  查看账号信息
                </p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </CContainer>
</template>
