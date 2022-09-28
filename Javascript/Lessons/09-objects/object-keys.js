const object1 = {
    a: 'jose',
    b: 'pedro'
}

console.log(Object.keys(object1));

console.log(object1['a']);
console.log(object1.a);

const character = {
    name: 'Iron Man',
    realName: 'Tony Stark',
    suits: [
        {
            name: 'Mark TV',
            color: 'golden',
            status: 'Destroyed'
        },
        {
            name: 'Mark VII',
            color: 'red',
            status: 'Operative'
        }
    ]
}

console.log(character.suits[1].name);