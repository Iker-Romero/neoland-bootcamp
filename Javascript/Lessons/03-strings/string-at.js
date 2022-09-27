// El método at te devuelve el elemento en la posición indicada

const sentence = "Yo soy batman";

let index = 5;

console.log(`Voy a usar el index ${index} para que se devuelva el elemento en esa posición ${sentence.at(index)}`);

console.log(`Voy a usar el index ${index} para que se devuelva el elemento en esa posición ${sentence.at(index - 1)}`);

// cuando a at no le pasamos un valor por defecto es 0
console.log(`Voy a usar el index ${index} para que se devuelva el elemento en esa posición ${sentence.at()}`);

// Cuando a at le pasamos -1 nos devuelve el elemento en la última posición
console.log(`Voy a usar el index ${index} para que se devuelva el elemento en esa posición ${sentence.at(-1)}`);