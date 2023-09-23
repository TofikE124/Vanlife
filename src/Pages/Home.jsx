import React , {useEffect} from "react"
import { Link } from "react-router-dom"

export default function Home(){

    return(
        <div className="home-container">
            <div className="container">
                <h2 className="subtitle">You got the travel plans, we got the travel vans.</h2>
                <p className="home-desc">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <Link to='vans' className="primary-button">Find your van</Link> 
            </div>
        </div>
    )
}