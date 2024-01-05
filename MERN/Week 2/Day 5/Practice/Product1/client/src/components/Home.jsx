import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  // inputs state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // use navigate
  const naviagte = useNavigate();
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const createdManager = {
        title,
        price,
        description,
    };
    axios
      .post("http://localhost:8000/api/manager", createdManager)
      .then((response) => {
        console.log(response.data)
        naviagte("/");
      })
      .catch((err) => console.log(err));
      setTitle("");
      setPrice("");
      setDescription("");
  };
    // product state
    const [managers, setManagers] = useState([]);

    // get all products from db
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/manager")
        .then((managers) => {setManagers(managers.data);
            console.log(managers.data)
        })
        .catch((err) => console.log(err));
    }, []);
  

  return (
    <div className="container">

      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title} className="form-control-group"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <textarea className="form-control-group" name="" id="" cols="30" rows="10" onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
        </div>
        <button className="btn btn-success w-1">Create 📽️</button>
      </form>
      <div>
      {managers.map((oneManager) => {
        return (
          <div key={oneManager._id} className="container">
            <Link to={`/manager/${oneManager._id}`}>
              <h2>{oneManager.title}</h2>
            </Link>
            
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;