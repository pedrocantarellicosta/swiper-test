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
      <div id="thumb-player">
        <img v-if="showThumb && swiperInstance?.activeIndex === index" :src="video.thumb" class="shorts-thumb" />
      </div>
      <div id="video-player"></div>
    </SwiperSlide>
  </Swiper>

  <button v-if="showUnmuteButton" class="unmute-btn" @click="unmuteCurrent">🔊 Tap to enable audio</button>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper'
import { onMounted, ref, nextTick } from 'vue'

const swiperRef = ref(null)
const swiperInstance = ref(null)
const isSongOn = ref(false)
const showUnmuteButton = ref(true)
const showThumb = ref(true)
const currentIndex = ref(0)
let videoEl = null

const videos = ref([
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    thumb: 'https://dummyimage.com/720x1280/000/fff&text=Movie+2'
  },
  {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    thumb: 'https://dummyimage.com/720x1280/222/fff&text=Flower'
  }
])

const createVideoElement = () => {
  const video = document.createElement('video')
  video.className = 'shorts-video'
  video.autoplay = true
  video.loop = true
  video.playsInline = true
  video.preload = 'auto'
  video.muted = !isSongOn.value
  video.src = videos.value[currentIndex.value].src
  video.style.display = 'none'
  video.addEventListener('canplay', onVideoCanPlay)
  return video
}

const moveVideoToActiveSlide = index => {
  nextTick(() => {
    const slides = document.querySelectorAll('.shorts-slide')
    const videoPlayerDiv = slides[index]?.querySelector('#video-player')
    if (videoPlayerDiv) {
      videoPlayerDiv.innerHTML = ''
      videoPlayerDiv.appendChild(videoEl)
      videoEl.style.display = ''
    }
  })
}

const onSwiperInit = swiper => {
  swiperInstance.value = swiper
  nextTick(() => {
    moveVideoToActiveSlide(swiper.activeIndex)
  })
}

const onSlideChange = () => {
  const index = swiperInstance.value?.activeIndex ?? 0
  currentIndex.value = index
  showThumb.value = true
  nextTick(() => {
    moveVideoToActiveSlide(index)
    videoEl.src = videos.value[index].src
    videoEl.load()
  })
}

function onVideoCanPlay() {
  showThumb.value = false
  videoEl.muted = !isSongOn.value
  videoEl.play().catch(() => {})
}

const unmuteCurrent = () => {
  isSongOn.value = true
  showUnmuteButton.value = false
  onVideoCanPlay()
}

onMounted(() => {
  videoEl = createVideoElement()
  moveVideoToActiveSlide(0)
})
</script>

<style>
#video-player {
  width: 100vw;
  height: 100vh;
  position: relative; /* <-- changed from absolute to relative */
  top: 0;
  left: 0;
  z-index: 1;
}

.shorts-slide {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}

.shorts-video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.shorts-thumb {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.unmute-btn {
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 9999; /* Make sure it's above everything */
  padding: 10px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
