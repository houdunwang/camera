<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'

const { config } = useConfigStore()
//镜像画面
// const changeFlipHorizontally = () => {
//   config.flip = !config.flip
//   config.videoElement!.style.transform = config.flip ? 'rotateY(180deg)' : ''
// }
</script>

<template>
  <FlipHorizontally
    v-if="config.page == 'camera'"
    theme="outline"
    size="20"
    :stroke-width="3"
    class="icon"
    @click="config.flip = !config.flip"
  />
</template>

<style lang="scss"></style>
