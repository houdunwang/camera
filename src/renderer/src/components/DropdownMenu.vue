<script setup lang="ts">
import { HamburgerButton } from '@icon-park/vue-next'
import useCamera from '@renderer/composables/useCamera'
const { openNewCamera } = useCamera()
const newWindow = () => {
  openNewCamera()
}
//退出软件
const quit = () => window.api.quit()
</script>

<template>
  <div class="">
    <el-dropdown :teleported="true" class="nodrag" trigger="hover">
      <hamburger-button theme="outline" size="25" class="icon" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="newWindow">新开镜头</el-dropdown-item>
          <!-- <el-dropdown-item @click="config.page = 'secret'">学习口令</el-dropdown-item> -->
          <el-dropdown-item @click="quit">关闭镜头</el-dropdown-item>
          <!-- <el-dropdown-item>
            <a href="https://www.houdunren.com" target="_blank">访问网站</a>
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
}
</style>
