const sum = (numberOne , numberTwo) => {
    if (numberOne > numberTwo) {
        return numberOne;
    } else if (numberOne < numberTwo) {
        return numberTwo;
    } else {
        return console.log('The numbers are equal.');
    }
}
