// Bucles - Loops

// FOR CLÁSICO
const alimentos = ['Patata', 'Cerveza', 'Pan', 'Agua', 'Galletas'];

for (let i = 0; i < alimentos.length; i++) {
    const element = alimentos[i];
    console.log(element, i);
}

// Inicializamos index con 0, le indicamos que el index va a seguir funcionando hasta que sea menor que 5 (en este caso) y en cada una de las vueltas va a sumar 1 al index
// PRIMERA VUELTA -> index = 0, index < 5, y suma 1
// -> const element = alimentos[0] -> Patata
// SEGUNDA VUELTA -> index = 1, index < 5, y suma 1
// ...
// QUINTA VUELTA -> index = 4, index < 5, y suma 1
// -> const element = alimentos[0] -> Galletas
// SEXTA VUELTA -> como index se vuelve 5, index ya no es < 5, por lo tanto rompe el bucle

// LO QUE PASA EN UN BUCLE SE QUEDA EN UN BUCLE -> aquí no podría hacer un console.log(element) porque esá dentro de un bucle

// Normalmente os vais a encontrar que el index se nombra como i
for (let i = 10; i < 10; i++) {
    if (i <= 8) {
        console.log('Hola', i);
    } else {
        console.log('Adios', i);
    }
}

// FOROF (Recomendación: para arrays)
const movies = ['Bambi', 'Terminator', 'Dumbo', 'Rambo', 'Alien'];

// el forof va a crear tantas movie como tenga movies
for (const movie of movies) {
    console.log(`Esta película se llama: ${movie}`);
}

// FOREACH
const alumnos = ['Daniel', 'Alex', 'Laura', 'Saray', 'Rubén'];

alumnos.forEach((alumno, i) => {
    console.log(`Buenas tardes ${alumno} #${i}`);
})

// FORIN (Recomendación: para objetos)
const show = {
    title: 'Los anillos del poder',
    director: 'Bayona',
    platform: 'Amazon',
    seasons: 5
}

for (const key in show) {
    console.log(`La clave: ${key}, tiene como valor: ${show[key]}`);
}

const numbers = [1, 2, 3, 4, 5];

for (const key in numbers) {
    console.log(key);
}

// FOR OF VS FOR EACH
const firstArray = ['Luke', 'Leia', 2020];
const firstString = ['El imperio contraataca'];

for (const element of firstArray) {
    console.log(element);
}

// la ventaja del foreach, LA ÚNICA, es que podemos acceder al índice
firstArray.forEach((element, index) => {
    console.log(element + ' ' + index);
});