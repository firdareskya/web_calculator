const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
});

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
//let calculationPercentage = ''


const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

/*
const inputPercent = (percentage) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

const percentages = document.querySelector('.percentage')

percentages.addEventListener('click', () => {
  calculateTwo()
  updateScreen(currentNumber)
  console.log("preesdeds")
})
*/

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
  })
});

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
  //console.log('equal button is pressed')
})

/*
const calculateTwo = () => {
  let result = ''
  switch (calculationPercentage) {
    case "%":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    default:
    return
  }
  currentNumber = result
  calculationPercentage = ''
}
*/

const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case "-":
      result = prevNumber - currentNumber
      break
    case "*":
      result = prevNumber * currentNumber
      break
    case "/":
      result = prevNumber / currentNumber
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
  //console.log('AC button is pressed')
})

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})
