import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import Login from './auth.js';
import Home from "./home.js";

function App() {

  function NoPage() {
    return(
      <div className="login-page"> 
        <div className="login-msg">
          <div>404 - Page not found</div>
          <div className="login-subtext">Oh no, there's nothing here :'(</div>
          </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="home" element={<Home />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
