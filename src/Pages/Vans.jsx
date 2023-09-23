import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import vans from "../data.js"
import { getVan } from "../data.js"


import Van from "../Components/Van"

export default function Home(){


    const [vansElements,setVansElements] = useState([])

    useEffect(()=>{
        const tempVans = []
        vans.forEach((van,index)=>{
            tempVans.push(<Van id={index+1} key={index} />)
        })
        setVansElements(tempVans)
    },[])



    return(
        <div className="vans-page">
            <div className="container">
                <h2 className="vans-page-title">Explore our vans options</h2>
                <div className="filter-vans-container">
                    <Link className="filter-btn filter-simple">Simple</Link>
                    <Link className="filter-btn filter-rugged">Rugged</Link>
                    <Link className="filter-btn filter-luxury">Luxury</Link>
                    <Link className="clear-filters-btn">Clear filters</Link>
                </div>

                <div className="vans-container">
                    {vansElements}
                </div>

            </div>
        </div>
    )
}