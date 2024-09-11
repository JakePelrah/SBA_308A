import { useEffect, useState } from "react";
import Card from "../card/Card";
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
        <Card key={breed.name}
            breed={breed}
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
