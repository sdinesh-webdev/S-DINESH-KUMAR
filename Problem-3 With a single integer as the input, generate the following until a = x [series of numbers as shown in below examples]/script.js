function generateSeries() {
  // Step 1: Get the number from input box
  let userNumber = document.getElementById("inputNumber").value;

  // Step 2: Convert text to number
  let number = Number(userNumber);

  // Step 3: Check if it's a valid number
  if (number < 1) {
    document.getElementById("result").textContent =
      "Please enter a number bigger than 0";
    return;
  }

  // Step 4: If it's an even number, make it odd by subtracting 1
  if (number % 2 == 0) {
    number = number - 1;
  }

  // Step 5: Create empty list to store odd numbers
  let oddNumbers = [];

  // Step 6: Add odd numbers one by one
  for (let i = 1; i <= number; i++) {
    let oddNumber = 2 * i - 1; // Formula to get odd numbers: 2×i - 1
    oddNumbers.push(oddNumber);
  }

  // Step 7: Show the result with commas between numbers
  document.getElementById("result").textContent = oddNumbers.join(", ");
}
