const userInput = document.querySelector('#userInput')
let expression = ''

function press(num) {
  expression += num
  userInput.value = expression
}

function equal() {
  let evalValue = userInput.value = eval(expression)
  expression = evalValue
}

function erase() {
  expression = ''
  userInput.value = expression
}