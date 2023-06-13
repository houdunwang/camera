<script setup lang="ts">
import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
try {
  const res = await http.request({
    url: `/token/check`,
    method: 'POST',
    data: {
      token: config.token,
      soft: 'camera'
    }
  })
} catch (error) {
  config.token = ''
}
</script>

<template>
  <main class=""></main>
</template>
