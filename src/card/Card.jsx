import "./card.css";
import { useLocation } from 'react-router-dom';


function Card({ breed, adopt, adopted, deleteOne }) {

  const result = adopted.filter(a => JSON.parse(a.sub_id).id === breed.id)
  console.log(result)

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


        <div className="card-footer">
          {result.length > 0 ?

            <a onClick={(e) => { e.preventDefault(); deleteOne(result[0].id) }}
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className="btn abandon-btn"
            >
              Abandon
            </a> :
            <a onClick={(e) => adopt(e, breed)}
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className="btn adopt-btn"
            >
              Adopt
            </a>
          }
          <span className="ps-4">{breed.mileage} miles away</span>
        </div>

      </div>
    </div>
  );
}

export default Card;
