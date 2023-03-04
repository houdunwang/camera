<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'

const { config } = useConfigStore()
const constraints = {
  audio: false,
  video: {
    deviceId: config.deviceId
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
    class="w-screen h-screen overflow-hidden border-red-50 border-[]"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video class="object-cover h-full" autoplay :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<style lang="scss" scoped></style>
