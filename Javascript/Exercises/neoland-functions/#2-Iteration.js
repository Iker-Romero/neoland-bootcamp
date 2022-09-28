const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord = param => {
  let longest = "";
  for (let i = 0; i <= param.length - 1; i++) {
    if (param[i].length > longest.length) {
        longest = param[i];
    }
  }
  return longest;
}

console.log(findLongestWord(avengers));
