import React, { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"


export default function HostVanInfo(){


    const [van,setVan] = useState(null)
    const outletContext = useOutletContext()

    useEffect(()=>{
        setVan(outletContext.van)
    },[])

    return(
        van?
        <div className="host-van-details-details">
            <p className="host-van-info-name">Name: <span>{van.name}</span></p>
            <p className="host-van-info-type">Category: <span>{van.type}</span></p>
            <p className="host-van-info-desc">Description: <span>{van.description}</span></p>
            <p className="host-van-info-visibility">Visibility: <span>Public</span></p>
        </div>
        :<h2>Loading....</h2>
    )
}