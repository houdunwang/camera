<script setup lang="ts">
import useSoft from '@renderer/composables/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const { checkSecret } = useSoft()
</script>

<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center p-8 gap-2 bg-slate-700">
    <h3 class="text-center text-gray-50 opacity-90 text-base font-sans font-light h-10">
      请输入密钥
    </h3>
    <el-input
      v-model="config.secret"
      class="text-slate-500"
      type="textarea"
      :rows="5"
      placeholder=""
      size="default"
    />
    <el-button type="success" size="default" @click="checkSecret">验证</el-button>
    <div
      class="text-xs text-slate-400 font-sans font-light flex justify-center flex-col items-center relative"
    >
      <span class="font-normal mb-1 mt-2 text-orange-300">向军大叔作品 </span>
      <span class="text-xs font-light opacity-70">微信: houdunren2021</span>
      <!-- <img src="/xj.jpg" alt="" class="w-20 h-20 right-0 bottom-0" /> -->
    </div>
  </main>
</template>

<style lang="scss"></style>
