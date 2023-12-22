import { useState } from "react"



const Form = () => {
    const[firstName,firstNameState]=useState("");
    const[lastName,lastNameState]=useState("");
    const[email,emailState]=useState("");
    const[password,passwordState]=useState("");
    const[confirmPassword,confirmpPasswordState]=useState("")
    const createUser=(e)=>{
        e.preventDefault()
    }
    
    return (
    <div>
        <form onSubmit={createUser}>
            <label> First Name </label>
            <input type="text" onChange={(e)=>firstNameState(e.target.value)}/>
            {firstName>2?
            <p></p>:
            <p>First Name must be at least 2 characters </p>
        }
            <label > Last Name</label>
            <input type="text" onChange={(e)=> lastNameState(e.target.value)}/>
            {lastName>2?
            <p></p>:
            <p>Last Naame must be at least 2 characters </p>
            }
            <label>Email</label>
            <input type="text" onChange={(e)=>emailState(e.target.value)}/>
            {email>2?
            <p></p>:
            <p>Email must be at least 2 characters </p>
            }
            <label>Password</label>
            <input type="password" onChange={(e)=>passwordState(e.target.value)}/>
            {
                password>8?
                <p></p>:
                <p>password must be at least 8 characters</p>

            }
            {
                password===confirmPassword?
                <p></p>:
                <p>Password must match</p>
            }
            <label>Confirm Password</label>
            <input type="password" onChange={(e)=>confirmpPasswordState(e.target.value)}/>
            <button>Submit</button>
        </form>
        
    </div>
    )
}

export default Form