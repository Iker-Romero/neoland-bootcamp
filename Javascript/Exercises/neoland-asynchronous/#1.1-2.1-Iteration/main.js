// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

const getData = async () => {
  try {
    const rawData = await fetch("https://api.agify.io?name=michael");
    const jsonData = await rawData.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};

getData()

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const baseUrl = "https://api.nationalize.io";

const getData2 = async (name) => {
  try {
    const rawData = await fetch(`https://api.nationalize.io?name=${name}`);
    const jsonData = await rawData.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error)
  }
}

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log(input)
  console.log(input.value)
  getData2(input.value);
});
