class Calculator {
  constructor(memoryField='', currentInput='0', resetInputFlag = true) {
    this.memoryField = memoryField;
    this.currentInput = currentInput;
    this.resetInputFlag = resetInputFlag;
  }

  onInput(input) {
    if(input === '.') {
      if(this.resetInputFlag) {
        this.currentInput = '0' + input;
        this.resetInputFlag = false;
      }
      else if(!/\./.test(this.currentInput)) {
        this.currentInput += input;
      }
    }    
    else if(/\d/.test(input)){ // If the input is a number
      if(input === '0' && this.currentInput === '0') {
        return
      }
      if(this.resetInputFlag || this.currentInput === '0') { 
        this.currentInput = input;
      }
      else {
        this.currentInput += input;
      }
      this.resetInputFlag = false;
    }
    else if(/\+|-|\*|\//.test(input)) {
      if(this.resetInputFlag && /\+|-|\*|\/$/.test(this.memoryField)) {                    // If the last pressed button was an operator,
        this.memoryField = this.memoryField.slice(0, this.memoryField.length - 1) + input; // Change the operator at the end of the expression.
      }
      else {
        this.memoryField += this.currentInput + input;
      }
      this.resetInputFlag = true;
    }
  }
  onEquals() {
    let result;
    if(this.resetInputFlag && this.memoryField !== '') { // If we press '=' after pressing an operator, evaluate the expression without the last symbol,
      result = eval(this.memoryField.slice(0, this.memoryField.length - 1)); // which is operator.
    }
    else {
      result = eval(this.memoryField + this.currentInput); // If we press '=' after we pressed some number, add the number to the expression and evaluate the expression.
    }
    this.resetInputFlag = true;
    this.currentInput = result;
    this.memoryField = '';
  }
  onDelete() {
    if(this.resetInputFlag === false && this.currentInput.length > 0) { // If the last input was a number and if there is something to delete,
      if(this.currentInput.length === 1) {                              // If it is the last digit, change the current input to 0
        this.currentInput = '0';
        this.resetInputFlag = true;
      }
      else {
        this.currentInput = this.currentInput.slice(0, this.currentInput.length - 1); // If it is not the last digit - delete the last digit.
      }
    }
  }
  onClean() {
    this.memoryField = '';
    this.currentInput = '0';
    this.resetInputFlag = true;
  }
}

export const calc = new Calculator();