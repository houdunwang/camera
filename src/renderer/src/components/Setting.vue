<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => {
  return d.kind.includes('video')
})
</script>

<template>
  <main class="bg-[#2c3e50] p-5 flex flex-col gap-3 pt-10">
    <h2 class="text-center text-gray-100 opacity-80 text-sm font-mono">参数设置</h2>
    <el-select v-model="config.deviceId" placeholder="选择摄像头" clearable filterable size="large">
      <el-option
        v-for="(device, index) in cameras"
        :key="index"
        :label="device.label"
        :value="device.deviceId"
      >
      </el-option>
    </el-select>
    <el-input v-model="config.borderWidth" placeholder="边框宽度" size="large" clearable></el-input>
    <el-input v-model="config.borderColor" placeholder="边框颜色" size="large" clearable></el-input>
    <section
      class="flex flex-col items-center justify-center text-gray-100 font-light mt-3 text-xs"
    >
      <span class="text-orange-500 mb-1">向军大叔晚八点直播</span>
      <span class="font-light opacity-70">抖音/B站搜索后盾人</span>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
}
</style>
