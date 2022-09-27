const sentence = "THe quick brown fox jumps over the lazy dog.";

const index = 3;

console.log(`The character index ${index} is ${sentence.charAt(index)}`);

console.log(`The character code ${sentence.charCodeAt(index)}`);

const icon = '👌';

console.log(`The character code ${sentence.codePointAt(icon)}`);

const name = 'John';
const greeting = 'Hello';

console.log(greeting.concat(' ', name));