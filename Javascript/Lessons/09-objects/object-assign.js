const target = {a: 1, b: 2};
const source = {b : 3,c: 4};

// assign() hace un merge de objetos, si hay propiedades comunes, se sobreescriben

const returnedTarget = Object.assign(target, source);

console.log('target', target);
console.log('source', source)
console.log('returnedTarget', returnedTarget);