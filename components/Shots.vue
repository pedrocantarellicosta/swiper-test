<template>
  <Swiper
    ref="swiperRef"
    :modules="[Mousewheel]"
    direction="vertical"
    slides-per-view="1"
    mousewheel
    class="shorts-swiper"
    @slide-change="onSlideChange"
    @swiper="onSwiperInit"
  >
    <SwiperSlide v-for="(video, index) in videos" :key="index" class="shorts-slide">
      <video :ref="el => (videoRefs[index] = el)" :src="video.src" class="shorts-video" muted loop playsinline preload="auto" />
    </SwiperSlide>
  </Swiper>

  <button v-if="showUnmuteButton" class="unmute-btn" @click="unmuteCurrent">🔊 Tap to enable audio</button> 
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper'
import { ref, nextTick, onMounted } from 'vue'

const swiperRef = ref(null)
const isSongOn = ref(false) // Tracks whether audio is enabled
const swiperInstance = ref(null)
const videoRefs = ref([]) // References to all video elements
const videos = ref([
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { src: 'https://www.w3schools.com/html/movie.mp4' },
  { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' }
])

const showUnmuteButton = ref(true) // Controls visibility of the unmute button

// Initialize Swiper and play the first video
const onSwiperInit = swiper => {
  swiperInstance.value = swiper
  nextTick(() => {
    playVideo(swiper.activeIndex)
  })
}

// Play the active video
const playVideo = index => {
  const video = videoRefs.value[index]
  if (video) {
    video.muted = !isSongOn.value // Mute or unmute based on isSongOn
    video
      .play()
      .then(() => {
        console.log(`Video at index ${index} is playing`)
      })
      .catch(err => console.warn('Autoplay failed:', err))
  }
}

// Pause all videos except the active one
const pauseAllVideos = () => {
  videoRefs.value.forEach((video, index) => {
    if (video && index !== swiperInstance.value?.activeIndex) {
      video.pause()
      video.currentTime = 0.1
    }
  })
}

// Handle slide change
const onSlideChange = () => {
  const index = swiperInstance.value?.activeIndex ?? 0
  pauseAllVideos() // Pause all non-active videos
  nextTick(() => {
    playVideo(index) // Play the active video
    // preloadNextVideo(index + 1) // Preload the next video
  })
}

// Preload the next video
// const preloadNextVideo = index => {
//   if (index >= videos.value.length) return // Ensure the index is within bounds
//   const video = videoRefs.value[index]
//   if (video) {
//     video.muted = true // Keep the video muted during preload
//     video.load() // Preload the video without playing it
//   }
// }

// Unmute the current video and enable audio for subsequent videos
const unmuteCurrent = () => {
  isSongOn.value = true
  showUnmuteButton.value = false

  // Unmute and trigger a play() on all videos (only works after user gesture)
  videoRefs.value.forEach((video, index) => {
    if (video) {
      video.muted = false
      // Play silently for iOS to "unlock" each media element
      video.play().catch(err => console.warn(`Video ${index} failed to play:`, err))
    }
  })

  // Optionally pause non-active videos again
  nextTick(() => {
    pauseAllVideos()
    const index = swiperInstance.value?.activeIndex ?? 0
    playVideo(index)
  })
}

// Play the first video on mount
onMounted(() => {
  nextTick(() => {
    playVideo(0)
  })
})
</script>

<style scoped>
.shorts-swiper,
.shorts-slide,
.shorts-video {
  height: 100vh;
  width: 100vw;
}

.shorts-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}

.shorts-video {
  object-fit: cover;
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
