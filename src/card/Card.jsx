import "./card.css";
import wiki from "../assets/icons/wikipedia.svg"

function Card({ breed }) {

  console.log(breed)

  const temperamentTags = breed.temperament
    ?.split(",")
    ?.sort((a, b) => a.length - b.length).slice(0, 4)
    ?.map((tag) => <span className="badge">{tag}</span>)


  return (
    <div className="col my-4">
      <div className="card">
        <div className="card-header">
          <a className="header-title"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://en.wikipedia.org/wiki/${breed.name}`}
          >
            {breed.name}
          </a></div>
        <img src={breed.image.url} className="card-img-top" alt={`${breed.name}.`} />
        <div className="card-body">
          <h5 className="card-title">{breed.displayName}</h5>

          <p className="card-text">
            {temperamentTags ? (

              <div>{temperamentTags}</div>
            ) : null}

          </p>

        </div>

        <div className="card-footer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="btn adopt-btn"
          >
            Adopt
          </a></div>
      </div>
    </div>
  );
}

export default Card;
