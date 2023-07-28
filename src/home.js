import { useState, useEffect } from "react";
import './app.css'
import Wrapped from './wrapped.js'

export default function Home() {
    function logout() {
        //setToken("");
        //window.localStorage
    }

    function Sidebar() {
        return (
        <div className = 'home-container sidebar'>
            <h1>WRAPPED NOW</h1>
              <div className="sidebar-btn">Home</div>
              <div className="sidebar-btn">Logout</div>
        </div>  
        );
    }

    return (
        <div className="home-page">
            <div><Sidebar/></div> 
            <div><Wrapped/></div>
        </div>
    )
}