import { useState, useEffect } from "react";
import './app.css';
import axios from 'axios';
import Greeting from './greeting.js';

export default function Wrapped() {
    const timespans = [{label: '1 month', code: 'short_term'}, {label: '6 months', code: 'medium_term'}, {label: 'all-time', code: 'long_term'} ]
    const [active, setActive] = useState(timespans[0].code);
    const token = window.localStorage.getItem("token");
    const json = {
        headers: {
          Authorization: `Bearer ${token}`
        }
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
        const [TopItems, setTopItems] = useState([]);
        const getTopItems = async (e) => {
            try {
                const res = await axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${active}&limit=5`, json)
                setTopItems(res.data.items)
                console.log({TopItems})
            } catch (err) {
                console.log(err)
                window.location.path = "/"
            }
        }
        useEffect(() => {
            console.log({active})
            getTopItems()
        },[active])

        useEffect(() => {
          
        },[TopItems])

        function renderTopSong(song) {
            return (
                <div className="top-item">
                    <div className="top-item-img-container">
                        <img src={song.album.images[0].url}/>
                    </div>
                    <div className = "top-item-info-container">
                        <a href={song.external_urls.spotify} className="top-item-info">
                            <div className="top-item-info">{song.name}</div>
                        </a>
                        <a href={song.artists[0].external_urls.spotify} className="top-item-info">
                            <div>{song.album.artists[0].name}</div>
                        </a>
                    </div>
                </div>
            )
        }
        function renderTopArtist(artist) {
            return (
                <div className="top-item">
                    <div className="top-item-img-container">
                        <img src={artist.images[0].url}/>
                    </div>
                    <div className="top-item-info-container">
                        <a href={artist.external_urls.spotify} className="top-item-info">
                            <div> {artist.name} </div>
                        </a>
                    </div>
                </div>
            )
        }

      return (
        <div className='top-items'>
            <h2 className="top-items-header">Your Top 5 {type}</h2>
            {type === "artists" ? TopItems.map((i) => (renderTopArtist(i))) : TopItems.map((i) => (renderTopSong(i)))}
        </div>
      )
    }

    return <div className = 'home-container wrapped'>
        <h1 className= 'greeting grid-col-span-2'><Greeting/></h1>
        <div className = 'grid-col-span-2'><TimespanToggleGroup/></div>
        <div><TopItems type='artists' range={active}/></div>
        <div><TopItems type='tracks' range={active}/></div>
    </div>  
}