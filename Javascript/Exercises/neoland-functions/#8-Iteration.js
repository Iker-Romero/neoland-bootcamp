const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

repeatCounter = words => {
    const retorno = [];
    for (let i = 0; i <= words.length - 1; i++) {
        let word = words[i];
        let count = 0;
        for (let j = i; j <= words.length - 1; j++) {
            if (word === words[j]) {
                count += 1;
            }
        }
        retorno.push(`"${word}" se repite ${count} veces.`);
    }
    return retorno;
}

console.log(repeatCounter(counterWords));