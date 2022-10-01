const players = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, index1, index2) => {
  let player1 = array[index1];
  array.splice(index1, 1, array[index2]);
  array.splice(index2, 1, player1);
  return array;
};

console.log(swap(players, 1, 2));
