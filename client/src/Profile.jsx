import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Profile() {
    const [data,setData] = useState("");

    useEffect(()=>{
      fetch("https://student-management-p6ht.onrender.com/profile",{
        headers:{
          Authorization:localStorage.getItem("token")

        }
      })
      .then(res=>res.text())
      .then(data=>setData(data))
      .catch(err=>console.log(err));
      
    },[]);
    
  return (
    <>
    <h1>Dashboard working...</h1>
    <h1>{data}</h1>
    </>
  )
}

export default Profile