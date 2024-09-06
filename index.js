import { temperaments } from "./data.js";

const API_KEY =
  "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S";
const API_URL = "https://api.thedogapi.com/v1";
const headers = { "x-api-key": API_KEY };

const searchBar = document.getElementById('search-term')
searchBar.addEventListener('input', (e)=>{
  searchByBreed(e.target.value)
})

function createCard(breed) {
  const card = document.getElementById("template-card");
  const clone = card.content.cloneNode(true);

  const topImg = clone.querySelector(".card-img-top");
  clone.querySelector('.adopt-btn').href = `https://en.wikipedia.org/wiki/${breed.name}`
  topImg.src = breed.image.url;
  topImg.id = breed.image.id
  topImg.alt =`'Picture of an ${breed.name} dog.`
  clone.querySelector(".card-title").textContent = breed.name;

  return clone;
}

function createOption(option, defOption) {
  const newOption = document.createElement("option");
  let value, text;
  value = text = option;

  if (defOption) {
    value = "";
    text = defOption;
  }

  newOption.textContent = text;
  newOption.value = value;

  return newOption;
}

function setupTemperament() {
  const temperamentSelect = document.getElementById("temperament");

  const defaultOption = createOption(
    "Select a temperament.",
    "Select a temperament"
  );

  temperamentSelect.appendChild(defaultOption);

  for (const t of temperaments) {
    const newOption = createOption(t);
    temperamentSelect.appendChild(newOption);
  }

  temperamentSelect.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
}

async function getAllBreeds() {
  const breeds = await fetch(`${API_URL}/breeds`, { headers }).then((res) =>
    res.json()
  );
  return breeds;
}

async function setupBreeds() {

  const breedSelect = document.getElementById("breed");
  
  const defaultOption = createOption("Select a breed", "Select a breed");
  breedSelect.appendChild(defaultOption);

  const breeds = await getAllBreeds();

  for (const b of breeds) {
    const { name } = b;
    const newOption = createOption(name);
    breedSelect.appendChild(newOption);
  }

  breedSelect.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
}

async function searchByBreed(breed) {
  const breeds = await fetch(`${API_URL}/breeds/search?q=${breed}`, {
    headers,
  }).then((res) => res.json());

  const cardGroup = document.getElementById("card-group");
  cardGroup.innerHTML=''

  console.log(breeds);
  for (const breed of breeds) {
    const card = createCard(breed);
    cardGroup.appendChild(card);
  }

}

async function showAll() {
  const breeds = await getAllBreeds();
  const cardGroup = document.getElementById("card-group");
  
  console.log(breeds);
  for (const breed of breeds) {
    const card = createCard(breed);
    cardGroup.appendChild(card);
  }
}

setupTemperament();
setupBreeds();

// searchByBreed("toy");
