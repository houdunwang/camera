<script setup lang="ts">
import { InnerShadowUp, Square } from '@icon-park/vue-next'
import useAuth from '@renderer/composables/useAuth'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const { authorize } = useAuth()

const changeRounded = () => {
  if (!authorize(() => {})) return
  config.page = 'camera'
  config.rounded = !config.rounded
  config.aspectRatio = config.rounded ? 1 : 16 / 9
  window.api.toggleRound({ aspectRatio: config.aspectRatio })
}
window.api.toggleRound({ aspectRatio: config.aspectRatio })
</script>

<template>
  <!-- 切换圆角摄像头 -->
  <InnerShadowUp theme="outline" size="20" :stroke-width="3" class="icon" @click="changeRounded" />
  <!-- <square theme="outline" size="20" class="icon" :strokeWidth="3" v-else @click="changeRounded" /> -->
</template>

<style lang="scss"></style>
