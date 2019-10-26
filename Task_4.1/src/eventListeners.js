import { calc } from './calc';

let memoryField = document.getElementById('memoryField');
let currentInput = document.getElementById('currentInput');

const button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  calc.onInput('1');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
  calc.onInput('2');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
  calc.onInput('3');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
  calc.onInput('4');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button5 = document.getElementById('button5');
button5.addEventListener('click', function() {
  calc.onInput('5');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button6 = document.getElementById('button6');
button6.addEventListener('click', function() {
  calc.onInput('6');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button7 = document.getElementById('button7');
button7.addEventListener('click', function() {
  calc.onInput('7');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button8 = document.getElementById('button8');
button8.addEventListener('click', function() {
  calc.onInput('8');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button9 = document.getElementById('button9');
button9.addEventListener('click', function() {
  calc.onInput('9');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const button0 = document.getElementById('button0');
button0.addEventListener('click', function() {
  calc.onInput('0');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonC = document.getElementById('buttonC');
buttonC.addEventListener('click', function() {
  calc.onClean();
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonDel = document.getElementById('buttonDel');
buttonDel.addEventListener('click', function() {
  calc.onDelete();
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', function() {
  calc.onInput('+');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', function() {
  calc.onInput('-');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonMultiplication = document.getElementById('buttonMultiplication');
buttonMultiplication.addEventListener('click', function() {
  calc.onInput('*');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonDivision = document.getElementById('buttonDivision');
buttonDivision.addEventListener('click', function() {
  calc.onInput('/');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonEquals = document.getElementById('buttonEquals');
buttonEquals.addEventListener('click', function() {
  calc.onEquals('');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});

const buttonDecimal = document.getElementById('buttonDecimal');
buttonDecimal.addEventListener('click', function() {
  calc.onInput('.');
  currentInput.value = calc.currentInput;
  memoryField.value = calc.memoryField;
});