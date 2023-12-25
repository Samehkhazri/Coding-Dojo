import React, { useState } from "react";

import axios from 'axios'

function App() {
    const [axiosPokem, setAxiosPokem] = useState([])
    const axiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=810")
            .then(response => {
                console.log("AXIOS RESPONSE :", response.data)
                setAxiosPokem(response.data.results)
            })
            .catch(error => console.log("YOU HAVE ERROR:", error))
    }


    return (
        <>


            <button onClick={axiosPokemon}>Fetch Pokemons</button>
            {axiosPokem.map(pokemon => <ul key={pokemon.id}> <li>{pokemon.name}</li> </ul>)}

        </>
    )
}

export default App