<script setup lang="ts">
import { FullScreen } from '@icon-park/vue-next'
import { ref } from 'vue'
const isFullScreen = ref<boolean>(false)
const toggleFullScreen = async () => {
  isFullScreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullScreen.value = !isFullScreen.value
}

document.addEventListener('fullscreenchange', () => {
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
