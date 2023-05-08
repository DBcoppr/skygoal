import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [value,setValue]=useState()
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear();
      navigate("/")
      window.location.reload()
  }
  useEffect(()=>{
 (
  async()=>{
    const getToken=localStorage.getItem("token")
    const {data}=await axios.get("http://localhost:8001/details", {
      headers: {
        'Authorization': `Bearer ${getToken}`
      }
    })
    setValue(data)
  }
 )()
  },[])

  if(value){
    return (
      <div style={{maxWidth:"300px"}}>
        <h1 style={{fontSize:"30px",color:"white"}}>Hello, {value[0].name} </h1>
        <button  style={{minWidth:"250px"}} className='signin-btn logout' onClick={()=>logout()}>Logout</button>
      </div>
    )
  }
  else{
    return(
      <h1>
        Loading...
      </h1>
    )
  }

}

export default Home