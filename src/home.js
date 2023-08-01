import { GoHome, GoHomeFill ,GoSignOut} from "react-icons/go";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './app.css'
import Wrapped from './wrapped.js'

export default function Home() {
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(window.location)
        const hash = window.location.hash
        let token = window.localStorage.getItem("token");

        if(!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", token)
        }
        setToken(token)
        setIsLoading(false)
    }, [])

    function Sidebar() {
        function logout() {
            setToken("");
            window.localStorage.setItem("token", "");
        }
        return (
        <div className = 'home-container sidebar'>
            <h2 className="wrapped-now-header">Wrapped Now!</h2>
            <button className="sidebar-btn-container sidebar-btn sidebar-selected">
                <GoHomeFill className="icon" size={30}/>
                <span>Home</span>
            </button>
            <button className="sidebar-btn-container sidebar-btn" onClick={logout}>
                <GoSignOut className="icon" size={30}/>
                <span>Log out</span>
            </button>
        </div>  
        );
    }

    function LoadingScreen() {
        return(
            <div> LOADING...</div>
        )
    }

    return (
        <div>
            {isLoading ? <div><LoadingScreen/></div> : 
            !token ? <Navigate replace to="/"/> :
                <div className="home-page">
                    <div><Sidebar/></div> 
                    <div><Wrapped setToken = {setToken}/></div>
                </div>
            }
        </div>
    )
}