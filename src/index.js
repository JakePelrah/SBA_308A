// https://reqres.in/
const API_KEY =
  "live_a1MYcqCgLPpuiXnGF6X6zwsNezlkV1rjkcORH9zMdiKEwXfpAge0KM3ZtmcIlpoo";
const API_URL = "https://api.thedogapi.com/v1/breeds";

async function searchByBreed(breed) {
  const searchResults = await fetch(`${API_URL}/search?q=${breed}`).then(
    (res) => res.json()
  );

  console.log(searchResults);
}

searchByBreed("poodle");


// sidebar filter
// use ui library
// temperemnt 
// life spane
// intelligence
// wikipedia
// weight
// energy level
// hypoallergneic
