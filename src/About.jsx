import React from "react"
import AboutImg from './assets/About.png'
import { Link } from "react-router-dom"

export default function About(){
    return(
        <div className="about-container">

            <img src={AboutImg} className="about-img" />
            <div className="container">
                <h2 className="about-subtitle">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p className="about-desc">Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                </p>
                <p className="about-desc">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>

                <div className="about-footer">
                    <p>Your destination is waiting.<br />Your van is ready.</p>
                    <Link className="explore-btn">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}