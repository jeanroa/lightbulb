
function changeColorBlue() {
  var element = document.getElementById("lightbulb")
  element.classList.add("lightbulb-blue")
  element.classList.remove("lightbulb-red", "lightbulb-green")
}

function changeColorRed() {
  var element = document.getElementById("lightbulb")
  element.classList.add("lightbulb-red")
  element.classList.remove("lightbulb-blue", "lightbulb-green")
}

function changeColorGreen() {
  var element = document.getElementById("lightbulb")
  element.classList.add("lightbulb-green")
  element.classList.remove("lightbulb-red", "lightbulb-blue")
}

function shutDown() {
  var element = document.getElementById("lightbulb")
  element.classList.remove("lightbulb-red", "lightbulb-blue", "lightbulb-green")
}