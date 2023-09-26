import React from "react"
import { Link, NavLink } from "react-router-dom"
import ProfilePic from '../assets/ProfilePic.png'

export default function Header(){


    const activeStyle = {textDecoration:'underline'}

    return(
        <header>
            <div className="container">
                <nav>
                    <NavLink  to="/" className="title">
                        #Vanlife
                    </NavLink>
                    <NavLink style={({isActive})=>isActive?activeStyle:null} to="host">
                        Host
                    </NavLink>
                    <NavLink style={({isActive})=>isActive?activeStyle:null} to="about">
                        About
                    </NavLink>
                    <NavLink style={({isActive})=>isActive?activeStyle:null} to="vans">
                        Vans
                    </NavLink>
                    <NavLink to="/login">
                        <img src={ProfilePic} /> 
                    </NavLink>
                </nav>     
            </div>       
        </header>
    )
}