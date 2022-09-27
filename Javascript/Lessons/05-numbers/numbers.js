function divider(a, b) {
    if (Number.isInteger(a / b)) {
        return 'Si';
    }
    return 'No';
}

console.log(divider(10, 5));

console.log(divider(5, 11));

function circunference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    } else {
        return parseInt(r) * 2.0 * Math.PI;
    }
}

console.log(circunference('1.55dsgsdfhsy')); // Devuelve el número en String

console.log(circunference('agafsgfashaash'));