// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = async () => {
  try {
    await new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 2000);
    });

    console.log("Time out!");
  } catch (error) {
    console.log(error);
  }
};

runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

async function getCharacters() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await res.json();
    console.log(characters);
  } catch (error) {
    console.log(error);
  }
}

getCharacters();
