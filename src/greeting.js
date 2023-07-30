import { useState, useEffect } from "react";
import './app.css';
import axios from 'axios';

export default function Greeting() {
    let date = new Date();
    let hour = date.getHours();
    let greeting;
    const [name, setName] = useState("");

    if (hour >= 6 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >=12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening"
    }
    const token = window.localStorage.getItem("token");
    const json = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    axios.get(`https://api.spotify.com/v1/me`, json).then((res) => {
        setName(!res.data.display_name ? "" : res.data.display_name)
    })   
    return (
        <h2>{!name ? `${greeting}` : `${greeting}, ${name}`}</h2>
    )
}