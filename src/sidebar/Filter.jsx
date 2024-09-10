import "./filter.css";
import searchIcon from "../assets/icons/search-heart.svg";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { useEffect } from "react";

function Sidebar({
  setSearchTerm,
  setLifeSpan,
  setWeight,
  setHeight,
}) {
  useEffect(() => {
    const lifeSpan = document.getElementById("lifespan");
    const lifeSlider = noUiSlider.create(lifeSpan, {
      start: [4, 20],
      tooltips:true,
      connect: true,
      range: {
        min: 0,
        max: 30,
      },
    });
    lifeSlider.on('slide',(e)=>setLifeSpan(e.map(parseFloat)))

    const weight = document.getElementById("weight");
    const weightSlider = noUiSlider.create(weight, {
      start: [4, 20],
      tooltips:true,
      connect: true,
      range: {
        min: 0,
        max: 30,
      },
    });

    const height = document.getElementById("height");
    const heightSlider = noUiSlider.create(height, {
      start: [4, 20],
      tooltips:true,
      connect: true,
      range: {
        min: 0,
        max: 30,
      },
    });

    return () => {
      lifeSlider.destroy();
      weightSlider.destroy();
      heightSlider.destroy();
    };
  }, []);

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
          onInput={(e) => setSearchTerm(e.target.value)}
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

export default Sidebar;
