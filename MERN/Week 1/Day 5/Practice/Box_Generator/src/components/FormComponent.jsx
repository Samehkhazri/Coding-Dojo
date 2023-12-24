import React, { useState } from 'react';
import PersonCard from './PersonCard';
import './FormComponent.css'

const FormComponent = (props) => {
    const [people, setPeople] = useState([
        { favColor: "red" },
        { favColor: "blue" },
        { favColor: "purple" },
    ]);

    const [user, setUser] = useState({ username: "", favColor: "" });
    const [favColorError, setFavColorError] = useState("");

    const favColorHandler = (input) => {
        setUser({ ...user, favColor: input });
    };

    const addUser = (e) => {
        e.preventDefault();
        if (!favColorError) {
            setPeople([...people, user]);
            setUser({ username: "", favColor: "" });
        }
    };

    return (
        <div className='card'>
            
            <form onSubmit={addUser}>
            
                <div className='sameh'>
                    <label htmlFor="favColor">Favorite Color </label>
                    
                    <input
                        type="color"
                        onChange={(e) => favColorHandler(e.target.value)}
                        value={user.favColor}
                    />
                
                <button>Add </button>
                </div>
            </form>
            <div className='color'>
            {people.map((person, idx) => (
                <PersonCard key={idx} person={person} />
            ))}
            </div>
        </div>
    );
};

export default FormComponent;
