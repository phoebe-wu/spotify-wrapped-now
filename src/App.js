import React from "react";
import './App.css';
import { LOGIN_URL } from "./auth.js";
import axios from 'axios';

function App() {
  return (
    <div className="login-page">
      <div className="login-msg"> Discover your Spotify Wrapped Now </div>
      <a href={LOGIN_URL}>
        <div className="login-btn">LOGIN WITH SPOTIFY</div>
      </a>
    </div>
  );
}

export default App;
