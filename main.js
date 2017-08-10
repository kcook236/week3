let display = document.querySelector(".display")
let number = document.querySelectorAll(".number")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let displayNumber = ""

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    display.innerHTML = (displayNumber += this.value)
  }
)}

equal.addEventListener("click", function (){
  let answer = eval(displayNumber)
  display.innerHTML = answer
  displayNumber = ""

  if (clear.addEventListener("click", function(){
      display.innerHTML = displayNumber
  })) {

  }
})


//need to add each number into the array instead of overwritting each number
