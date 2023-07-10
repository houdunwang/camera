<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'
// import useSoft from '@renderer/composables/useSoft'
// const { checkSecret } = useSoft()

const { config } = useConfigStore()
const submit = () => {
  // if (checkSecret() === false) return

  config.page = 'camera'
  config.flip = !config.flip
}
</script>

<template>
  <FlipHorizontally theme="outline" size="20" :stroke-width="3" class="icon" @click="submit" />
</template>

<style lang="scss"></style>
