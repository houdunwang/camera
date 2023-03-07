import ContextMenu from '@imengyu/vue3-context-menu'

export default () => {
  const onContextMenu = (e: MouseEvent) => {
    //prevent the browser's default menu
    e.preventDefault()
    //show your menu
    ContextMenu.showContextMenu({
      x: e.x,
      y: e.y,
      theme: 'default',
      items: [
        {
          label: '访问官网',
          customClass: 'fa-sharp fa-solid fa-house-user',
          onClick: () => {
            window.open('https://app.houdunren.com')
          }
        },
        {
          label: '系统设置',
          customClass: 'fa-sharp fa-solid fa-gear',
          onClick: () => {
            window.open('https://app.houdunren.com')
          }
        },
        {
          label: '退出软件',
          customClass: 'fa-sharp fa-solid fa-square-arrow-up-right',
          onClick: () => {
            window.open('https://app.houdunren.com')
          }
        }
      ]
    })
  }

  return { onContextMenu }
}
