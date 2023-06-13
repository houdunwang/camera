<script setup lang="ts">
import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import packageJson from '../../../../package.json'
import { ref } from 'vue'

const { config } = useConfigStore()
const checkResult = ref(9)
http
  .request({
    url: `/soft/checkUpdate`,
    method: 'POST',
    data: {
      version: packageJson.version,
      name: 'camera'
    }
  })
  .then((res) => {
    setTimeout(() => {
      checkResult.value = res.data
      if (res.data == 0) {
        config.page = 'camera'
      }
    }, 1000)
  })
  .catch(() => {
    config.token = ''
  })
</script>

<template>
  <main
    id="updater"
    class="text-xl font-sans font-light text-slate-800 flex flex-col justify-center items-center w-screen h-screen z-50"
  >
    <section v-if="checkResult == 9" class="bg-violet-700 text-white">更新检测中...</section>
    <section v-if="checkResult == 1" class="bg-orange-300 duration-500">
      <div>有新版本了</div>
      <div>请访问 <span class="font-bold">hdcms.com</span> 网站下载</div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  @apply flex justify-center items-center flex-col w-screen h-screen;
}
</style>
