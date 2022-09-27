let age = 15;

let status = (age >= 10) ? adult() : minor();

console.log(status);

function adult() {
    return console.log('Puedes pasar a mi bar');
}

function minor() {
    return console.log('Vete a jugar al parque');
}