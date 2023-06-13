<script setup lang="ts">
import Footer from '@renderer/components/Footer.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'

const { config } = useConfigStore()

const constraints = {
  audio: false,
  video: {
    deviceId: config.deviceId,
    width: 1920,
    height: 1080
  }
} as MediaStreamConstraints

onMounted(() => {
  const video = document.querySelector('video')! as HTMLVideoElement
  config.videoElement = video

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
  })
})
</script>
<template>
  <main
    id="camera"
    class="w-screen h-screen relative"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <div
      class="border-4 border-transparent absolute w-screen h-screen bg-slate-700 text-white font-light text-base flex flex-col justify-center items-center"
    >
      摄像头加载中...
      <div class="text-xs opacity-90">如果长时间不加载，在软件配置中切换摄像头</div>
    </div>
    <video
      class="object-cover h-screen w-screen relative z-10 box-border"
      :style="config.flip ? `transform: rotateY(180deg)` : ''"
      autoplay
      :class="{ 'rounded-full': config.rounded }"
    ></video>

    <!-- 菜单图标 -->
    <Footer />
  </main>
</template>

<style lang="scss" scoped></style>
