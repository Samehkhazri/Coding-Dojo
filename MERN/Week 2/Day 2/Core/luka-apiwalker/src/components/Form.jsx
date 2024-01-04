import React from 'react'
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const {setOption,setId,option,id}=props;
    const navigate=useNavigate();
    const formHandler=(e)=>{
        e.preventDefault();
        navigate(`/${option}/${id}`)
    }
  return (
    <div>
        <form onSubmit={formHandler}>
            <label > Search for: </label>
            <select onChange={(e)=>setOption(e.target.value)}>
                <option value={'planets'}>planet</option>
                <option value={'people'}>people</option>
            </select>
            <label>ID : </label>
            <input type="number" onChange={(e)=>setId(e.target.value)} />
            <button>Search</button>
        </form>
    </div>
  )
}

export default Form