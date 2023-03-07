<script setup lang="ts">
import ContextMenu from '@imengyu/vue3-context-menu'

const onContextMenu = (e: MouseEvent) => {
  //prevent the browser's default menu
  e.preventDefault()
  //show your menu
  ContextMenu.showContextMenu({
    x: e.x,
    y: e.y,
    items: [
      {
        label: 'A submenu',
        children: [{ label: 'Item1' }, { label: 'Item2' }, { label: 'Item3' }]
      }
    ]
  })
}
</script>

<template>
  <div @contextmenu="onContextMenu($event)">aaaa</div>
</template>

<style lang="scss"></style>
