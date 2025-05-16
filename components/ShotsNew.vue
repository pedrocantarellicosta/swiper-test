<template>
  <div class="shorts-swiper" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <video
      ref="videoRef"
      :key="videos[currentIndex].src"
      :src="videos[currentIndex].src"
      class="shorts-video"
      :muted="!isSongOn"
      autoplay
      loop
      playsinline
      preload="auto"
      @canplay="onVideoCanPlay"
    />
    <button v-if="showUnmuteButton" class="unmute-btn" @click="unmuteCurrent">🔊 Tap to enable audio</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videos = ref([
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { src: 'https://www.w3schools.com/html/movie.mp4' },
  { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' }
])
const currentIndex = ref(0)
const videoRef = ref(null)
const isSongOn = ref(false)
const showUnmuteButton = ref(true)
let touchStartY = 0

const onVideoCanPlay = () => {
  const video = videoRef.value
  if (video) {
    video.muted = !isSongOn.value
    video.play().catch(() => {})
  }
}

const unmuteCurrent = () => {
  isSongOn.value = true
  showUnmuteButton.value = false
  onVideoCanPlay()
}

// Simple vertical swipe detection
const onTouchStart = e => {
  touchStartY = e.touches[0].clientY
}
const onTouchEnd = e => {
  const touchEndY = e.changedTouches[0].clientY
  if (touchEndY < touchStartY - 50 && currentIndex.value < videos.value.length - 1) {
    // Swipe up
    currentIndex.value++
  } else if (touchEndY > touchStartY + 50 && currentIndex.value > 0) {
    // Swipe down
    currentIndex.value--
  }
}

// No need to call playCurrentVideo() on swipe; let @loadeddata handle it
onMounted(() => {
  // Optionally, you can call play on mount for the first video
  // but @loadeddata will handle it as well
})
</script>

<style scoped>
.shorts-swiper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  position: relative;
  overflow: hidden;
}

.shorts-video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
}

.unmute-btn {
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 1000;
  padding: 10px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
