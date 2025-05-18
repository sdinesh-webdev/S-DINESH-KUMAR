function generateSeries() {
  // Get input value and convert to num
  let input = parseInt(document.getElementById("inputNumber").value);

  // Check for valid input
  if (isNaN(input) || input < 1) {
    document.getElementById("result").textContent =
      "Please enter a positive number";
    return;
  }

  // If input is even, reduce it by 1
  if (input % 2 === 0) {
    input = input - 1;
  }

  // Create an array to store the series
  let series = [];

  // Generate odd numbers from 1 to input
  for (let i = 1; i <= input; i++) {
    series.push(2 * i - 1);
  }

  // Display the result
  document.getElementById("result").textContent = series.join(", ");
}
