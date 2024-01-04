import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Display = ({opt,iid}) => {
    const [display,setDisplay]=useState(null)
    const { option, id } = useParams();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${option}/${id}`)
    .then(res=>setDisplay(res.data))
    .catch(err=>console.log(err))
    },[opt,iid])
    console.log(display)
    return (
        <div>
            {display? <h4>{display.name}</h4>:<h4>loading</h4>}
        </div>
    )
}

export default Display