// at

const array1 = [1, 5, 7, 9, 12];

const index1 = 3; // Si tenemos un string en vez de un number funciona igual

console.log(array1.at(index1));

console.log(array1[index1]);

// concat -> concatena un array con el array pasado por parámetro

const arrayConcat1 = [1, 2, 3];
const arrayConcat2 = [5, 7, 8];
const arrayConcat4 = ['a', 'b', {a: 'hola', b: 56}]
const arrayConcat3 = arrayConcat1.concat(arrayConcat2);
// ...spreed operator -> recorrer los arrays -> SI LO VAMOS A USAR
// [+...] -> dest almacenarlo
const arrayConcatSpreed = [...arrayConcat1, ...arrayConcat2, ...arrayConcat4];
console.log(arrayConcat3);

//coppwithin

const arrayCopy = ['a', 'b', 'z', 65];

console.log(arrayCopy.copyWithin(0, 2));

// entries

const arrayEntries = [1, 2, 3];

const iteratorEntries = arrayEntries.entries();

console.log(iteratorEntries);

console.log(iteratorEntries.next().value);

// fill -> param [valor a añadir] || 2 param - posición donde empieza || 3 param - posición donde termina

const arrayFill = [1, 2, 3, 5];
console.log(arrayFill.fill(0, 2, 4));

// flat sin param - 1 array
// si metes un valor numérico es la dimensión del array o arrays anidados

const arrayFlat = [1, 2, [3, 4], [5, [6, [90]]]];
console.log(arrayFlat.flat(99)); // aplana todos
console.log(arrayFlat.flat(3)); // aplana 90
console.log(arrayFlat.flat(2)); // aplana el 6
console.log(arrayFlat.flat()); // aplana un nivel

// includes -> te devuelve un true o false si encuentra el valor

const arrayIncludes = [1, 2, 3, 'pepe'];
console.log(arrayIncludes.includes('pepa'));

// indexof -> SI SE USA
const arrayIndexOf = ['A', 'B', 'C'];
//si el valor no existe dentro del array te devuelve -1
console.log(arrayIndexOf.indexOf('B'));

// join -> une -> SI SE USA POCO

const arrayJoin = ['A', 'B', 'C'];

console.log(arrayJoin.join());
console.log(arrayJoin.join(" "));
console.log(arrayJoin.join("+"));

// length -> propiedad y devuelve la longitud
console.log(arrayJoin.length);

// push y pop -> para añadir || para eliminar -> SI SE USAN
// shift = pop -> para eliminar al inicio

const arrayPushPop = [1, 2, 3, 4];

arrayPushPop.push('Hola');
console.log(arrayPushPop);
arrayPushPop.pop();
console.log(arrayPushPop)

// reverse -> da la vuelta al array -> SI SE USA

const arrayReverse = [1, 2, 3];
console.log(arrayReverse.reverse());


// unshift -> mismo que push pero añade al principio
const arrayUnshift = [1, 2, 3];
arrayUnshift.unshift(5, 6);
console.log(arrayUnshift);

// slice
const arraySlice = ['pato', 'rana', 'mono', 'foca'];
console.log(arraySlice.slice(2)); // desde el valor indicado hasta la lonitud
console.log(arraySlice.slice(1, 2)); // el segundo param que es limite no está incluído

// sort -> YO NO LO USO
const arraySort = ['Febrero', 'Junio', 'Mayo', 'Diciembre'];

arraySort.sort(); // orden alfabético
console.log(arraySort);

const arraySort2 = [1, 5, 10000, 20, 40, 90000];
arraySort2.sort(); // SORT PARA NÚMEROS CACA
console.log(arraySort2);

// splice - añade + borra || sustituye
const months = ['Jan', 'Feb', 'Mar', 'Jun', 'Jul'];

months.splice(1, 0, 'PEPE');
console.log(months);
months.splice(4, 2, 'PEPE');
// 1 param -> posición
// 2 param elementos a eliminar
// 3 param elemento a introducir
// const otherArray = months.splice(4, 2, 'PEPE');

// tostring
console.log(months.toString());

// values
const arrayValues = ['a', 'b', 'c'];
const iteratorValues = arrayValues.value();
console.log(iteratorValues);

for (const value of iteratorValues) {
    console.log(value);
}

