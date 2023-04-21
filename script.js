const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button:not(#clear)');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerHTML === '=') {
      display.value = eval(display.value);
    } else {
      display.value += button.innerHTML;
    }
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  display.value = '';
});
