import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    console.log("useParams Content :", useParams())
    const {num} = useParams()
    return (
        <div>
            {isNaN(num)?<h1>the word is : {num}</h1>:<h1>the number is :{num}</h1>}
        </div>
    )

    
}

export default Number