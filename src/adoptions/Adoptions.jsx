import { useEffect } from "react";
import { useDogs } from "../DogProvider";
import "./adoptions.css";

function Adoptions() {
    const { adopted, refreshAdopted } = useDogs()

    
    const renderedCards = adopted?.map((breed, key) => (
        <AdoptionCard key={key}
            breed={breed}
            temp={breed.temp}
        />
    ));

    return (
        <div className="row row-cols-1 
        row-cols-sm-2 
        row-cols-lg-3 
        row-cols-xl-4 
        g-4 mx-4 my-2">{renderedCards}
        </div >
    );
}

export default Adoptions;


function AdoptionCard({ breed }) {
    let { displayName, temp } = JSON.parse(breed.sub_id)

    temp = temp
        ?.split(",")
        ?.sort((a, b) => a.length - b.length).slice(0, 4)
        ?.map((tag, key) => <span key={key} className="badge">{tag}</span>)

    return (
        <div className="col my-4">
            <div className="card adoption-card">
                <div className="adoption-card-header card-header">
                    {displayName}
                </div>
                <img src={breed.image.url} className="card-img-top" alt={`${breed.name}.`} />
                <div className="card-body">
                    {temp}
                </div>
                <div className="card-footer"><b>Adoption Fee:</b>$300</div>
            </div>
        </div>
    );
}

