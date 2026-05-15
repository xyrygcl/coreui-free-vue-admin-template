<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const loading = ref(false)

const videoList = ref([])

/*
  后端接口预留
*/
const API_BASE = 'https://your-backend-api.com'

/*
  token 预留
*/
const token = localStorage.getItem('token') || ''

/*
  获取作品列表
*/
const fetchVideos = async () => {
  loading.value = true

  try {
    /*
      后端接口示例：

      GET /videos

      返回：
      [
        {
          id: 1,
          title: '演示视频',
          url: 'https://xxx/video.mp4',
          createdAt: '2026-05-15'
        }
      ]
    */

    const res = await axios.get(`${API_BASE}/videos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    videoList.value = res.data || []
  } catch (error) {
    console.error(error)

    /*
      现在没后端时，先演示假数据
    */
    videoList.value = [
      {
        id: 1,
        title: 'PPT转视频演示',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        createdAt: '2026-05-15',
      },
    ]
  } finally {
    loading.value = false
  }
}

/*
  下载视频
*/
const downloadVideo = (video) => {
  window.open(video.url, '_blank')
}

/*
  删除视频
*/
const deleteVideo = async (id) => {
  const confirmDelete = confirm('确定删除这个视频吗？')

  if (!confirmDelete) return

  try {
    /*
      DELETE /videos/:id
    */

    await axios.delete(`${API_BASE}/videos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    videoList.value = videoList.value.filter(
      (item) => item.id !== id,
    )
  } catch (error) {
    console.error(error)
    alert('删除失败')
  }
}

onMounted(() => {
  fetchVideos()
})
</script>

<template>
  <div class="courses-page">
    <div class="page-header">
      <h2>我的作品</h2>

      <p>
        查看 PPT 转视频后的作品内容
      </p>
    </div>

    <!-- loading -->
    <div
      v-if="loading"
      class="loading-box"
    >
      正在加载作品...
    </div>

    <!-- 空状态 -->
    <div
      v-else-if="videoList.length === 0"
      class="empty-box"
    >
      暂无作品
    </div>

    <!-- 视频列表 -->
    <div
      v-else
      class="video-grid"
    >
      <div
        v-for="video in videoList"
        :key="video.id"
        class="video-card"
      >
        <!-- 视频播放器 -->
        <video
          :src="video.url"
          controls
          class="video-player"
        />

        <!-- 信息 -->
        <div class="video-info">
          <h4>{{ video.title }}</h4>

          <p>
            创建时间：{{ video.createdAt }}
          </p>
        </div>

        <!-- 操作 -->
        <div class="video-actions">
          <button
            class="download-btn"
            @click="downloadVideo(video)"
          >
            在线播放
          </button>

          <button
            class="delete-btn"
            @click="deleteVideo(video.id)"
          >
            删除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.courses-page {
  color: #ffffff;
}

.page-header {
  margin-bottom: 24px;
}

.page-header h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

.page-header p {
  color: #9ca3af;
}

.loading-box,
.empty-box {
  background: #1f2937;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  color: #9ca3af;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.video-card {
  background: #1f2937;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.05);
}

.video-player {
  width: 100%;
  height: 220px;
  background: #000000;
}

.video-info {
  padding: 16px;
}

.video-info h4 {
  margin-bottom: 8px;
  font-size: 18px;
}

.video-info p {
  color: #9ca3af;
  margin: 0;
}

.video-actions {
  display: flex;
  gap: 12px;
  padding: 0 16px 16px;
}

.download-btn,
.delete-btn {
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
}

.download-btn {
  background: #2563eb;
}

.download-btn:hover {
  background: #1d4ed8;
}

.delete-btn {
  background: #dc2626;
}

.delete-btn:hover {
  background: #b91c1c;
}
</style>
