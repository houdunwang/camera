<script setup lang="ts">
import { ref } from 'vue'
import { ProgressInfo } from 'builder-util-runtime/out/ProgressCallbackTransform'

//下载进度条
const progress = ref<ProgressInfo | null>(null)
window.api.downloadProgress((_progress: ProgressInfo): void => {
  progress.value = _progress
})
</script>

<template>
  <main
    v-if="progress"
    class="p-5 w-screen h-screen absolute z-30 flex flex-col justify-center shadow-inner bg-gray-100 rounded-lg"
  >
    <div class="flex justify-center">
      <img
        src="../assets/xj.jpg"
        alt=""
        class="w-[80px] h-[80px] object-cover rounded-full shadow-md"
      />
    </div>
    <h1 class="py-3 text-center font-bold opacity-60 text-sm font-mono">下载更新包</h1>
    <div class="">
      <el-progress :percentage="progress.percent" :stroke-width="26" :text-inside="true" />
    </div>
    <div class="mt-5 flex justify-center">
      <a
        href="https://github.com/houdunwang/camera/releases"
        target="_blank"
        class="bg-violet-600 py-2 px-4 rounded-md text-white text-sm hover:bg-violet-500"
        >官网下载</a
      >
    </div>
  </main>
</template>

<style lang="scss"></style>
