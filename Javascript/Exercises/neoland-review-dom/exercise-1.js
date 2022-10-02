// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countriesArray = [
  "Japón",
  "Nicaragua",
  "Suiza",
  "Australia",
  "Venezuela",
];

const ul = document.createElement("ul");

const li = document.createElement("li");

for (const countryName of countriesArray) {
  ul.innerHTML += `
    <li>${countryName}</li>
    `;
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const carsDiv = document.querySelector('[data-function="printHere"]');

const carsUL = document.createElement("ul");

for (const car of cars) {
  carsUL.innerHTML += `
    <li>${car}</li>
    `;
}

document.body.appendChild(carsUL);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  const div = document.createElement("div");
  // NOTA IMPORTANTE: Esta línea 59 pertenece al apartado 1.6 de este ejercicio
  div.innerHTML += `
    <h4>${country.title}</h4>
    <img src="${country.imgUrl}">
    <button class="removeThisImage">Remove this image</button>
    `;
  document.body.appendChild(div);
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const button = document.querySelector("#remove");

button.addEventListener("click", () => {
  const imgUrl = countries[countries.length - 1].imgUrl;
  const image = document.querySelector(`[src="${imgUrl}"]`);
  countries.splice(countries.length - 1);
  image.parentElement.remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const removeThisImage = document.querySelectorAll(".removeThisImage");

for (const button of removeThisImage) {
    button.addEventListener("click", () => button.parentElement.remove());
}
