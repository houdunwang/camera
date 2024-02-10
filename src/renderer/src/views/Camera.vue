<script setup lang="ts">
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
    class="w-screen h-screen drag aspect-square overflow-hidden relative z-0"
    :style="`border:solid ${config.borderWidth}px ${config.borderColor};border-radius:${
      config.rounded ? '50%' : config.borderRadius + 'px'
    }`"
  >
    <div
      class="border-4 border-transparent absolute w-screen h-screen bg-slate-700 text-white font-light text-base flex flex-col justify-center items-center"
    >
      摄像头加载中...
      <div class="text-xs opacity-90">如果长时间不加载，在软件配置中切换摄像头</div>
    </div>
    <video
      class="object-cover h-full w-full relative z-10 aspect-video"
      :style="{
        transform: config.flip ? `rotateY(180deg)` : '',
        height: config.rounded ? '100vh' : ''
      }"
      autoplay
    ></video>
  </main>
</template>

<style lang="scss" scoped></style>
