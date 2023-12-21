import React from "react";
import { useState } from "react";


const SaleItem = (props) => {
    const { prop1 } = props;
    const [age, setAge] = useState(prop1.age)
    const increaseAge  = () => {
        setAge(age+1)
    }
    return (
        <div>
            <h1>{prop1.firstName}, {prop1.lastName}</h1>
            <h4>Age:{age}</h4>
            <h4>Hair Color :{prop1.hairColor}</h4>
            <button onClick={()=> increaseAge()}>Birthday Button for {prop1.firstName}, {prop1.lastName} </button>
        </div>
    );
}
export default SaleItem

