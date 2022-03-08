// function changeColor(color) {
//   var element = document.getElementById("lightbulb")
//   const luz = ["lightbulb-red", "lightbulb-blue", "lightbulb-green"];
//     if(luz.include(color))
//       {
//         luz.splice(color);
//         element.classList.add(color)
//       }
//   element.classList.remove(luz);
//   }

const lightbulb = document.getElementById("lightbulb")

const changeColor = (color) => {
  lightbulb.classList.remove('lightbulb-blue', 'lightbulb-red', 'lightbulb-green')
  lightbulb.classList.add(color)
}

const shutDown = () => {
  lightbulb.classList.remove('lightbulb-blue', 'lightbulb-red', 'lightbulb-green')
}

