// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

streamers.filter((streamer) => streamer.name.includes("u"));

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamersFiltered = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("Legends")
);

for (const streamer of streamersFiltered) {
  for (const key in streamer) {
    if (streamer[key] > 35) {
      const gameUpperCase = streamer.gameMorePlayed.toUpperCase();
      streamer.gameMorePlayed = gameUpperCase;
    }
  }
}

console.log(streamersFiltered);
