import { useState, useEffect } from "react";
import './app.css';
import TopItems from "./TopItems";

export default function Wrapped() {
    const timespans = [{label: '1 month', code: 'short_term'}, {label: '6 month', code: 'medium_term'}, {label: 'all-time', code: 'long_term'} ]
    function TimespanToggleGroup() {
    const [active, setActive] = useState(timespans[0].code);

    useEffect(() => {
        console.log({active})
    },[active])

    return (
        <div className="timespan-toggle">
            {timespans.map((span) => (
                <button className={active === span.code ? 'timespan timespan-selected' : 'timespan'} key={span.code} onClick={() => {setActive(span.code)}}> {span.label} </button>
            ))}
        </div>
    )}
    return <div className = 'home-container wrapped'>
        <h1 className= 'header'> Good Afternoon, Phoebe </h1>
        <div><TimespanToggleGroup/></div>
        <div><TopItems/></div>
        <div><TopItems/></div>
    </div>  
}