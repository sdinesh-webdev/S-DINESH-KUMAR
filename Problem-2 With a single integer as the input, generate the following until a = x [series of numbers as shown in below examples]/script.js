function generateSeries() {
  // Get the input value
  const input = document.getElementById("inputNumber").value;

  // Create an array to store the series
  let series = [];

  // Generate odd numbers from 1 to input*2
  for (let i = 1; i <= input; i++) {
    series.push(2 * i - 1);
  }

  // Display the result
  document.getElementById("result").textContent = series.join(", ");
}
