<script setup lang="ts">
import Footer from '@renderer/components/Footer.vue'
import Secret from '@renderer/hd/Secret.vue'
import Updater from '@renderer/hd/Updater.vue'
import useSoft from '@renderer/hd/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './views/Camera.vue'
import Setting from './views/Setting.vue'
const { config } = useConfigStore()
config.page = 'camera'
const { init } = useSoft()
init()
</script>

<template>
  <Suspense>
    <main class="relative">
      <Updater v-if="config.page == 'updater'" />
      <Secret v-if="config.page == 'secret'" />
      <Camera v-if="config.page == 'camera'" />
      <Setting v-if="config.page == 'setting'" />
      <!-- 菜单图标 -->
      <Footer />
    </main>
  </Suspense>
</template>
