<script setup lang="ts">
import useSoft from '@renderer/hd/useSoft'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const configStore = useConfigStore()
const { getSecret, open } = useSoft()
const form = ref({ secret: configStore.config.secret })
const onSubmit = async () => {
  if (!form.value.secret.trim()) ElMessage({ message: '密钥不能为空', type: 'warning' })
  else
    try {
      const res = await getSecret(form.value)
      ElMessage.success('密钥正确')
      configStore.config.secret = res.data.secret
      configStore.config.page = 'camera'
    } catch (error) {}
}
</script>

<template>
  <main
    class="w-screen h-screen flex flex-col justify-center items-center p-8 gap-2 bg-slate-700 drag"
  >
    <h3 class="text-center text-gray-50 opacity-90 text-base font-sans font-light">请输入密钥</h3>
    <!-- <div class="text-gray-200 text-xs opacity-50 mb-3">网站会员中心查看密钥</div> -->
    <el-input
      v-model="form.secret"
      class="text-slate-500 nodrag"
      type="textarea"
      :rows="3"
      placeholder=""
      size="default"
    />
    <div class="flex items-center">
      <el-button type="success" size="default" plain @click="onSubmit" class="nodrag">
        验证密钥
      </el-button>
      <el-button
        type="danger"
        size="default"
        plain
        @click="open(`https://www.houdunren.com/member/secret`)"
        class="nodrag"
      >
        获取密钥
      </el-button>
    </div>
    <div
      class="text-xs text-slate-400 font-sans font-light flex justify-center flex-col items-center relative"
    >
      <span class="font-normal mb-1 mt-2 text-orange-300">向军大叔作品 </span>
      <span class="text-xs font-light opacity-70">微信: houdunren2021</span>
    </div>
  </main>
</template>

<style lang="scss"></style>
