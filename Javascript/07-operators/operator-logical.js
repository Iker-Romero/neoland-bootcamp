// Operadores lógicos
// Operador OR - O -> ||

const soyMayorDeEdad = true;
const tengoDinero = false;

const puedoSalirDeCervezas = soyMayorDeEdad || tengoDinero;
console.log(puedoSalirDeCervezas);

// Operador AND - Y -> &&

const tengoCoche = false;
const tengoCarnet = true;

const puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);

// NOT - NO -> !

const trueNot = !true;
const falseNot = !false;

console.log(trueNot);
console.log(falseNot);

//-------------//

const name = 'Peter';

if (name) {
    console.log('Hola ' + name);
} else {
    console.log('No hay nombre')
}