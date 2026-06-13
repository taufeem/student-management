import React, { useState } from 'react'
import './Register.css'
import {Link} from "react-router-dom";

function Register() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  
  const handleSubmit = (e)=>{
     e.preventDefault();
  
    
    fetch("http://localhost:3000/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,password
      })
    })
    .then(res=>res.json())
    .then(data=>alert(data.message))
    .catch(err=>console.log(err))
  }
  return (
    <div className='body'>
        <div className='regContainer'>
          <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br />
      <label htmlFor="">Password</label>
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br /><br />
      <button type="submit">Sign up</button>
      
           </form>
       </div>
         <div className='reqSigninbody'>
       <div className='reqSignin'>
        <h1>Welcome back!</h1>
        <p>To keep conntected with us please <br /> login  with your personal info</p>
         <Link to="/login">
         <button type="submit">Sign in</button>
         </Link>
       </div>
       </div>
    </div>
  )
}

export default Register