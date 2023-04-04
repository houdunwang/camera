<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import Footer from '@renderer/components/Footer.vue'
import { ref, watch } from 'vue'

const { config } = useConfigStore()
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => {
  return d.kind.includes('video')
})
const version = ref('')
window.api.version((_version: string) => {
  version.value = _version
})
const borderColor = ref(config.borderColor)
watch(borderColor, async (value) => (config.borderColor = value))
</script>

<template>
  <main class="bg-[#2c3e50] h-screen w-screen">
    <section class="p-5 flex flex-col gap-3 pt-10">
      <h2 class="text-center text-gray-100 opacity-80 text-sm font-mono">参数设置</h2>
      <el-select
        v-model="config.deviceId"
        placeholder="选择摄像头"
        clearable
        filterable
        size="large"
      >
        <el-option
          v-for="(device, index) in cameras"
          :key="index"
          :label="device.label"
          :value="device.deviceId"
        >
        </el-option>
      </el-select>
      <div class="slider-block">
        <span class="text-gray-100 opacity-80 text-sm font-mono">边框宽度</span>
        <el-slider v-model="config.borderWidth" />
      </div>
      <div class="flex items-center">
        <el-input
          v-model="borderColor"
          :style="{
            border: `5px solid ${borderColor}`
          }"
          class="mr-2"
          clearable
          disabled
          placeholder="边框颜色"
          size="large"
        ></el-input>
        <el-color-picker v-model="borderColor" />
      </div>
      <section
        class="flex flex-col items-center justify-center text-gray-100 font-light mt-3 text-xs"
      >
        <span class="text-orange-300 mb-2">向军大叔作品</span>
        <span class="font-light opacity-70 mb-1">晚八点直播 / 抖音或B站搜索后盾人</span>
        <span class="font-light opacity-70 text-xs text-gray-300">
          版本号: {{ version ? version : '检测中' }}
        </span>
      </section>
    </section>

    <!-- 菜单图标 -->
    <Footer />
  </main>
</template>
<style lang="scss" scoped>
:deep(.el-slider) {
  position: relative;

  .el-slider__runway {
    --el-slider-button-wrapper-offset: -3px;
    position: initial;
  }

  .el-slider__bar {
    background-color: v-bind(borderColor);
  }
}

:deep(.el-color-picker) {
  padding-right: 5px;
}
</style>
