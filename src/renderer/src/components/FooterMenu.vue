<script setup lang="ts">
import {
  CameraFive,
  InnerShadowUp,
  Setting as SettingICon,
  Power,
  HamburgerButton
} from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()

//修改窗口尺寸
const changeRounded = () => {
  config.rounded = !config.rounded
  config.aspectRatio = config.rounded ? 1 : 16 / 9
  window.api.setWindowSize({ aspectRatio: config.aspectRatio })
}
window.api.setWindowSize({ aspectRatio: config.aspectRatio })

//退出软件
const quit = () => window.api.actions().quit()
</script>

<template>
  <section
    class="footer-menu absolute bottom-0 z-20 group w-screen h-16 flex justify-center items-center gap-3 cursor-pointer hover:bg-pink-600"
  >
    <!-- 设置页面 -->
    <el-tooltip class="box-item" effect="dark" content="软件配置" placement="top" :hide-after="0">
      <SettingICon
        theme="outline"
        size="25"
        :strokeWidth="3"
        class="icon"
        @click="config.page = 'setting'"
        v-if="config.page != 'setting'"
      />
    </el-tooltip>

    <!-- 摄像头页面 -->
    <el-tooltip class="box-item" effect="dark" content="显示摄像头" placement="top" :hide-after="0">
      <CameraFive
        theme="outline"
        size="25"
        :strokeWidth="3"
        class="icon"
        @click="config.page = 'camera'"
        v-if="config.page == 'setting'"
      />
    </el-tooltip>
    <!-- 切换圆角摄像头 -->
    <el-tooltip class="box-item" effect="dark" content="切换样式" placement="top" :hide-after="0">
      <InnerShadowUp
        theme="outline"
        size="25"
        :strokeWidth="3"
        class="icon"
        v-if="config.page == 'camera'"
        @click="changeRounded"
      />
    </el-tooltip>
    <!-- <el-tooltip class="box-item" effect="dark" content="退出软件" placement="top" :hide-after="0">
      <power theme="outline" size="25" :strokeWidth="3" class="icon" />
    </el-tooltip> -->
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
  </section>
</template>

<style lang="scss" scoped>
.icon {
  @apply text-white cursor-pointer opacity-0 group-hover:opacity-100;
}
</style>
