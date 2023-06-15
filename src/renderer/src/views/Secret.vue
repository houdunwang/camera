<script setup lang="ts">
import { http } from '@renderer/axios'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ElMessage } from 'element-plus'
const { config } = useConfigStore()

const onSubmit = async (): Promise<any> => {
  if (!config.secret) return ElMessage.error('请输入密钥')
  const res = await http.request<any>({
    url: `/token/getSoftToken`,
    method: 'POST',
    data: {
      secret: config.secret,
      soft: 'camera'
    }
  })
  config.token = res.data.token
  config.page = 'camera'
}
</script>

<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center p-8 gap-2 bg-slate-700">
    <h2 class="text-center text-gray-50 opacity-90 text-lg font-sans font-light">授权许可</h2>
    <el-input
      v-model="config.secret"
      class="text-slate-500"
      type="textarea"
      :rows="5"
      placeholder="hdcms.com会员中心获取密钥"
      size="default"
    />
    <el-button type="success" size="default" @click="onSubmit">验证</el-button>
    <div
      class="text-xs text-slate-400 font-sans font-light flex justify-center flex-col items-center"
    >
      <span class="font-normal mb-1 mt-2 text-orange-300">向军大叔作品 </span>
      <span class="text-xs font-light opacity-70">抖音与B站搜索后盾人晚八点直播</span>
    </div>
  </main>
</template>

<style lang="scss"></style>
