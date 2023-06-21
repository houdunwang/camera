<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { FlipHorizontally } from '@icon-park/vue-next'

const { config } = useConfigStore()
const submit = () => {
  config.page = 'camera'
  config.flip = !config.flip
}
</script>

<template>
  <FlipHorizontally theme="outline" size="20" :stroke-width="3" class="icon" @click="submit" />
</template>

<style lang="scss"></style>
