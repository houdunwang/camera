<script setup lang="ts">
import { CameraFive, InnerShadowUp, Setting as SettingICon } from '@icon-park/vue-next'
// import useDrag from '@renderer/composables/useDrag'
import { useConfigStore } from '@renderer/stores/useConfigStore'
// import { onMounted } from 'vue'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import Updater from './components/Updater.vue'
import useContextMenu from './composables/useContextMenu'
// import ContextMenu from './components/ContextMenu.vue'

const { onContextMenu } = useContextMenu()

const { config } = useConfigStore()
//拖拽窗口
// const { drag } = useDrag()
// onMounted(() => drag.run())

//退出应用
// const quit = () => window.api.quit()

//修改窗口尺寸
const changeRounded = () => {
  config.rounded = !config.rounded
  if (config.rounded) window.api.setWindowSize({ aspectRatio: 1 / 1, width: 300, height: 300 })
  else window.api.setWindowSize({ aspectRatio: 1 / 1, width: 480, height: 270 })
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="onContextMenu">
      <!-- <ContextMenu /> -->
      <Updater />
      <section>
        <!-- 设置页面 -->
        <SettingICon
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute left-1/2 -translate-x-1/2 pt-3 z-10"
          @click="config.page = 'setting'"
          v-if="config.page == 'camera'"
        />
        <!-- 摄像头页面 -->
        <CameraFive
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute left-1/2 -translate-x-1/2 pt-3 z-10"
          @click="config.page = 'camera'"
          v-if="config.page == 'setting'"
        />
        <!-- 切换圆角摄像头 -->
        <InnerShadowUp
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-3"
          v-if="config.page == 'camera'"
          @click="changeRounded"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
