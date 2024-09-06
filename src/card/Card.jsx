import "./card.css";

function Card({ name, imgUrl, temperament }) {
  
  const temperamentTags = temperament
    ?.split(",")
    ?.map((tag) => <span className="badge">{tag}</span>);

  return (
    <div className="col">
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt={`${name}.`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"></p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://en.wikipedia.org/wiki/${name}`}
            className="btn adopt-btn"
          >
            WIKI
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/"
            className="btn adopt-btn"
          >
            Adopt
          </a>
        </div>
        {temperamentTags ? (
          <div class="card-footer">{temperamentTags}</div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
