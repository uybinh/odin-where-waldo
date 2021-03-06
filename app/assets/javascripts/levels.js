document.addEventListener("DOMContentLoaded", () => {
  app()
})

async function app() {
  const canvas = document.querySelector("#canvas")

  if (canvas) {
    await fetchKey().then(saveKeyToStorage)

    canvas.addEventListener("click", handleClick)
  }
}

const handleClick = event => {
  if (!Timer.isStart()) {
    Timer.start()
  }
  const key = JSON.parse(window.localStorage.getItem("key"))
  const pos = moveTargetTo(getPosition(canvas, event))
  if (checkPosition(pos, key)) {
    Timer.stop()
    console.log(Timer.getTime())
    setFinalTarget(canvas, key)
    document.querySelector("#target").style.display = "none"
    canvas.removeEventListener("click", handleClick)
  }
}

function getPosition(element, event) {
  const rect = element.getBoundingClientRect()
  const posX = event.clientX - Math.floor(rect.left)
  const posY = event.clientY - Math.floor(rect.top)
  return { x: posX, y: posY }
}

function moveTargetTo(pos) {
  const target = document.querySelector("#target")
  target.style.display = "block"
  target.style.top = pos.y + "px"
  target.style.left = pos.x + "px"
  return pos
}

function fetchKey() {
  url = window.location.href + ".json"
  return fetch(url).then(res => res.json())
}

function setFinalTarget(canvas, key) {
  const target = document.createElement("div")
  target.classList = "target-box final"
  target.style.top = (key.from.y + key.to.y) / 2 + "px"
  target.style.left = (key.from.x + key.to.x) / 2 + "px"
  canvas.appendChild(target)
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
    return true
  }
}

const Timer = (function() {
  let oldTime = 0
  let curTime = 0
  let timer = null
  let $isStart = false

  function start() {
    $isStart = true
    oldTime = new Date().getTime()
    timer = setInterval(() => {
      curTime = Math.floor((new Date().getTime() - oldTime) / 1000)
      document.querySelector("#timer").innerHTML = "Time: " + curTime
      document.querySelector("#player_score").value = curTime
      document.querySelector("#display_score").innerHTML = curTime
    }, 1000)
  }

  function stop() {
    clearInterval(timer)
    $isStart = false
  }

  function getTime() {
    return curTime
  }

  function isStart() {
    return $isStart
  }

  return { start, stop, getTime, isStart }
})()
