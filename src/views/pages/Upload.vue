<script setup>
import { ref } from 'vue'
import axios from 'axios'

/*
|--------------------------------------------------------------------------
| 状态
|--------------------------------------------------------------------------
*/

const selectedFile = ref(null)
const uploading = ref(false)
const uploadProgress = ref(0)
const message = ref('')
const errorMessage = ref('')

/*
|--------------------------------------------------------------------------
| 文件选择
|--------------------------------------------------------------------------
*/

const handleFileChange = (event) => {
  const file = event.target.files[0]

  message.value = ''
  errorMessage.value = ''

  if (!file) {
    return
  }

  /*
  |--------------------------------------------------------------------------
  | 文件类型校验
  |--------------------------------------------------------------------------
  */

  const allowedTypes = [
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/pdf',
  ]

  if (!allowedTypes.includes(file.type)) {
    errorMessage.value = '仅支持 PPT、PPTX、PDF 文件'
    return
  }

  /*
  |--------------------------------------------------------------------------
  | 文件大小限制（50MB）
  |--------------------------------------------------------------------------
  */

  const maxSize = 50 * 1024 * 1024

  if (file.size > maxSize) {
    errorMessage.value = '文件不能超过 50MB'
    return
  }

  selectedFile.value = file
}

/*
|--------------------------------------------------------------------------
| 上传文件
|--------------------------------------------------------------------------
*/

const uploadFile = async () => {
  errorMessage.value = ''
  message.value = ''

  if (!selectedFile.value) {
    errorMessage.value = '请先选择文件'
    return
  }

  try {
    uploading.value = true
    uploadProgress.value = 0

    /*
    |--------------------------------------------------------------------------
    | FormData
    |--------------------------------------------------------------------------
    */

    const formData = new FormData()

    formData.append('file', selectedFile.value)

    /*
    |--------------------------------------------------------------------------
    | token 预留
    |--------------------------------------------------------------------------
    */

    const token = localStorage.getItem('token')

    /*
    |--------------------------------------------------------------------------
    | axios 请求
    |--------------------------------------------------------------------------
    */

    const response = await axios.post(
      '/api/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',

          /*
          |--------------------------------------------------------------------------
          | token 预留
          |--------------------------------------------------------------------------
          */

          Authorization: token
            ? `Bearer ${token}`
            : '',
        },

        /*
        |--------------------------------------------------------------------------
        | 上传进度
        |--------------------------------------------------------------------------
        */

        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            uploadProgress.value = Math.round(
              (progressEvent.loaded * 100) /
              progressEvent.total
            )
          }
        },
      }
    )

    console.log(response.data)

    message.value = '上传成功'

    /*
    |--------------------------------------------------------------------------
    | 清空文件
    |--------------------------------------------------------------------------
    */

    selectedFile.value = null
  } catch (error) {
    console.error(error)

    /*
    |--------------------------------------------------------------------------
    | 错误处理
    |--------------------------------------------------------------------------
    */

    if (error.response) {
      errorMessage.value =
        error.response.data?.message ||
        '服务器上传失败'
    } else if (error.request) {
      errorMessage.value =
        '无法连接服务器'
    } else {
      errorMessage.value =
        '上传发生错误'
    }
  } finally {
    uploading.value = false
  }
}
</script>

<template>
  <div class="upload-page">

    <!-- 标题 -->

    <div class="page-header">
      <h2>上传课程文件</h2>

      <p>
        支持 PPT、PPTX、PDF 文件上传
      </p>
    </div>

    <!-- 上传卡片 -->

    <div class="upload-card">

      <!-- 文件选择 -->

      <label class="upload-select">
        选择文件

        <input
          type="file"
          accept=".ppt,.pptx,.pdf"
          @change="handleFileChange"
        />
      </label>

      <!-- 文件信息 -->

      <div
        v-if="selectedFile"
        class="file-info"
      >
        <div class="file-name">
          {{ selectedFile.name }}
        </div>

        <div class="file-size">
          {{
            (
              selectedFile.size /
              1024 /
              1024
            ).toFixed(2)
          }}
          MB
        </div>
      </div>

      <!-- 上传按钮 -->

      <button
        class="upload-btn"
        :disabled="uploading"
        @click="uploadFile"
      >
        {{
          uploading
            ? '上传中...'
            : '开始上传'
        }}
      </button>

      <!-- 上传进度 -->

      <div
        v-if="uploading"
        class="progress-wrapper"
      >
        <div class="progress-bar">
          <div
            class="progress-inner"
            :style="{
              width: uploadProgress + '%'
            }"
          />
        </div>

        <span>
          {{ uploadProgress }}%
        </span>
      </div>

      <!-- 成功提示 -->

      <div
        v-if="message"
        class="success-message"
      >
        {{ message }}
      </div>

      <!-- 错误提示 -->

      <div
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-page {
  width: 100%;
  max-width: 900px;
}

.page-header {
  margin-bottom: 28px;
}

.page-header h2 {
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
}

.page-header p {
  color: #9ca3af;
  margin: 0;
}

.upload-card {
  background: #1f2937;
  border-radius: 14px;
  padding: 32px;
}

.upload-select {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #4f46e5;
  color: white;

  padding: 14px 24px;

  border-radius: 10px;

  cursor: pointer;

  font-weight: 600;

  transition: 0.2s;
}

.upload-select:hover {
  background: #4338ca;
}

.upload-select input {
  display: none;
}

.file-info {
  margin-top: 24px;

  background: rgba(255,255,255,0.04);

  border-radius: 10px;

  padding: 16px;
}

.file-name {
  color: white;
  font-weight: 600;
  margin-bottom: 6px;
}

.file-size {
  color: #9ca3af;
  font-size: 14px;
}

.upload-btn {
  margin-top: 24px;

  background: #10b981;
  color: white;

  border: none;

  padding: 14px 28px;

  border-radius: 10px;

  cursor: pointer;

  font-size: 16px;
  font-weight: 600;

  transition: 0.2s;
}

.upload-btn:hover {
  background: #059669;
}

.upload-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.progress-wrapper {
  margin-top: 24px;
}

.progress-bar {
  width: 100%;
  height: 12px;

  background: rgba(255,255,255,0.08);

  border-radius: 999px;

  overflow: hidden;

  margin-bottom: 10px;
}

.progress-inner {
  height: 100%;

  background: #4f46e5;

  transition: width 0.2s;
}

.success-message {
  margin-top: 24px;

  background: rgba(16,185,129,0.15);

  color: #34d399;

  padding: 14px 18px;

  border-radius: 10px;
}

.error-message {
  margin-top: 24px;

  background: rgba(239,68,68,0.15);

  color: #f87171;

  padding: 14px 18px;

  border-radius: 10px;
}
</style>
