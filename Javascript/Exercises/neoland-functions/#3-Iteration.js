const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = param => {
  let total = 0;
  for (let i = 0; i <= param.length - 1; i++) {
    total += param[i];
  }
  return total;
}

console.log(sumAll(numbers));
