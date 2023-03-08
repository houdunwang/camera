<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'
import FooterMenu from './FooterMenu.vue'

const { config } = useConfigStore()
const constraints = {
  audio: false,
  video: {
    deviceId: config.deviceId
    // width: 1920,
    // height: 1080
  }
} as MediaStreamConstraints

onMounted(() => {
  const video = document.querySelector('video')!
  config.videoElement = video
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
  })
})
</script>
<template>
  <main
    class="w-screen h-screen overflow-hidden bg-pink-500 relative"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <div
      class="absolute w-screen top-1/2 -translate-y-1/2 text-white font-light text-base flex flex-col justify-center items-center"
    >
      摄像头加载中...
      <div class="text-xs opacity-90">如果长时间不加载，在软件配置中切换摄像头</div>
    </div>
    <video
      class="object-cover h-screen w-screen relative z-10"
      autoplay
      :class="{ 'rounded-full': config.rounded }"
    ></video>

    <!-- 菜单图标 -->
    <FooterMenu />
  </main>
</template>

<style lang="scss" scoped></style>
