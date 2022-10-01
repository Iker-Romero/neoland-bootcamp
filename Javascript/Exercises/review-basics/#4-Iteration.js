const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array, text) => {
    for (const animal of animals) {
        if (animal === text) {
            return animals.indexOf(animal);
        }
    }
}

console.log(findArrayIndex(animals, 'Ajolote'));
