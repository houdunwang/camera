<template>
  <el-tooltip
    v-if="config.page !== 'setting'"
    :hide-after="0"
    class="box-item"
    content="软件配置"
    effect="dark"
    placement="top"
  >
    <Setting :stroke-width="3" class="icon" size="25" theme="outline" @click="switchSetting" />
  </el-tooltip>
</template>

<script lang="ts" setup>
import { Setting } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()

const switchSetting = (): void => {
  config.cameraSize = { ...config.cameraSize, ...window.api.getWindowSize() }
  window.api.setWindowSize({
    width: config.settingNormalSize.width,
    height: config.settingNormalSize.height
  })
  config.page = 'setting'
}
</script>

<style scoped></style>
