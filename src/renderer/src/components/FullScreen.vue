<script setup lang="ts">
import { FullScreen } from '@icon-park/vue-next'
import useCamera from '@renderer/composables/useCamera'
const { toggleFullscreen } = useCamera()
</script>

<template>
  <full-screen
    theme="filled"
    size="20"
    fill="#ffffff"
    class="icon"
    :strokeWidth="5"
    @click="toggleFullscreen"
  />
</template>

<style lang="scss"></style>
