import { temperaments } from "./data.js";

const API_KEY =
  "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S";
const API_URL = "https://api.thedogapi.com/v1";
const headers = { "x-api-key": API_KEY };

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
  const breeds = await fetch(`${API_URL}/breeds`, {
    method: "GET",
    headers: {
      "x-api-key":
        "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S",
    },
  }).then((res) => res.json());
  return breeds;
}

async function setupBreeds() {
  const breedSelect = document.getElementById("breed");

  const defaultOption = createOption("Select a breed", "Select a breed");

  breedSelect.appendChild(defaultOption);

  const breeds = await getAllBreeds();

  for (const b of breeds) {
    const {name} = b
    const newOption = createOption(name);
    breedSelect.appendChild(newOption);
  }

  breedSelect.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
}

async function searchByBreed(breed) {
  const searchResults = await fetch(`${API_URL}/breeds/search?q=${breed}`, {
    headers,
  }).then((res) => res.json());

  console.log(searchResults);
}

setupTemperament();
setupBreeds();
// searchByBreed("toy");
