<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import Updater from './components/Updater.vue'

const { config } = useConfigStore()
</script>

<template>
  <Suspense>
    <main class="relative">
      <Updater />
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
