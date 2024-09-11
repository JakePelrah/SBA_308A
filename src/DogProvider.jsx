import React, { createContext, useContext, useState } from "react";
const headers = { "x-api-key": "live_7sygHn6Aun2fDcWkQcu2kO1zltKyRVQti6i6zY9oQmhYqtxWN2xBOJ6Mqu4r0Y6S", 'Content-Type': 'application/json' };


const DogContext = createContext();
export const useDogs = () => useContext(DogContext)

export default function DogProvider({ children }) {
    const [breeds, setBreeds] = useState([]);
    const [adopted, setAdopted] = useState([])


    async function deleteOne(favId) {
        return fetch(`https://api.thedogapi.com/v1/favourites/${favId}`, {
            method: 'DELETE',
            headers
        })
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
    }



    return (
        <DogContext.Provider value={{ breeds, setBreeds, refreshAdopted, adopted }}>
            {children}
        </DogContext.Provider>
    );
};