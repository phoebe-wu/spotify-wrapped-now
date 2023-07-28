import { useState, useEffect } from "react";
import './app.css';
import axios from 'axios';

export default function Wrapped() {
    const timespans = [{label: '1 month', code: 'short_term'}, {label: '6 months', code: 'medium_term'}, {label: 'all-time', code: 'long_term'} ]
    const [active, setActive] = useState(timespans[0].code);
    const token = window.localStorage.getItem("token");
    const json = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    function Greeting() {
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
        axios.get(`https://api.spotify.com/v1/me`, json).then((res) => {
            setName(!res.data.display_name ? "" : res.data.display_name);
            console.log(name)
        })   
        return (
            <h2>{!name ? `${greeting}` : `${greeting}, ${name}`}</h2>
        )
    }

    function TimespanToggleGroup() {
    return (
        <div className="timespan-toggle">
            {timespans.map((span) => (
                <button className={active === span.code ? 'timespan timespan-selected' : 'timespan'} key={span.code} onClick={() => {setActive(span.code)}}> {span.label} </button>
            ))}
        </div>
    )}

    function TopItems({type}) {
        const getTopArtists = async (e) => {
            const {data} = await axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=5`, json)
            console.log({data});
        }
        useEffect(() => {
            console.log({active})
            getTopArtists()
        },[active])
        
      return (
        <div className='top-items'>
            <h2>THESE ARE YOUR FAVE {type} {active}</h2>
        </div>
      )
    }

    return <div className = 'home-container wrapped'>
        <h1 className= 'header grid-col-span-2'><Greeting/></h1>
        <div className = 'grid-col-span-2'><TimespanToggleGroup/></div>
        <div><TopItems type='artists' range={active}/></div>
        <div><TopItems type='tracks' range={active}/></div>
    </div>  
}