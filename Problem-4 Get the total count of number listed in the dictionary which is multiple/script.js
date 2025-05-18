// Simple solution for kids and beginners
function countMultiples() {
  let input = document.getElementById("inputNumbers").value;
  let arr = input
    .split(",")
    .map((x) => parseInt(x.trim()))
    .filter((x) => !isNaN(x));
  let result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
    for (let num of arr) {
      if (num % i === 0) result[i]++;
    }
  }
  document.getElementById("output").innerText = JSON.stringify(result);
}
