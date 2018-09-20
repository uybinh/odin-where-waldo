document.addEventListener("turbolinks:load", () => {
  app()
})

async function app() {
  const canvas = document.querySelector("#canvas")

  if (canvas) {
    const key = await fetchKey().then(saveKeyToStorage)
    canvas.addEventListener("click", event => {
      const pos = getPosition(canvas, event)
      selectTarget(pos)
      console.log(pos)
      checkPosition(pos, key)
    })
  }
}

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

function fetchKey() {
  url = window.location.href + ".json"
  return fetch(url).then(res => res.json())
}

const saveKeyToStorage = key => {
  window.localStorage.setItem("key", JSON.stringify(key))
  return key
}

const checkPosition = (pos, key) => {
  if (
    pos.x > key.from.x &&
    pos.x < key.to.x &&
    pos.y > key.from.y &&
    pos.y < key.to.y
  ) {
    alert("greate")
  }
}
