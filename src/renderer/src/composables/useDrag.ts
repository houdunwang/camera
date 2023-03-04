class Drag {
  private body?: HTMLBodyElement
  constructor(private resPageX = 0, private resPageY = 0) {}
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.down.bind(this))
    })
  }
  private down(e: MouseEvent) {
    this.resPageX = e.pageX
    this.resPageY = e.pageY
    const mouseEvent = this.move.bind(this)
    this.body!.addEventListener('mousemove', mouseEvent)
    this.body!.addEventListener('mouseup', () =>
      this.body?.removeEventListener('mousemove', mouseEvent)
    )
  }
  private move(e: MouseEvent) {
    const x = e.pageX - this.resPageX
    const y = e.pageY - this.resPageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()

  return { drag }
}
