<script setup lang="ts">
import Footer from '@renderer/components/Footer.vue'
import Updater from '@renderer/hd/Updater.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './views/Camera.vue'
import Setting from './views/Setting.vue'
const { config } = useConfigStore()
config.page = 'camera'
</script>

<template>
  <Suspense>
    <main class="relative">
      <Updater v-if="config.page == 'updater'" />
      <!-- <Secret v-if="config.page == 'secret'" /> -->
      <Camera v-if="config.page == 'camera'" />
      <Setting v-if="config.page == 'setting'" />
      <!-- 菜单图标 -->
      <Footer />
    </main>
  </Suspense>
</template>
