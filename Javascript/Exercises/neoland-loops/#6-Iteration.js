const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

newToys = [];

for (const toy of toys) {
  if (toys[toys.indexOf(toy)].name.includes("gato") === false) {
    // toys.splice(toys.indexOf(toy), 1);
    newToys.push(toy);
  }
}

// console.log(toys);

console.log(newToys);
