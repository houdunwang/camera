<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'

const { config } = useConfigStore()
//镜像画面
const changeFlipHorizontally = (): void => {
  config.flip = !config.flip
  config.videoElement!.style.transform = config.flip ? 'rotateY(180deg)' : ''
}
</script>

<template>
  <el-tooltip
    v-if="config.page === 'camera'"
    :hide-after="0"
    class="box-item"
    content="摄像头镜像"
    effect="dark"
    placement="top"
  >
    <FlipHorizontally
      theme="outline"
      size="25"
      :stroke-width="3"
      class="icon"
      @click="changeFlipHorizontally"
    />
  </el-tooltip>
</template>

<style lang="scss"></style>
