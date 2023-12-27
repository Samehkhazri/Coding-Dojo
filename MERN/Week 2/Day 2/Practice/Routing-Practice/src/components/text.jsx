// import React from 'react'
import { useParams } from 'react-router-dom'

const Text = () => {
    console.log("useParams Content :", useParams())
    const { word } = useParams()
    return (
        <div>
            <h1> The Word is :{word} </h1>
        </div>
    )
}

export default Text