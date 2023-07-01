<script setup lang="ts">
import useSoft from '@renderer/composables/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ref } from 'vue'
const { config } = useConfigStore()
const { getSecret } = useSoft()
const form = ref({ secret: config.secret })
</script>

<template>
  <main
    class="w-screen h-screen flex flex-col justify-center items-center p-8 gap-2 bg-slate-700 drag"
  >
    <h3 class="text-center text-gray-50 opacity-90 text-base font-sans font-light">请输入密钥</h3>
    <div class="text-gray-200 text-xs opacity-50 mb-3">后盾人网站会员中心查看密钥</div>
    <el-input
      v-model="form.secret"
      class="text-slate-500 nodrag"
      type="textarea"
      :rows="3"
      placeholder=""
      size="default"
    />
    <el-button type="success" size="default" plain @click="getSecret(form)" class="nodrag">
      验证密钥
    </el-button>
    <div
      class="text-xs text-slate-400 font-sans font-light flex justify-center flex-col items-center relative"
    >
      <span class="font-normal mb-1 mt-2 text-orange-300">向军大叔作品 </span>
      <span class="text-xs font-light opacity-70">微信: houdunren2021</span>
    </div>
  </main>
</template>

<style lang="scss"></style>
