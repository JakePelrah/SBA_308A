import { useEffect, useReducer } from "react";
import noUiSlider from "nouislider";
import searchIcon from "../assets/icons/search-heart.svg";
import "nouislider/dist/nouislider.css";
import "./filter.css";

const initialState = {
  searchTerm: "",
  lifeSpan: [0, 30],
  weight: [0, 150],
  height: [0, 30],
}

function reducer(state, action) {
  switch (action.type) {
    case "search":
      return { ...state, searchTerm: action.payload };
    case "lifespan":
      return { ...state, lifeSpan: action.payload };
    case "weight":
      return { ...state, weight: action.payload };
    case "height":
      return { ...state, height: action.payload };
    default:
      return state;
  }
}

function Filter({
  setFilteredData,
  allBreeds
}) {

  const [breedFilterParam, setBreedFilterParam] = useReducer(reducer, initialState);

  useEffect(() => {
    const lifeSpan = document.getElementById("lifespan");
    const lifeSlider = noUiSlider.create(lifeSpan, {
      start: [0, 30],
      tooltips: true,
      connect: true,
      range: {
        min: 0,
        max: 30,
      },
    });
    lifeSlider.on('slide', (e) => setBreedFilterParam({ type: 'lifespan', payload: e.map(parseFloat) }))

    const weight = document.getElementById("weight");
    const weightSlider = noUiSlider.create(weight, {
      start: [0, 150],
      tooltips: true,
      connect: true,
      range: {
        min: 0,
        max: 150,
      },
    });
    weightSlider.on('slide', (e) => setBreedFilterParam({ type: 'weight', payload: e.map(parseFloat) }))

    const height = document.getElementById("height");
    const heightSlider = noUiSlider.create(height, {
      start: [0, 30],
      tooltips: true,
      connect: true,
      range: {
        min: 0,
        max: 30,
      },
    });

    heightSlider.on('slide', (e) => setBreedFilterParam({ type: 'height', payload: e.map(parseFloat) }))

    return () => {
      lifeSlider.destroy();
      weightSlider.destroy();
      heightSlider.destroy();
    };
  }, []);


  useEffect(() => {
    findData(allBreeds)
  }, [breedFilterParam, allBreeds])

  function getRange(rangeStr) {
    console.log(rangeStr)
    const data = rangeStr.split(' ')
    const range = data
      .filter(item => /^\d+$/.test(item))
      .map(Number);
    return range

  }

  function isInRange(searchRange, breedRange) {

    if (breedRange.length === 1) {
      breedRange.unshift(breedRange - 1)
    }
    return searchRange[0] <= breedRange[0] && breedRange[1] <= searchRange[1];
  }




  function findData() {
    console.log(allBreeds)
    const filteredData = allBreeds?.filter(breed => isInRange(breedFilterParam.lifeSpan, getRange(breed.life_span))
      && isInRange(breedFilterParam.weight, getRange(breed.weight.imperial))
      && isInRange(breedFilterParam.height, getRange(breed.height.imperial))
      && breed.name.toLowerCase().includes(breedFilterParam.searchTerm.toLowerCase())

    )
    setFilteredData(filteredData)
  }

  return (
    <div className="sidebar">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button className="btn" id="search-btn" type="button">
            <img width="25px" alt="search icon" src={searchIcon} />
          </button>
        </div>
        <input
          id="search-term"
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          onInput={(e) => setBreedFilterParam({ type: 'search', payload: e.target.value })}
        />
      </div>

      <div className="form-group my-5">
        <label for="lifespan">
          Lifespan (yrs)
        </label>
        <div className="slider-fit" id="lifespan" />
      </div>

      <div className="form-group my-5">
        <label for="weight">
          Weight (lbs)
        </label>
        <div className="slider-fit" id="weight" />
      </div>

      <div className="form-group my-5">
        <label for="height">
          Height (in)
        </label>
        <div className="slider-fit" id="height" />
        <div className="d-flex justify-content-between">
        </div>
      </div>
    </div>
  );
}

export default Filter;
