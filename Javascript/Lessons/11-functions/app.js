// Tradicional
// () -> añadir parámetros con los que operar
function nameFunction(a, b = 15) {
    // operar y transformar
    // retornar un valor
    return`${a + b} NameFunction`;
}

// invocar a la función
nameFunction('Hola', 'Estudiaintes');
nameFunction(5);

// Ejemplo para object tenerlo en cuenta
// function functionLargeParams() {
//     a.name
//     //ooperar
// }
// functionLargeParams({name: 'pepe', age: 35})

const arrowFunction = () => {
    console.log('Hola');
    return 'Bienvenidos';
}

// SOLO SI SABEMOS LO QUE HACEMOS
const arrowReturnImplicito = () => 'Bienvenidos'
let greeting = arrowReturnImplicito('Pepe');
console.log(greeting);

// AYUDA VSCODE
function tradicional () {return 'Hola'}

const arrowFunctions = () => {return 'Hola'}

// SI HAY UN VALOR DE RETORNO -> SE ALMACENA EN OTRA VARIABLE
let greetingHola = arrowFunctions();