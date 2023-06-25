<script setup lang="ts">
import { FullScreen } from '@icon-park/vue-next'
// import useCamera from '@renderer/composables/useCamera'
import { ref } from 'vue'
// const { toggleFullscreen } = useCamera()

const isFullScreen = ref<boolean>(false)
const toggleFullScreen = () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}

document.addEventListener('fullscreenchange', (e) => {
  isFullScreen.value = Boolean(document.fullscreenElement)
})
</script>

<template>
  <full-screen
    theme="filled"
    size="18"
    fill="#ffffff"
    class="icon"
    :strokeWidth="5"
    @click="toggleFullScreen"
  />
</template>

<style lang="scss"></style>
