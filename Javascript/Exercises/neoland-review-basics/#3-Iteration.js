const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundsCount = {};

for (const user of users) {
  for (const userProp in user) {
    console.log(userProp);
    if (userProp === "favoritesSounds") {
      for (const sound in users[users.indexOf(user)].favoritesSounds) {
        if (Object.keys(soundsCount).includes(sound)) {
          soundsCount[sound] += 1;
        } else {
          soundsCount[sound] = 1;
        }
      }
    }
  }
}

console.log(soundsCount);