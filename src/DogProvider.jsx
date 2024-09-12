import React, { createContext, useContext, useEffect, useState } from "react";
import { dogNames } from "./dogNames.js"
const headers = { "x-api-key": "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S", 'Content-Type': 'application/json' };
const API_URL = "https://api.thedogapi.com/v1";


const DogContext = createContext();
export const useDogs = () => useContext(DogContext)

export default function DogProvider({ children }) {
    const [breeds, setBreeds] = useState([]);
    const [adopted, setAdopted] = useState([])

    useEffect(() => {
        getBreeds()
        refreshAdopted()
    }, [])

    function getBreeds() {
        fetch(`${API_URL}/breeds`, { headers })
            .then((res) => res.json())
            .then(data => {
                data.forEach((breed, i) => {
                    breed.displayName = dogNames[i];
                    breed.mileage = Math.floor(Math.random() * 10 + 1)
                })
                setBreeds(data)
            })
            .catch((e) => console.log('could not load breeds'))
    }


    async function deleteOne(favId) {
        fetch(`https://api.thedogapi.com/v1/favourites/${favId}`, {
            method: 'DELETE',
            headers
        }).then(refreshAdopted)
    }

    async function deleteAll() {
        refreshAdopted()
        adopted.forEach(pet => deleteOne(pet.id))
    }

    function refreshAdopted() {
        fetch("https://api.thedogapi.com/v1/favourites", {
            headers
        }).then(res => res.json())
            .then(setAdopted)
            .catch("Refresh the browser")
    }

    function adopt(e, breed) {
        e.preventDefault()

        fetch("https://api.thedogapi.com/v1/favourites", {
            method: 'POST',
            headers,
            body: JSON.stringify({
                image_id: breed.reference_image_id,
                sub_id: `{"displayName":"${breed.displayName}", "id":${breed.id}, "temp":"${breed.temperament}"}`,
            })
        }).then(refreshAdopted)
            .catch((e) => console.log('could not adopt pet'))
    }

    return (
        <DogContext.Provider value={{
            breeds, setBreeds,
            refreshAdopted, adopted, adopt, deleteOne
        }}>
            {children}
        </DogContext.Provider>
    );
};