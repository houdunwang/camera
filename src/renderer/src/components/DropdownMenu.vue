<script setup lang="ts">
import useCamera from '@renderer/composables/useCamera'
import { HamburgerButton } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const { openNewCamera } = useCamera()

//退出软件
const quit = () => window.api.quit()
</script>

<template>
  <div class="">
    <el-dropdown :teleported="true" class="nodrag" trigger="hover">
      <hamburger-button theme="outline" size="25" class="icon" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="openNewCamera">新开镜头</el-dropdown-item>
          <el-dropdown-item @click="config.page = 'secret'">软件密钥</el-dropdown-item>
          <el-dropdown-item @click="quit">关闭摄像头</el-dropdown-item>
          <!-- <el-dropdown-item>
            <a href="https://www.hdcms.com" target="_blank">访问网站</a>
          </el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss">
[id*='popper'],
.el-scrollbar {
  -webkit-app-region: no-drag;
  // position: relative;
  // z-index: 1000;
  // left: 20px;
  // top: 20px;
}
</style>
