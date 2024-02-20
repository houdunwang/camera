<script setup lang="ts">
import { useConfigStore } from '@renderer/stores/useConfigStore'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import Package from '../../../../package.json'

const { config } = useConfigStore()
if (!config.token) {
  config.token = { uid: '', secret: '' }
}
const show = ref(false)
const secretCheck = () => {
  axios
    .post('https://www.houdunren.com/api/softSecret/check', {
      uid: config.token.uid,
      secret: config.token.secret
    })
    .then((r: any) => {
      if (r.data != 1) {
        ElMessage.warning({ message: '口令错误', grouping: true })
        show.value = true
      } else show.value = false
    })
}
secretCheck()

const showUpgradeBox = ref(false)
const upgradeCheck = () => {
  axios
    .post('https://www.houdunren.com/api/soft/upgrade/check', {
      soft: 'houdunren-camera',
      version: Package.version
    })
    .then((r: any) => {
      if (r.data != 1) {
        showUpgradeBox.value = true
      }
    })
    .catch(() => {})
}
upgradeCheck()
</script>

<template>
  <main v-show="show" class="w-screen h-screen bg-[#2c3e50] drag p-5 text-white z-[999]">
    <h1 class="text-center my-5 text-md opacity-80">口令设置</h1>
    <section class="nodrag">
      <h5>用户 uid</h5>
      <el-input v-model="config.token.uid" placeholder="请输入用户 uid" size="large" clearable />
    </section>
    <section class="nodrag">
      <h5>口令</h5>
      <el-input v-model="config.token.secret" placeholder="请输入口令" size="large" clearable />
    </section>
    <div class="flex justify-center nodrag mt-5">
      <el-button type="success" size="default" @click="secretCheck">保存提交</el-button>
    </div>

    <div class="text-center mt-5 opacity-80 text-xs">请在网站会员中心查看</div>
  </main>

  <main
    v-show="showUpgradeBox"
    class="z-[999] w-screen h-screen bg-[#16a085] flex justify-center items-center text-slate-100 text-lg"
  >
    有新版本了！请访问网站下载
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply absolute left-0 top-0 right-0 bottom-0;
}
section {
  @apply p-3 rounded-md;
  h5 {
    @apply text-sm mb-2 opacity-80;
  }
}
</style>
