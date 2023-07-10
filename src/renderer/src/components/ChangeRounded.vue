<script setup lang="ts">
import { InnerShadowUp } from '@icon-park/vue-next'
// import useSoft from '@renderer/composables/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
// const { checkSecret } = useSoft()

const changeRounded = () => {
  // if (checkSecret() === false) return
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
</template>

<style lang="scss"></style>
