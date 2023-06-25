<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import packageJson from '../../../../package.json'

const { config } = useConfigStore()
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((d) => {
  return d.kind.includes('video')
})
</script>

<template>
  <main class="bg-[#2c3e50] h-screen w-screen z-50 drag" id="setting">
    <section class="p-5 flex flex-col gap-3 pt-5 nodrag">
      <h2 class="text-center text-gray-100 opacity-80 text-sm font-mono">参数设置</h2>
      <el-select v-model="config.deviceId" placeholder="选择摄像头" clearable filterable>
        <el-option
          v-for="(device, index) in cameras"
          :key="index"
          :label="device.label"
          :value="device.deviceId"
        >
        </el-option>
      </el-select>
      <el-input v-model="config.borderWidth" placeholder="边框宽度，如10px" clearable></el-input>
      <el-input
        v-model="config.borderColor"
        placeholder="请输入CSS边框颜色，如#f1c40f"
        clearable
      ></el-input>
      <section
        class="flex flex-col items-center justify-center text-gray-100 font-light mt-2 text-xs"
      >
        <span class="text-orange-300 mb-2">向军大叔作品</span>
        <span class="font-light opacity-70 mb-1">微信: houdunren2021</span>
        <span class="font-light opacity-70 text-xs text-gray-300">
          版本号: {{ packageJson.version }}
        </span>
      </section>
    </section>
  </main>
</template>
