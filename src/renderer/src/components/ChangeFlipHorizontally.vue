<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'

const { config } = useConfigStore()
//镜像画面
const changeFlipHorizontally = () => {
  config.flip = !config.flip
  config.videoElement!.style.transform = config.flip ? 'rotateY(180deg)' : ''
}
</script>

<template>
  <el-tooltip class="box-item" effect="dark" content="摄像头镜像" placement="top" :hide-after="0">
    <FlipHorizontally
      v-if="config.page == 'camera'"
      theme="outline"
      size="25"
      :stroke-width="3"
      class="icon"
      @click="changeFlipHorizontally"
    />
  </el-tooltip>
</template>

<style lang="scss"></style>
