<script setup lang="ts">
import useSoft from '@renderer/composables/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const { checkSecret } = useSoft()
</script>

<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center p-8 gap-2 bg-slate-700">
    <h2 class="text-center text-gray-50 opacity-90 text-lg font-sans font-light">授权许可</h2>
    <el-input
      v-model="config.secret"
      class="text-slate-500"
      type="textarea"
      :rows="5"
      placeholder="请在会员中心获取密钥"
      size="default"
    />
    <el-button type="success" size="default" @click="checkSecret">验证</el-button>
    <div
      class="text-xs text-slate-400 font-sans font-light flex justify-center flex-col items-center"
    >
      <span class="font-normal mb-1 mt-2 text-orange-300">向军大叔作品 </span>
      <span class="text-xs font-light opacity-70">抖音与B站搜索后盾人晚八点直播</span>
    </div>
  </main>
</template>

<style lang="scss"></style>
