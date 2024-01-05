import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleManager = () => {
    const { id } = useParams();
    const [manager, setManager] = useState({});
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/manager/" + id)
        .then((oneManager) => {
            setManager(oneManager.data);
            console.log(oneManager.data)
        })
        .catch((err) => console.log(err));
    }, [id]);
  return (
    <div>
        {manager ? (
        <>
        <div className='container'>
            <div>
            <h2 className='text-center'>Title: {manager.title}</h2>
            </div>
            <div>
            <p>Price: {manager.price}</p>
            </div>
            <div>
               <p>Description: {manager.description}</p> 
            </div>
        </div>
          

        </>
      ) : (
        "LOADING..."
      )}
    </div>
  )
}

export default SingleManager