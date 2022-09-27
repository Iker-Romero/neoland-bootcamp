const sentence = "Yo soy tu padre";

const searchWord = "padre";

console.log(`The word ${searchWord} wxist in sentece: ${sentence.indexOf(searchWord)}`);

const sentenceRepeatWord = "Yo soy tu padre, tu padre, tu padre";

console.log(`The word ${searchWord} wxist in sentece: ${sentenceRepeatWord.lastIndexOf(searchWord)}`);
