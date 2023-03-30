<template>
  <el-tooltip
    v-if="config.page === 'setting'"
    :hide-after="0"
    class="box-item"
    content="显示摄像头"
    effect="dark"
    placement="top"
  >
    <CameraFive :stroke-width="3" class="icon" size="25" theme="outline" @click="switchCamera" />
  </el-tooltip>
</template>

<script lang="ts" setup>
import { CameraFive } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()

const switchCamera = (): void => {
  window.api.setWindowSize({
    aspectRatio: config.cameraSize.aspectRatio,
    width: config.cameraSize.width,
    height: config.cameraSize.height
  })
  config.page = 'camera'
}
</script>

<style scoped></style>
