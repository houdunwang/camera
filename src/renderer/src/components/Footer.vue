<script setup lang="ts">
import ChangeFlipHorizontally from './ChangeFlipHorizontally.vue'
import ChangeRounded from './ChangeRounded.vue'
import DropdownMenu from './DropdownMenu.vue'
import SwitchSetting from '@renderer/components/SwitchSetting.vue'
import SwitchCamera from '@renderer/components/SwitchCamera.vue'
</script>

<template>
  <section
    class="footer-menu absolute bottom-0 z-20 group w-screen h-16 flex justify-center items-center gap-3 cursor-pointer hover:bg-pink-600"
  >
    <!-- 设置页面 -->
    <SwitchSetting />
    <!-- 摄像头页面 -->
    <SwitchCamera />
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
