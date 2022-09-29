const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(arr, nombre) {
  for (const name of nameFinder) {
    if (name === nombre) {
      return true + ', posición ' + arr.indexOf(nombre);
    }
  }
  return false;
}

console.log(finderName(nameFinder, 'Iker'));
