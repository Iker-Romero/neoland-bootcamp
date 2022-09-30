const popularToys = [];
const toys = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (const toy of toys) {
  for (const key in toy) {
    if (key == "sellCount") {
      if (toys[toys.indexOf(toy)][key] > 15) {
        popularToys.push(toys[toys.indexOf(toy)]);
      }
    }
  }
}

console.log(popularToys);
