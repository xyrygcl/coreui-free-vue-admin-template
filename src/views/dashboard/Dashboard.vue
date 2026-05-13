<script setup>
import MainChart from './MainChart.vue'

// Progress bar mock data
const progressGroupExample1 = [
  { title: 'Monday', value1: 34, value2: 78 },
  { title: 'Tuesday', value1: 56, value2: 94 },
  { title: 'Wednesday', value1: 12, value2: 67 },
  { title: 'Thursday', value1: 43, value2: 91 },
  { title: 'Friday', value1: 22, value2: 73 },
  { title: 'Saturday', value1: 53, value2: 82 },
  { title: 'Sunday', value1: 9, value2: 69 },
]

const progressGroupExample2 = [
  { title: 'Male', value: 53 },
  { title: 'Female', value: 43 },
]

const progressGroupExample3 = [
  { title: 'Organic Search', percent: 56, value: '191,235' },
  { title: 'Facebook', percent: 15, value: '51,223' },
  { title: 'Twitter', percent: 11, value: '37,564' },
  { title: 'LinkedIn', percent: 8, value: '27,319' },
]

// Table mock data without local avatars
const tableExample = [
  {
    user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
    country: { name: 'USA', flag: 'cif-us' },
    usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
    payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
    activity: '10 sec ago',
  },
  {
    user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
    country: { name: 'Brazil', flag: 'cif-br' },
    usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
    payment: { name: 'Visa', icon: 'cib-cc-visa' },
    activity: '5 minutes ago',
  },
  {
    user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
    country: { name: 'India', flag: 'cif-in' },
    usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
    payment: { name: 'Stripe', icon: 'cib-cc-stripe' },
    activity: '1 hour ago',
  },
]
</script>

<template>
  <div>
    <!-- Main Chart Card -->
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol :sm="5">
                <h4 id="traffic" class="card-title mb-0">Traffic</h4>
                <div class="small text-body-secondary">January - July 2023</div>
              </CCol>
            </CRow>
            <CRow>
              <MainChart style="height: 300px; max-height: 300px; margin-top: 40px" />
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow
              :xs="{ cols: 1, gutter: 4 }"
              :sm="{ cols: 2 }"
              :lg="{ cols: 4 }"
              :xl="{ cols: 5 }"
              class="mb-2 text-center"
            >
              <CCol v-for="(item, index) in progressGroupExample2" :key="index">
                <div class="text-body-secondary">{{ item.title }}</div>
                <div class="fw-semibold text-truncate">{{ item.value }}%</div>
                <CProgress class="mt-2" :value="item.value" thin :precision="1" />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>

    <!-- Table Card -->
    <CRow>
      <CCol :md="12">
        <CCard class="mb-4">
          <CCardHeader> Users </CCardHeader>
          <CCardBody>
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead class="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell class="bg-body-secondary text-center">User</CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">Country</CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">Usage</CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary text-center">Payment</CTableHeaderCell>
                  <CTableHeaderCell class="bg-body-secondary">Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableExample" :key="item.user.name">
                  <CTableDataCell>{{ item.user.name }}</CTableDataCell>
                  <CTableDataCell class="text-center">{{ item.country.name }}</CTableDataCell>
                  <CTableDataCell>
                    <div>{{ item.usage.value }}%</div>
                    <div class="text-body-secondary small">{{ item.usage.period }}</div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">{{ item.payment.name }}</CTableDataCell>
                  <CTableDataCell>{{ item.activity }}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
