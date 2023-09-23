import React from "react"
import { Link } from "react-router-dom"


export default function Header(){
    return(
        <header>
            <div className="container">
                <nav>
                    <Link to="/" className="title">#Vaanlife</Link>
                    <Link to="about">About</Link>
                    <Link to="vans">Vans</Link>
                </nav>     
            </div>       
        </header>
    )
}