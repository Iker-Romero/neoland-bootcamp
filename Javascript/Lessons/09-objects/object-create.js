const person = {
    isHuman: true,
    name: 'Alberto',
    printIntroduction: function() {
        console.log(`Hola soy ${this.name} y ${this.isHumam ? 'soy humano' : 'no soy humano'}`)
    }
}

console.log(person.name);

const javi = object.create(person);

javi.name = 'Javier';
javi.isHumann = false;

javi.printIntroduction();
