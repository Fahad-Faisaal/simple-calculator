// Storing elements
const calculatorKeys = document.querySelector('.calculator-keys');

calculatorKeys.addEventListener('click', function(e) {
  const calculator = document.querySelector('.calculator');

  // display
  const display = document.querySelector('.calculator-display');
  if (!e.target.closest('button')) return
  
  // current key and display value
  const currKey = e.target;
  const currKeyValue = currKey.textContent;
  const displayValue = display.textContent;
  const {type }= currKey.dataset;
  const {prevKeyType} = calculator.dataset;
  
  // display for numbers
  if (type === 'number'){
    if (displayValue === '0') {
      display.textContent = currKeyValue;
    }
    else if (prevKeyType === 'operator') {
      display.textContent = currKeyValue;
    }
    else {
      display.textContent = displayValue + currKeyValue;
    }
  }

  // display for operators
  if (type === 'operator'){
    const opsKeys = document.querySelectorAll('.btn-ops');
    opsKeys.forEach(el => el.dataset.state = '')
    currKey.dataset.state = 'selected';

    // storing first number and operator type
    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = currKey.dataset.key;
  }

  // perform calculation if equal pressed
  if (type === 'equal') {
    const {firstNumber} = calculator.dataset
    const secondNumber = displayValue;
    const {operator} = calculator.dataset

    let result;
    if (operator === 'plus') result = +firstNumber + +secondNumber;
    if (operator === 'minus') result = +firstNumber - +secondNumber;
    if (operator === 'multiply') result = +firstNumber * +secondNumber;
    if (operator === 'divide') result = +firstNumber / +secondNumber;
    console.log(result);
  }
  calculator.dataset.prevKeyType = type;
})



