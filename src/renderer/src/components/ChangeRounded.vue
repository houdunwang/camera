<script setup lang="ts">
import { InnerShadowUp } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

const changeRounded = () => {
  config.rounded = !config.rounded
  config.aspectRatio = config.rounded ? 1 : 16 / 9
  window.api.toggleRound({ aspectRatio: config.aspectRatio })
}
window.api.toggleRound({ aspectRatio: config.aspectRatio })
</script>

<template>
  <!-- 切换圆角摄像头 -->
  <el-tooltip class="box-item" effect="dark" content="圆角切换" placement="top" :hide-after="0">
    <InnerShadowUp
      v-if="config.page == 'camera'"
      theme="outline"
      size="20"
      :stroke-width="3"
      class="icon"
      @click="changeRounded"
    />
  </el-tooltip>
</template>

<style lang="scss"></style>
