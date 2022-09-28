const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = param => {
  total = 0;
  for (let i = 0; i <= param.length - 1; i++) {
    total += param[i];
  }
  return total / param.length;
}

console.log(average(numbers));
