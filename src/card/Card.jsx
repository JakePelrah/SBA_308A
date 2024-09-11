import "./card.css";
import { useLocation } from 'react-router-dom';

function Card({ breed, adopt }) {
  let location = useLocation();

  console.log(breed)

  return (
    <div className="col my-4">
      <div className="card breed-card">
        <div className="breed-card-header card-header text-truncate" onClick={() => window.open(`https://en.wikipedia.org/wiki/${breed.name}`, '_blank').focus()}>
          {breed.name}
        </div>
        <img src={breed.image.url} className="card-img-top" alt={`${breed.name}.`} />
        <div className="card-body">
          <h5 className="card-title">{breed.displayName}</h5>

        </div>

        {location.pathname === '/adoptions' ? null : <div className="card-footer">
          <a onClick={(e) => adopt(e, breed)}
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="btn adopt-btn"
          >
            Adopt
          </a>
         <span className="ps-4">{breed.mileage} miles away</span>
          </div>
        }
      </div>

    </div>
  );
}

export default Card;
