<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'

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
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
  })
})
</script>
<template>
  <main
    class="w-screen h-screen overflow-hidden bg-gray-300"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video
      class="object-cover h-screen w-screen"
      autoplay
      :class="{ 'rounded-full': config.rounded }"
    ></video>
  </main>
</template>

<style lang="scss" scoped></style>
