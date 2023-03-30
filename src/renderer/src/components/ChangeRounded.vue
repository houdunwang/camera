<script setup lang="ts">
import { InnerShadowUp } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()
//修改窗口尺寸
const changeRounded = (): void => {
  config.cameraSize.rounded = !config.cameraSize.rounded
  config.cameraSize.aspectRatio = config.cameraSize.rounded ? 1 : 16 / 9
  window.api.setWindowSize({ aspectRatio: config.cameraSize.aspectRatio })
}
</script>

<template>
  <!-- 切换圆角摄像头 -->
  <el-tooltip
    v-if="config.page === 'camera'"
    :hide-after="0"
    class="box-item"
    content="圆角切换"
    effect="dark"
    placement="top"
  >
    <InnerShadowUp
      theme="outline"
      size="25"
      :stroke-width="3"
      class="icon"
      @click="changeRounded"
    />
  </el-tooltip>
</template>

<style lang="scss"></style>
