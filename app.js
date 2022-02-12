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
  // if (type === 'operator'){
    
  // }

  // perform calculation if equal pressed
  if (type === 'equal') {
    
  }
  calculator.dataset.prevKeyType = type;
})



