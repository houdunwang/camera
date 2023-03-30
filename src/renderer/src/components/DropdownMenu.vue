<script setup lang="ts">
import { HamburgerButton } from '@icon-park/vue-next'

//退出软件
const quit = (): void => window.api.quit()
</script>

<template>
  <div class="opacity-0 group-hover:opacity-100">
    <el-dropdown>
      <hamburger-button theme="outline" size="25" class="icon" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="quit">退出软件</el-dropdown-item>
          <el-dropdown-item>
            <a href="https://app.houdunren.com" target="_blank">访问官网</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss"></style>
