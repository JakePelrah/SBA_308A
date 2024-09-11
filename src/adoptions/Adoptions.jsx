import { useEffect, useState } from "react";
import "./adoptions.css";

const API_KEY =
    "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S";
const API_URL = "https://api.thedogapi.com/v1";
const headers = { "x-api-key": API_KEY, 'Content-Type': 'application/json' };


function Adoptions() {
    const [adopted, setAdopted] = useState([])


    async function deleteOne(favId) {
        return fetch(`https://api.thedogapi.com/v1/favourites/${favId}`, {
            method: 'DELETE',
            headers
        })
    }

    async function deleteAll() {
        const allAdopted = await getAdopted()
        console.log(allAdopted)
        allAdopted.forEach(pet => deleteOne(pet.id))
    }


    async function getAdopted() {
        const result = await fetch("https://api.thedogapi.com/v1/favourites", {
            headers
        }).then(res => res.json())

        return result
    }

    const renderedCards = adopted?.map((breed) => (
        <AdoptionCard key={breed.name}
            breed={breed}
            temp={breed.temp}
        />
    ));


    useEffect(() => {
        getAdopted().then(setAdopted)
    }, [])

    return (
        <div
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 mx-4 my-2"
        >
            {renderedCards}
            <button onClick={deleteAll}>DELETE</button>
        </div >

    );
}

export default Adoptions;



function AdoptionCard({ breed, adopt }) {
    let { displayName, temp } = JSON.parse(breed.sub_id)


    temp = temp
        ?.split(",")
        ?.sort((a, b) => a.length - b.length).slice(0, 4)
        ?.map((tag) => <span key={tag} className="badge">{tag}</span>)


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

