import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function HostNav(){

    const activeStyle=  {
        textDecoration:"underline",
        fontWeight:"900",
        color:"#191919"
    }

    return(
        <nav className="host-nav container">
            <NavLink 
            end 
            to='' 
            style={({isActive})=>isActive?activeStyle:null}
            >
                Dashboard
            </NavLink>
            <NavLink 
            to="income" 
            style={({isActive})=>isActive?activeStyle:null}
            >
                Income
            </NavLink>
            <NavLink 
            to="vans" 
            style={({isActive})=>isActive?activeStyle:null}
            >
                Vans
            </NavLink>
            <NavLink 
            to="reviews" 
            style={({isActive})=>isActive?activeStyle:null}
            >
                Reviews
            </NavLink>
        </nav>
    )
}