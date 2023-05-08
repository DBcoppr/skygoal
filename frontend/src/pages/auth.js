import React, { useState } from 'react'
import axios from "axios"
import Circleimg from '../components/circle'
import  {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./auth.css"

const Toastview=({msg})=>{
  toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose:"800",
    hideProgressBar: true
})
}

const Auth = () => {
  const [isLogin, setisLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate=useNavigate()
  const errormsg=document.getElementById("error-msg")

  
  const handlesubmit=async()=>{
  if (!password || !email ){
      errormsg.innerHTML="*enter the required details"
    }
  else if(!isLogin){
    if(!name){
      errormsg.innerHTML="*enter the required details"
    }
    else{
      try {
        const data=await axios.post("http://localhost:8001/signup", {name,email,password})
        Toastview({msg:"signup success"})
        setTimeout(function(){
          setisLogin(true)
          setPassword("")
          setEmail("")
        }, 1500);
      } catch (error) {
        errormsg.innerHTML="*"+error.response.data.message
      }
    }
  }
  else{
    try {
      const {data}= await axios.post("http://localhost:8001/login",{email,password})
      Toastview({msg:"you have loggedin successfully"})
      setTimeout(function(){
         navigate("/home")
       }, 1500);
       localStorage.setItem("token",data.token)
    } catch (error) {
      errormsg.innerHTML="*"+error.response.data.message
    }
  }
  }
  return (
    <>
      <main className='auth-page'>
        <div className="auth-container1">
          <header>
            <Circleimg w="30" h="30" r="20" color="black" />
            <p>Skygoal</p>
          </header>
          <div className="form-container-parent">
            <h1>
              {isLogin ? `Welcome back` : `Let's get started`}
            </h1>
            <p className='subheader'>
              {isLogin ? `Welcome back! Please enter your details` : `Let's start with your basic information`}</p>
            <div className="form-container">
              <span id='error-msg'></span>
              {!isLogin &&
                < div className="fc1">
                  <span>Name</span>
                  <input type="text" placeholder="enter name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
              }
              <div className="fc1">
                <span>Email</span>
                <input type="text" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="fc1">
                <span>Password</span>
                <input type="password" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <button className='signin-btn' onClick={()=>handlesubmit()}>{isLogin ? `Sign in` : `Sign up`}</button>
              <p className='account'>
                {isLogin ? `Dont have an account?` : `Already have an account?`}
                <button className='signup' onClick={() => {
                  setisLogin(!isLogin)
                  }}>
                  {isLogin ? `Sign up` : `Login`}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="auth-container2">
          <Circleimg w="100" h="100" r="50" color="#613DB7" />
          <div className="ice-frost"></div>
        </div>
        <footer >
          &copy;copyright 2023
        </footer>
      </main >
      <ToastContainer/>
    </>
  )
}

export default Auth
