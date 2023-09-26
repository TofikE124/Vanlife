import React from "react"
import { Link } from "react-router-dom"


export default function NotFoundPage(){
    return(
        <div className="not-found-container container">
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link className="secondary-btn block-btn"  to="/">Return to home</Link>
        </div>
    )

}