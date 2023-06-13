<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './views/Camera.vue'
import Setting from './views/Setting.vue'
import Secret from './views/Secret.vue'
import Updater from './views/Updater.vue'
const { config } = useConfigStore()
//右键菜单
// const contextMenu = () => window.api.contextMenu()
</script>

<template>
  <Suspense>
    <main class="relative1">
      <Updater />
      <section>
        <Secret v-if="!config.token" />
        <div v-else>
          <Camera v-if="config.page == 'camera'" />
          <Setting v-if="config.page == 'setting'" />
        </div>
      </section>
    </main>
  </Suspense>
</template>
