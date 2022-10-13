// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc. EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

const getData = async (name) => {
  try {
    const rawData = await fetch(`https://api.nationalize.io?name=${name}`);
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener("click", async () => {
  try {
    console.log(input.value);
    const data = await getData(input.value);
    console.log(data);
    for (const country of data.country) {
      document.body.innerHTML += `
      <p>El nombre ${input.value} tiene un ${country.probability} porciento de ser ${country.country_id}.</p>
      `;
    }
  } catch (error) {
    console.log(error);
  }
});
