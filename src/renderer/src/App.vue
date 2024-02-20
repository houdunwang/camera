<script setup lang="ts">
import Footer from '@renderer/components/Footer.vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Camera from './views/Camera.vue'
import Setting from './views/Setting.vue'
// import Secret from './views/Secret.vue'

const { config } = useConfigStore()
config.page = 'camera'
</script>

<template>
  <Suspense>
    <main class="relative">
      <Camera v-if="config.page == 'camera'" />
      <Setting v-if="config.page == 'setting'" />
      <!-- 菜单图标 -->
      <Footer />
      <!-- 编译苹果 mas 时不使用该组件 -->
      <!-- <Secret /> -->
    </main>
  </Suspense>
</template>
