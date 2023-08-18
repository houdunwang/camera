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
  <main class="bg-[#2c3e50] h-screen w-screen z-50 drag">
    <section class="p-5">
      <h2 class="text-center text-gray-100 opacity-80 text-sm font-mono">参数设置</h2>
      <div class="w-full">
        <h3>选择摄像头</h3>
        <el-select
          v-model="config.deviceId"
          placeholder="选择摄像头"
          clearable
          filterable
          class="w-full"
        >
          <el-option
            v-for="(device, index) in cameras"
            :key="index"
            :label="device.label"
            :value="device.deviceId"
          >
          </el-option>
        </el-select>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <h3>边框宽度</h3>
          <el-input v-model="config.borderWidth" type="number" :min="0"></el-input>
        </div>
        <div>
          <h3>圆角尺寸</h3>
          <el-input v-model="config.borderRadius" type="number" :min="0"></el-input>
        </div>
      </div>
      <h3>边框颜色</h3>
      <el-input
        v-model="config.borderColor"
        placeholder="请输入CSS边框颜色，如#f1c40f"
        clearable
      ></el-input>
      <section
        class="flex flex-col items-center justify-center text-gray-100 font-light mt-2 text-xs nodrag"
      >
        <div class="text-orange-300 mb-2">
          向军大叔作品
          <span class="text-yellow-500 font-bold hover:text-orange-300">晚八点直播</span>
        </div>
        <span class="font-light opacity-70 mb-1">微信: houdunren2021</span>
        <span class="font-light opacity-70 text-xs text-gray-300">
          版本号: {{ packageJson.version }}
        </span>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
h3 {
  @apply text-white opacity-80 text-xs my-3;
}
</style>
