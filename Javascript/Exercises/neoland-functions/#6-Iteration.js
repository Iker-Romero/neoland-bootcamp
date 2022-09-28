const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const removeDuplicates = param => {
  for (let i = 0; i <= param.length - 1; i++) {
    if (i !== param.lastIndexOf(param[i])) {
      param.splice(i, 1);
    }
  }
  return param;
}

console.log(removeDuplicates(duplicates));
