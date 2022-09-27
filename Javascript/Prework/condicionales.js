let user = true;

// if (user) {
//     console.log("Bienvenido");
// } else {
//     console.log("Debes iniciar sesión");
// }

function isLogged(user) {
    if (typeof condition !== "string") {
        console.log("Debes tener un nombre");
    } else if (user) {
        console.log("Bienvenido " + user);
    } else {
        console.log("Debes iniciar sesión");
    }
}

isLogged("Pepe"); // Pepe
isLogged(); // Debes iniciar sesión
isLogged(5); // Bienvenido 5
isLogged(0); // Debes iniciar sesión
isLogged(true) // Bienvenido true
isLogged(false) // Debes iniciar sesión