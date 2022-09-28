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

function removeDuplicates(param) {
  for (let i = 0; i <= param.length - 1; i++) {
    if (i !== param.lastIndexOf(param[i])) {
      param.splice(i)
    }
  }
  return param;
}

console.log(removeDuplicates(duplicates));

// function removeDuplicates(param) {
//     for (let i = 0; i <= param.length - 1; i++) {
//         for (let j = i + 1; j <= param.length; i++) {
//           if (param[i] === param[j]) {
//             param[j].de
//           }
//         }
//     }
// }