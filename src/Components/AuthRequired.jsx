import React from "react"
import { Navigate, Outlet } from "react-router-dom";


export default function AuthRequired(){

    const auth= true;


    return(
        auth?
        <Outlet />
        :<Navigate 
            to="/login"
            state={{message:"You must log in first"}}
            />
    )
}