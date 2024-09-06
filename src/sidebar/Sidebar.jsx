import "./sidebar.css";
import searchIcon from "../assets/icons/search-heart.svg";

function Sidebar() {
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
        />
      </div>

      <div className="form-group my-4">
        <label for="temperament">Temperament</label>
        <select className="form-control" id="temperament"></select>
      </div>

      <div className="form-group mb-4">
        <label for="breed">Breed</label>
        <select className="form-control" id="breed"></select>
      </div>

      <div className="form-group mb-2">
        <label for="lifespan">
          Lifespan
          <span>0.0</span>
          (yrs)
        </label>
        <input
          type="range"
          className="form-range"
          id="lifespan"
          min="0"
          max="20"
          step="1"
        />
      </div>

      <div className="form-group mb-2">
        <label for="weight">
          Weight
          <span>0.0</span>
          (lbs)
        </label>
        <input
          type="range"
          className="form-range"
          id="weight"
          min="0"
          max="300"
          step="1"
        />
      </div>

      <div className="form-group">
        <label for="weight">
          Height
          <span>0.0</span>
          (in)
        </label>
        <input
          type="range"
          className="form-range"
          id="weight"
          min="0"
          max="100"
          step="1"
        />
        <div className="d-flex justify-content-between">
          {/* <!-- <span>0.0</span> --> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
