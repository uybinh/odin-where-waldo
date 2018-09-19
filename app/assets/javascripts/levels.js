document.addEventListener("turbolinks:load", () => {
  const canvas = document.querySelector("#canvas")
  if (canvas) {
    canvas.addEventListener("click", event => {
      const pos = getPosition(canvas, event)
      selectTarget(pos)
      console.log(pos)
    })
  }
})

function getPosition(element, event) {
  const rect = element.getBoundingClientRect()
  const posX = event.clientX - Math.floor(rect.left)
  const posY = event.clientY - Math.floor(rect.top)
  return { x: posX, y: posY }
}

function selectTarget(pos) {
  const target = newTarget()
  target.style.display = "block"
  target.style.top = pos.y + "px"
  target.style.left = pos.x + "px"
}

function newTarget() {
  const target =
    document.querySelector("#target") || document.createElement("div")
  target.id = "target"
  return target
}
