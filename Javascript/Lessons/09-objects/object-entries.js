const object1 = {
    a: 'lo que sea',
    b: 59
}

// Object.entries() te transforma el objeto en un array de arrays
// {a: 50, b: 85}
// [[a, 50], [b, 85]]

console.log(Object.entries(object1));

// for ... of -> recorre [...]
// 0 iteración -> [a, 50]
// 1 iteración -> [b, 85]
// destructuring para 0: [posicion0, posicion1] -> destructuring [a, 50]
// destructuring para 1: [posicion0, posicion1] -> destructuring [b, 85]

for (const [posicion0, posicion1] of Object.entries(object1)) {
    console.log(`${posicion0}: ${posicion1}`)
}

const arrayElements = [[1, 2, 3], [1, 2, 3, 4]];

for (const [pos0, pos1] of arrayElements) {
    console.log(`${pos0}: ${pos1}`);
}

for (let i = 0; i < arrayElements.length; i++) {
    for (let j = 0; j < arrayElements[i].length; j++) {
        console.log(arrayElements[i][j]);
    }
}