const lightbulb = document.getElementById("lightbulb")

const changeColor = (color) => {
  lightbulb.classList.remove('lightbulb-blue', 'lightbulb-red', 'lightbulb-green')
  lightbulb.classList.add(color)
}

const shutDown = () => {
  lightbulb.classList.remove('lightbulb-blue', 'lightbulb-red', 'lightbulb-green')
}