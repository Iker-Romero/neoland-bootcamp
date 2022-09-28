// ES2020

// Literal strings

const firstName = 'Peter';
const surname = 'Parker';

const fullName = `${name} ${surname}`;

const html = `
<h2>
    ${fullName}
</h2>`

// Object destructuring
const alumn = {
    name: 'Pedro',
    edad: 29,
    job: 'Developer',
    hobbies: {
        sport: 'active',
        music: 'not active'
    }
}

/* const alumnName = alumn.name;
console.log(alumnName); */

const {name, age} = alumn;
const {sport} = alumn.hobbies;

console.log(name);
console.log(age);

// Spread Operators
const heroes = ['Aragon', 'Boromir', 'Frodo'];
const villains = ['Saruman', 'Sauron', 'Ella'];

const characters = [...heroes, ...villains, 'Morgoth'];

console.log(characters)

// const toDos = [...toDos, toDo]

// MAP

const officers = [
    {id: 20, name: 'Captain Piett'},
    {id: 24, name: 'General Veers'},
    {id: 56, name: 'Admiral Ozzel'},
    {id: 88, name: 'Commander Jerjerrod'}
]

// Con forof
const officersIDs = [];

for (const officer of officers) {
    officersIDs.push(officer.id)
}

console.log(officersIDs);

// Con map
const officersIDsWithMap = officers.map(officer => officer.id);
console.log(officersIDsWithMap);

const customOfficers = officers.map(officer => ({
    nombre: officer.name,
    identificacion: 66
}))

console.log(customOfficers);

// Filter -> Se queda con todas las coincidenias de la condición

const pilots = [
    {id: 2, name: 'Wedge Atntillos', faction: 'Rebels'},
    {id: 8, name: 'Ciena Rae', faction: 'Empire'},
    {id: 40, name: 'Iden Versio', faction: 'Empire'},
    {id: 66, name: 'Thane Kyrell', faction: 'Rebels'}
];

const rebels = pilots.filter(pilot => pilot.faction === 'Rebels');
console.log(rebels);
const over8 = pilots.filter(pilot => pilot.id > 8);
console.log(over8);

const rebelsArray = [];
for (const pilot of pilots) {
    if (pilot.faction === 'Rebels') {
        rebelsArray.push(pilot);
    }
}

// FIND -> Se queda con la primera coincidencia de la condición
const numArray = [2, 45, 76, 80, 45];
const find45 = numArray.find(number => number === 45);
console.log(find45);

// REDUCE
var rebelPilots = [
    {id: 2, name: 'Wedge Atntillos', years: 14},
    {id: 8, name: 'Ciena Rae', years: 30},
    {id: 40, name: 'Iden Versio', years: 16},
    {id: 66, name: 'Thane Kyrell', years: 22}
];

const totalYears = rebelPilots.reduce((accumulator, pilot) => accumulator + pilot.years, 0);

console.log(totalYears);