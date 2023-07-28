import { useState, useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import './app.css'
import Wrapped from './wrapped.js'

export default function Home({setToken}) {
    function Sidebar({setToken}) {
        function logout() {
            setToken("");
            window.localStorage.setItem("token", "");
        }

        return (
        <div className = 'home-container sidebar'>
            <h1>WRAPPED NOW</h1>
              <div className="sidebar-btn">Home</div>
              <div className="sidebar-btn" onClick={logout}>Logout</div>
        </div>  
        );
    }

    return (
        <div className="home-page">
            <div><Sidebar setToken = {setToken}/></div> 
            <div><Wrapped/></div>
        </div>
    )
}