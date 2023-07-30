import { useState, useEffect } from "react";
import './app.css';
import axios from 'axios';
import Greeting from './greeting.js';

export default function Wrapped({setToken}) {
    const timespans = [{label: '1 Month', code: 'short_term'}, {label: '6 Months', code: 'medium_term'}, {label: 'All-Time', code: 'long_term'}]
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

    function TopItems({type}, {setToken}) {
        const [TopItems, setTopItems] = useState([]);
        const getTopItems = async (e) => {
            const res = await axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${active}&limit=5`, json)
            if(res.status === 200) {
                setTopItems(res.data.items)
                console.log({TopItems})
            } else if (res.status === 401) {
                setToken("");
                window.localStorage.setItem("token", "");
            } else {
                console.log(res.responseText)
                alert(this.responseText)
            }
        }
        useEffect(() => {
            console.log({active})
            getTopItems()
        },[active])

        useEffect(() => {
          
        },[TopItems])

        function renderTopSong(song, index) {
            return (
                <div className="top-item" key={song.id}>
                    <div className="top-item-rank"> {index + 1} </div>
                    <div className="top-item-img-container">
                        <img src={song.album.images[0].url} alt=""/>
                    </div>
                    <div className = "top-item-info-container">
                        <a href={song.external_urls.spotify} className="top-item-info">
                            <div className="top-item-info">{song.name}</div>
                        </a>
                        <div className="top-item-info">
                            {song.artists.map((artist) => (
                            <a key={artist.id} href={artist.external_urls.spotify} className="top-item-info"><span>{artist.name + " "}</span></a>
                            ))}
                        </div>
                        
                    </div>
                </div>
            )
        }
        function renderTopArtist(artist, index) {
            return (
                <div className="top-item" key={artist.id}>
                    <div className="top-item-rank"> {index + 1} </div>
                    <div className="top-item-img-container">
                        <img className="top-item-img" alt="" src={artist.images[0].url}/>
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
            {type === "artists" ? TopItems.map((item, index) => (renderTopArtist(item, index))) : TopItems.map((item, index) => (renderTopSong(item, index)))}
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