document.addEventListener("turbolinks:load", () => {
  const puzzle = document.querySelector("#puzzle")
  if (puzzle) {
    puzzle.addEventListener("click", event => {
      const pos = getPosition(puzzle, event)
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
