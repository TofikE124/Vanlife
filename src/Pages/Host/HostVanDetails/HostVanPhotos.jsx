import React, { useEffect, useState } from "react"
import { useLocation, useOutletContext } from "react-router-dom"


export default function HostVanPhotos(){

    const [van,setVan] = useState(null)
    const outletContext = useOutletContext()

    useEffect(()=>{
        setVan(outletContext.van)
    },[])

    return(
        van?
        <div className="container host-van-photos">
            <img src={van.imageUrl} />
        </div>
        :<h2>Loading....</h2>
    )
}