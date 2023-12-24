import React from 'react'

const PersonCard = ({person}) => {

    return (
    <div className='sameh' style={{backgroundColor:person.favColor}}>
        <div>{person.username}</div>

    </div>
    )
}

export default PersonCard