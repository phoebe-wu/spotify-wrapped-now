import { useState, useEffect } from "react";
import './home.css'
import axios from 'axios';
import Sidebar from "./sidebar.js";

const SideBar = () => <div>SideBar</div>
const TopItems = () => <div>TopItems</div>

export default function Home() {
    return (
        <div class="home-page">
            <div><Sidebar/></div>
            <div class='home-container'>Two MAIN</div>
        </div>
    )
}