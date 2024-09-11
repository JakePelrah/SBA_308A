import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Filter from "./filter/Filter";
import Card from "./card/Card";
import { dogNames } from "./dogNames.js"


const API_KEY =
  "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S";
const API_URL = "https://api.thedogapi.com/v1";
const headers = { "x-api-key": API_KEY };



function App() {
  const [allBreeds, setAllBreeds] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}/breeds`, { headers })
      .then((res) => res.json())
      .then(data => {
        data.forEach((breed, i) => breed.displayName = dogNames[i])
        setAllBreeds(data)
      })
      .catch((e) => console.log('could not load breeds'))
  }, []);


  const renderedCards = filteredData?.map((breed) => (
    <Card
      breed={breed}
    />
  ));

  return [
    <Navbar />,
    <Filter allBreeds={allBreeds} setFilteredData={setFilteredData} />,
    < div
      id="card-group"
      className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 g-4 my-2"
    >
      {renderedCards}
    </div >,
  ];
}

export default App;
