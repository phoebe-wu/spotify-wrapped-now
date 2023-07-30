import { GoHome, GoHomeFill ,GoSignOut} from "react-icons/go";
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

    return (
        <div className="home-page">
            <div><Sidebar setToken = {setToken}/></div> 
            <div><Wrapped setToken = {setToken}/></div>
        </div>
    )
}