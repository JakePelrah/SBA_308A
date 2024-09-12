import { useEffect, useState } from "react";
import Filter from "./filter/Filter";
import Card from "./card/Card";
import { useDogs } from "./DogProvider.jsx";


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const { breeds, adopt, adopted, deleteOne } = useDogs()

  const renderedCards = filteredData?.map((breed) => (
    <Card key={breed.name}
      breed={breed}
      adopt={adopt}
      adopted={adopted}
      deleteOne={deleteOne}
    />
  ));

  return [
    <Filter breeds={breeds} setFilteredData={setFilteredData} />,
    < div
      id="card-group"
      className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 g-4 my-2"
    >
      {renderedCards}
    </div >,
  ];
}

export default App;
