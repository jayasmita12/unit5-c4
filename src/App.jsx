import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Home} from "./components/Home"
import {Routes,Route} from "react-router-dom"
import { Login } from './components/Login'
// import {Navbar} from "./components/Navbar"
import { Logout } from './components/Logout'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Authcontext } from './contexts/Authcontext'
import { useParams } from 'react-router-dom'

function App() {
  const {isAuth} = useContext(Authcontext)
  const {id} = useParams()
  
  return (
    <div className="App">
      
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {/* <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link> */}
        <Link to={isAuth ? "/logout":"/login"}>{isAuth?"Logout":"Login"}</Link>
      </div>

      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      
      </div>
    
  )
}

export default App
