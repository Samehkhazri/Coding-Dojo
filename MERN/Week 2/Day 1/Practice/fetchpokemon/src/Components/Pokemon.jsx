import React, { useState } from "react";



function App() {
    const [pokemon, setPokemon] = useState([])
    const hundleFetch = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
            .then(response => {
                console.log("RESPONSE :", response);
                return response.json()
            })
            .then(response => {
                console.log("FETCH API RESPONSE AS JSON : ", response)
                setPokemon(response.results)
            })
            .catch(error => console.log("You have error :", error))
    }

    return (
        <>
        
            
                <button onClick={hundleFetch}>Fetch Pokemons</button>
                {pokemon.map(pokemon => <ul key={pokemon.id}> <li>{pokemon.name}</li> </ul>)}
        
        </>
    )
}


export default App