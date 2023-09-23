import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getVan } from "../../data"

export default function VanDetails(){

    const params = useParams()
    const [van,setVan] = useState(null)

    useEffect(()=>{
        setVan(getVan(params.id))
    },[params])


    return(
        van?
            <div className="van-details">
                <div className="container">
                    <Link to="/vans" className="back-to-vans">
                        <span>←</span> 
                        <p>Back to all vans </p>
                    </Link>
                    <img className="van-details-img" src={van.imageUrl} />
                    <div className={`filter-btn filter-${van.type}  filter-active`}>{van.type}</div>
                    <h2 className="van-details-name">{van.name}</h2>
                    <p className="van-details-price">${van.price}<span>/day</span></p>
                    <p className="van-details-desc">{van.description}</p>
                    <button className="primary-button">Rent this van</button>
                </div>
            </div>
            :
            <h2>Loading....</h2>
        

    )
}