<script setup lang="ts">
import { CameraFive, Setting as SettingICon } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import ChangeFlipHorizontally from './ChangeFlipHorizontally.vue'
import ChangeRounded from './ChangeRounded.vue'
import DropdownMenu from './DropdownMenu.vue'
const { config } = useConfigStore()
</script>

<template>
  <section
    class="footer-menu absolute bottom-0 z-20 group w-screen h-16 flex justify-center items-center gap-3 cursor-pointer hover:bg-pink-600"
  >
    <!-- 设置页面 -->
    <el-tooltip class="box-item" effect="dark" content="软件配置" placement="top" :hide-after="0">
      <SettingICon
        v-if="config.page != 'setting'"
        theme="outline"
        size="25"
        :stroke-width="3"
        class="icon"
        @click="config.page = 'setting'"
      />
    </el-tooltip>
    <!-- 摄像头页面 -->
    <el-tooltip class="box-item" effect="dark" content="显示摄像头" placement="top" :hide-after="0">
      <CameraFive
        v-if="config.page == 'setting'"
        theme="outline"
        size="25"
        :stroke-width="3"
        class="icon"
        @click="config.page = 'camera'"
      />
    </el-tooltip>
    <!-- 圆角切换 -->
    <ChangeRounded />
    <!-- 画面镜像 -->
    <ChangeFlipHorizontally />
    <!-- 快捷菜单 -->
    <DropdownMenu />
  </section>
</template>

<style lang="scss" scoped>
.icon,
:deep(.icon) {
  @apply text-white cursor-pointer opacity-0 group-hover:opacity-100;
}
</style>
