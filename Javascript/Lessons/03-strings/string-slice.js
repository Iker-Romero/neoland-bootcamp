const sentence = "Pedro está muy concentrado";

console.log(sentence.slice(0, 9));

const newSentence = sentence.replace(sentence.slice(0, 9), 'Juan');

console.log(newSentence);