<script setup lang="ts"></script>

<template>
  <main
    class="text-xl text-slate-800 flex flex-col justify-center items-center w-screen h-screen z-50 drag bg-gray-700 font-sans font-thin"
  >
    <section class="text-white">
      <div class="opacity-60">有新版本更新了</div>
      <a
        href="https://www.houdunren.com/soft"
        target="_blank"
        class="font-bold nodrag text-yellow-500 mt-1 hover:text-yellow-300"
      >
        马上下载
      </a>
      <div class="text-base opacity-50 mt-3">苹果应用商店下载的，请使用app store更新</div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
section {
  @apply flex justify-center items-center flex-col;
}
</style>
