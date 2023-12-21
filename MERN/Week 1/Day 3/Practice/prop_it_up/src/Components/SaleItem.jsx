import React from "react";

const SaleItem = (props) => {
    const { prop1 } = props;
    return (
        <div>
            <h1>{prop1.firstName}, {prop1.lastName}</h1>
            <h4>Age:{prop1.age}</h4>
            <h4>Hair Color :{prop1.hairColor}</h4>
        </div>
    );
};

export default SaleItem;
