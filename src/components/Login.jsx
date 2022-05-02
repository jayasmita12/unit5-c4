import React, { useEffect } from "react";
import { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const {handleAuth}=useContext(Authcontext) 
    const navigate=useNavigate()

    // useEffect(()=>{
    //     getData()
    // },[])



    return (
      <div>
        <input
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={()=>{
            handleAuth(true)
            navigate("/")
            }}>Login</button>
      </div>
    );
  };