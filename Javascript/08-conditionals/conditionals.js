// Condicionales

const name = "Bruce";

if (name === "Bruce") {
  console.log("Es Batman");
} else {
  console.log("No es Bruce");
}

// Else if

const age = 18;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else if (age === 15) {
  console.log("Tienes 15 años");
} else if (age > 0 && age < 15) {
  console.log("Eres un niño");
} else {
  console.log("No has nacido");
}

// Ternario

const puedoEntrarAlConcierto = age >= 18 ? true : false;
console.log(puedoEntrarAlConcierto);

// // if (age >= 18) {
// //   return true;
// // } else {
// //   return false;
// // }

const superhero = 'Spider-Man';

switch (superhero) {
    case 'Spider-Man':
        console.log('Su nombre real es Peter Parker');
        break;
    case 'Dareedevil':
        console.log('Su nombre real es Matt Murdock');
        break;
    default:
        console.log('No se de quien me hablas');
        break; // Se puede evitar pero es un abuena práctica
}

const alimento = 'Patata';

switch (alimento) {
    case 'Patata':
    case 'Galleta':
    case 'Coca-Cola':
    case 'Zumo':
        console.log('Esto es lo que come Antonio');
        break;
    case 'Cafe':
        console.log('Esto no');
        break;
    default:
        console.log('Esta comida no existe');
        break;
}