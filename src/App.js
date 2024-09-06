import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Card from "./card/Card";

const API_KEY =
  "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S";
const API_URL = "https://api.thedogapi.com/v1";
const headers = { "x-api-key": API_KEY };

function App() {
  const [breedData, setBreedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [lifeSpan, setLifeSpan] = useState(20);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/breeds`, { headers })
      .then((res) => res.json())
      .then(setBreedData);
  }, []);

  useEffect(() => {
    const filteredByTerm = breedData?.filter((breed) =>
      breed.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    const filteredByLifeSpan = filteredByTerm?.filter(
      (breed) => parseInt(breed.life_span.split(" ")[0]) >= lifeSpan
    );

    const filteredByWeight = filteredByLifeSpan?.filter((breed) =>
      parseInt(breed.weight.imperial.split(" ")[0]) >= weight
    );

    const filteredByHeight = filteredByWeight?.filter((breed) =>
      parseInt(breed.height.imperial.split(" ")[0]) >= height
    );

    setFilteredData(filteredByHeight);
  }, [searchTerm, breedData, lifeSpan, weight, height]);

  const renderedCards = filteredData?.map((breed) => (
    <Card
      name={breed.name}
      imgUrl={breed.image.url}
      temperament={breed.temperament}
    />
  ));

  return [
    <Navbar />,
    <Sidebar
      setSearchTerm={setSearchTerm}
      setLifeSpan={setLifeSpan}
      lifeSpan={lifeSpan}
      setHeight={setHeight}
      height={height}
      setWeight={setWeight}
      weight={weight}
    />,
    <div
      id="card-group"
      className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 g-4 my-2"
    >
      {renderedCards}
    </div>,
  ];
}

export default App;
