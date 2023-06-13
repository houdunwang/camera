<script setup lang="ts">
import { CameraFive, Setting as SettingICon, Share } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import ChangeFlipHorizontally from './ChangeFlipHorizontally.vue'
// import FullScreen from './FullScreen.vue'
import ChangeRounded from './ChangeRounded.vue'
import useCamera from '@renderer/composables/useCamera'
const { toggleFullscreen, openNewCamera } = useCamera()
const { config } = useConfigStore()
</script>

<template>
  <section
    @dblclick="toggleFullscreen"
    class="footer-menu absolute bottom-0 z-20 group w-screen h-10 flex justify-center items-center gap-2 cursor-pointer hover:bg-pink-600"
  >
    <!-- 设置页面 -->
    <SettingICon
      v-if="config.page != 'setting'"
      theme="outline"
      size="20"
      :stroke-width="3"
      class="icon"
      @click="config.page = 'setting'"
    />
    <!-- 摄像头页面 -->
    <CameraFive
      v-if="config.page == 'setting'"
      theme="outline"
      size="20"
      :stroke-width="3"
      class="icon"
      @click="config.page = 'camera'"
    />
    <!-- 圆角切换 -->
    <ChangeRounded />
    <!-- 画面镜像 -->
    <ChangeFlipHorizontally />
    <!-- 全屏 -->
    <!-- <FullScreen /> -->
    <!-- 快捷菜单 -->
    <!-- <DropdownMenu /> -->
    <!-- 打开新摄像头 -->
    <share
      v-if="config.page == 'camera'"
      theme="filled"
      size="20"
      fill="#ffffff"
      :strokeWidth="3"
      class="icon"
      @click="openNewCamera"
    />
  </section>
</template>

<style lang="scss" scoped>
.icon,
:deep(.icon) {
  @apply text-white cursor-pointer opacity-0 group-hover:opacity-100;
}
</style>
