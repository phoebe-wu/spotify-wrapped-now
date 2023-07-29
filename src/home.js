import { useState, useEffect } from "react";
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
            <h2 className="wrapped-now-header">Wrapped Now!</h2>
            <button className="sidebar-btn">Home</button>
            <button className="sidebar-btn" onClick={logout}>Logout</button>
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