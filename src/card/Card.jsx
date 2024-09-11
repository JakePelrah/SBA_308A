import "./card.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Card({ breed, adopt }) {
  let location = useLocation();
  const navigate = useNavigate();


  const temperamentTags = breed.temperament
    ?.split(",")
    ?.sort((a, b) => a.length - b.length).slice(0, 4)
    ?.map((tag) => <span key={tag} className="badge">{tag}</span>)

  return (
    <div className="col my-4">
      <div className="card">
        <div className="card-header" onClick={() => window.open(`https://en.wikipedia.org/wiki/${breed.name}`, '_blank').focus()}>
          {breed.name}
        </div>
        <img src={breed.image.url} className="card-img-top" alt={`${breed.name}.`} />
        <div className="card-body">
          <h5 className="card-title">{breed.displayName}</h5>

          {temperamentTags ? (
            <div className="card-text">{temperamentTags}</div>
          ) : null}
        </div>

        {location.pathname === '/adoptions' ? null : <div className="card-footer">
          <a onClick={(e) => adopt(e, breed)}
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="btn adopt-btn"
          >
            Adopt
          </a></div>
        }
      </div>

    </div>
  );
}

export default Card;
