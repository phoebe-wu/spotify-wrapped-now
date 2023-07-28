import React, { useState, useEffect } from "react";
import './app.css';
import axios from 'axios';
import Login from './auth.js';
import Home from "./home.js";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token");

    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  }, [])
  
  return (
    <div className="login-page">
        {!token ?
          <div> <Login/> </div>: 
          <div> <Home setToken = {setToken}/> </div>
        }
    </div>
  );
}

export default App;
