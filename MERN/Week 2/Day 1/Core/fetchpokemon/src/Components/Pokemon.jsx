import React, { useState } from "react";

// const Pokemon = () => {
//     const [pokemon, setPokemon] = useState([]);
//     const hundleFetch = () => {
//         fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
//             .then((response) => response.json())
//             .then((jsonres) => setPokemon(jsonres), console.log(pokemon))
//             .catch((err) => console.log("you have an error", err));
//     };



// export default Pokemon;
// import { useState } from 'react'
// import './App.css'

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