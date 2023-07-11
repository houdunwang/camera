<script setup lang="ts">
import { FlipHorizontally } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const submit = async () => {
  // if (!config.secret) config.page = 'secret'
  // else {
  config.page = 'camera'
  config.flip = !config.flip
  // }
}
</script>

<template>
  <FlipHorizontally theme="outline" size="20" :stroke-width="3" class="icon" @click="submit" />
</template>

<style lang="scss"></style>
