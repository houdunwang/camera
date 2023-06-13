<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './views/Camera.vue'
import Setting from './views/Setting.vue'
import Secret from './views/Secret.vue'
import Updater from './views/Updater.vue'
// import useUpdater from './composables/useUpdater'
const { config } = useConfigStore()
config.page = 'updater'
// const { checkUpdate } = useUpdater()
// config.page = 'updater'
// checkUpdate()

//右键菜单
// const contextMenu = () => window.api.contextMenu()
</script>

<template>
  <Suspense>
    <main class="relative">
      <Updater v-if="config.page == 'updater'" />
      <Secret v-if="config.page == 'secret'" />
      <Camera v-if="config.page == 'camera'" />
      <Setting v-if="config.page == 'setting'" />
    </main>
  </Suspense>
</template>
