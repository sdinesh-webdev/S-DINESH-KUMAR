// Calculator class that handles all operations
class Calculator {
  constructor() {
    // Get input elements
    this.num1Input = document.getElementById("num1");
    this.num2Input = document.getElementById("num2");
    this.resultDiv = document.getElementById("result");
  }

  // Get input values
  getNumbers() {
    return {
      num1: parseFloat(this.num1Input.value),
      num2: parseFloat(this.num2Input.value),
    };
  }

  // Display result
  showResult(operation, result) {
    this.resultDiv.textContent = `Result: ${result}`;
  }

  // Addition
  add() {
    const { num1, num2 } = this.getNumbers();
    this.showResult("Addition", num1 + num2);
  }

  // Subtraction
  subtract() {
    const { num1, num2 } = this.getNumbers();
    this.showResult("Subtraction", num1 - num2);
  }

  // Multiplication
  multiply() {
    const { num1, num2 } = this.getNumbers();
    this.showResult("Multiplication", num1 * num2);
  }

  // Division
  divide() {
    const { num1, num2 } = this.getNumbers();
    if (num2 === 0) {
      this.showResult("Error", "Cannot divide by zero!");
      return;
    }
    this.showResult("Division", num1 / num2);
  }
}

// Create calculator instance
const calc = new Calculator();
