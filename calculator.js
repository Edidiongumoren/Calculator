
let displayValue = "";
let result;


function display (value) {
  /*if (value === '=') {
    return
  } else { */
  displayValue = displayValue + value;
  document.querySelector('.js-result').innerHTML = displayValue;

  
}

function calculate() {
  result = Number(eval(displayValue));
  document.querySelector('.js-result').innerHTML = result;
}

function clearDisplay() {
  console.log("Clear button pressed"); // For debugging
  displayValue = ""; // Reset the displayValue
  document.querySelector('.js-result').innerHTML = 0; // Clear the display
  console.log("Display cleared"); // Verify clear action
  
  
}
