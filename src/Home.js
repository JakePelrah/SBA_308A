import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function Home() {
  const [breedData, setBreedData] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then(setBreedData);
  }, []);



  return [
    <Navbar />,
    <Sidebar />,
    <div
      id="card-group"
      className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-4 g-4 mt-2"
    >
      {JSON.stringify(breedData)}
    </div>,
  ];
}

export default Home;
