const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = param => {
  let total = 0;
  for (let i = 0; i <= param.length - 1; i++) {
    if (typeof param[i] === "number") {
      total += param[i];
    } else if (typeof param[i] === "string") {
      total += param[i].length;
    }
  }
  return total / param.length;
}

console.log(averageWord(mixedElements));
