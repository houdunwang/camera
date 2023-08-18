<script setup lang="ts">
import { CameraFive, Setting as SettingICon } from '@icon-park/vue-next'
import DropdownMenu from '@renderer/components/DropdownMenu.vue'
import FullScreen from '@renderer/components/FullScreen.vue'
// import useCamera from '@renderer/composables/useCamera'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import ChangeFlipHorizontally from './ChangeFlipHorizontally.vue'
import ChangeRounded from './ChangeRounded.vue'
// const { openNewCamera } = useCamera()
const { config } = useConfigStore()

//退出软件
// const quit = () => window.api.quit()
</script>

<template>
  <section
    class="nodrag absolute bottom-0 z-30 group w-screen justify-center items-center gap-2 cursor-pointer flex hover:bg-pink-600 py-2"
    :class="{ 'bg-pink-600': config.page == 'setting' }"
  >
    <!-- 设置页面 -->
    <SettingICon
      v-if="!['setting', 'updater'].includes(config.page)"
      theme="outline"
      size="20"
      :stroke-width="3"
      class="icon"
      @click="config.page = 'setting'"
    />
    <!-- 摄像头页面 -->
    <CameraFive
      v-if="config.page != 'camera'"
      theme="outline"
      size="20"
      :stroke-width="3"
      class="icon"
      @click="config.page = 'camera'"
    />
    <!-- 圆角切换 -->
    <ChangeRounded v-if="config.page == 'camera'" />
    <!-- 画面镜像 -->
    <ChangeFlipHorizontally v-if="config.page == 'camera'" />
    <!-- 全屏 -->
    <FullScreen v-if="['camera'].includes(config.page)" />
    <!-- 快捷菜单 -->
    <DropdownMenu />
    <!-- <power theme="outline" size="20" class="icon" @click="quit" /> -->
    <!-- 打开新摄像头 -->
    <!-- <share
      v-if="config.page == 'camera'"
      theme="filled"
      size="20"
      fill="#ffffff"
      :strokeWidth="3"
      class="icon"
      @click="openNewCamera"
    /> -->
  </section>
</template>

<style lang="scss" scoped>
.icon,
:deep(.icon) {
  @apply text-white cursor-pointer opacity-0 group-hover:opacity-100;
}
.bg-pink-600 {
  .icon,
  :deep(.icon) {
    @apply opacity-100;
  }
}
</style>
