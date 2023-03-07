<script setup lang="ts">
// import useDrag from '@renderer/composables/useDrag'
import { useConfigStore } from '@renderer/stores/useConfigStore'
// import { onMounted } from 'vue'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import Updater from './components/Updater.vue'
// import useContextMenu from './composables/useContextMenu'
import FooterMenu from './components/FooterMenu.vue'
// import ContextMenu from './components/ContextMenu.vue'

// const { onContextMenu } = useContextMenu()

const { config } = useConfigStore()
//拖拽窗口
// const { drag } = useDrag()
// onMounted(() => drag.run())

//退出应用
// const quit = () => window.api.quit()
</script>

<template>
  <Suspense>
    <main class="relative">
      <Updater />
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
      <!-- 菜单图标 -->
      <FooterMenu />
    </main>
  </Suspense>
</template>
