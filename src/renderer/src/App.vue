<script setup lang="ts">
import { CameraFive, InnerShadowUp, Setting as SettingICon } from '@icon-park/vue-next'
import useDrag from '@renderer/composables/useDrag'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { onMounted } from 'vue'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import Updater from './components/Updater.vue'

const { drag } = useDrag()
onMounted(() => {
  drag.run()
})

const { config } = useConfigStore()

const quit = () => window.api.quit()
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <Updater />
      <section>
        <SettingICon
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute left-1/2 -translate-x-1/2 pt-3 z-10"
          @click="config.page = 'setting'"
          v-if="config.page == 'camera'"
        />

        <CameraFive
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute left-1/2 -translate-x-1/2 pt-3 z-10"
          @click="config.page = 'camera'"
          v-if="config.page == 'setting'"
        />

        <InnerShadowUp
          theme="outline"
          size="25"
          :strokeWidth="3"
          class="text-gray-200 cursor-pointer hidden group-hover:block absolute bottom-0 left-1/2 -translate-x-1/2 z-20 mb-3"
          v-if="config.page == 'camera'"
          @click="config.rounded = !config.rounded"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
