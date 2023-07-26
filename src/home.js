import { useState, useEffect } from "react";
import './home.css'
import axios from 'axios';
import Sidebar from "./sidebar.js";
import Wrapped from "./wrapped.js";

// const SideBar = () => <div>SideBar</div>
// const Wrapped = () => <div>Wrapped</div>

export default function Home() {
    return (
        <div class="home-page">
            <div><Sidebar/></div>
            <div><Wrapped/></div>
        </div>
    )
}