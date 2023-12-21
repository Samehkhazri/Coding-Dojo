import { useState } from "react";
import "./form.css"


const Form = () => {
    const[firstName,firstNameState]=useState("");
    const[lastName,lastNameState]=useState("");
    const[email,emailState]=useState("");
    const[password,passwordState]=useState("");
    const[confirmPassword,confirmPasswordState]=useState("")

    return <div className="formula">
        <form>
            <label> Firs tName </label>
            <input type="text" onChange={(e)=>firstNameState(e.target.value)} />
            <label> Last Name </label>
            <input type="text" onChange={(e)=> lastNameState(e.target.value)}  />
            <label> Email </label>
            <input type="text" onChange={(e)=> emailState(e.target.value)} />
            <label> Password </label>
            <input type="password" onChange={(e)=> passwordState(e.target.value)}/>
            <label> Confirm Password </label>
            <input type="password"onChange={(e)=> confirmPasswordState(e.target.value)}/>
        </form>
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
        <p>Confirm Password : {confirmPassword}</p>
    </div>;
};

export default Form;
