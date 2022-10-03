// Iteración #2: Destructuring

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(name);
console.log(race);
